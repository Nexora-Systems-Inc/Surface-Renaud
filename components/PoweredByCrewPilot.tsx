import Image from "next/image";

type PoweredByCrewPilotProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function PoweredByCrewPilot({
  variant = "light",
  className = "",
}: PoweredByCrewPilotProps) {
  const isDark = variant === "dark";

  return (
    <p
      className={`inline-flex items-center gap-1.5 font-sans-body text-[17.5px] tracking-[0.22em] uppercase ${className}`}
    >
      <span className={isDark ? "text-white/35" : "text-[#7A7774]/70"}>
        Powered by
      </span>
      <Image
        src="/products/crewpilot-logo.png"
        alt="CrewPilot"
        width={72}
        height={72}
        className="h-[1.96875rem] w-auto shrink-0"
      />
      <span className="text-[#B8975A] text-[11px] tracking-[0.22em]">
        (Beta)
      </span>
    </p>
  );
}
