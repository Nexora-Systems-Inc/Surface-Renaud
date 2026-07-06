"use client";

import { useEffect, useState } from "react";
import { ProjectPlanner } from "@nexora-systems-inc/planner-ui";
import type { IntakeClientConfig } from "@nexora-systems-inc/planner-adapters";
import { getIntakeClientConfig } from "@/lib/nexoraIntake";

export default function SurfaceRenaudProjectPlanner() {
  const [intakeConfig, setIntakeConfig] = useState<IntakeClientConfig | null>(
    null,
  );
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIntakeConfig(getIntakeClientConfig());
    } catch (error) {
      setConfigError(
        error instanceof Error ? error.message : "Planner configuration error.",
      );
    }
  }, []);

  if (configError) {
    return <p className="font-sans-body text-sm text-red-600">{configError}</p>;
  }

  if (!intakeConfig) {
    return (
      <p className="font-sans-body text-[#7A7774] text-sm">
        Loading project planner…
      </p>
    );
  }

  return (
    <ProjectPlanner
      intakeConfig={intakeConfig}
      locale="en-CA"
      className="bg-[#F5F2EE] p-8 lg:p-12"
      formClassName="font-sans-body text-[#2C2B29]"
      submitLabel="Submit Project Request"
    />
  );
}
