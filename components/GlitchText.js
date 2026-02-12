export default function GlitchText({ children, className = "" }) {
  return (
    <span className={"relative inline-block " + className} data-text={children}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 text-accent-400/20 animate-[glitch1_2s_infinite]" aria-hidden="true" style={{ clipPath: "inset(20% 0 60% 0)" }}>{children}</span>
      <span className="absolute inset-0 text-red-400/10 animate-[glitch2_2s_infinite]" aria-hidden="true" style={{ clipPath: "inset(60% 0 10% 0)" }}>{children}</span>
    </span>
  );
}
