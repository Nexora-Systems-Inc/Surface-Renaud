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
      className={`font-sans-body text-[10px] tracking-[0.22em] uppercase ${className}`}
    >
      <span className={isDark ? "text-white/35" : "text-[#7A7774]/70"}>
        Powered by{" "}
      </span>
      <span className={isDark ? "text-[#B8975A]/90" : "text-[#7A7774]"}>
        CrewPilot
      </span>
      <span className={isDark ? "text-white/25" : "text-[#7A7774]/50"}>
        {" "}
        (Beta)
      </span>
    </p>
  );
}
