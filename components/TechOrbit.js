const techs = [
  { name: "React", angle: 0 },
  { name: "Next.js", angle: 45 },
  { name: "Tailwind", angle: 90 },
  { name: "TypeScript", angle: 135 },
  { name: "Node.js", angle: 180 },
  { name: "Figma", angle: 225 },
  { name: "Framer", angle: 270 },
  { name: "Vercel", angle: 315 },
];
export default function TechOrbit() {
  return (
    <div className="reveal relative w-72 h-72 md:w-96 md:h-96 mx-auto my-16">
      {/* Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent-600/10 border border-accent-500/20 flex items-center justify-center z-10">
        <span className="font-display font-bold text-accent-400 text-sm">AH</span>
      </div>
      {/* Orbit ring */}
      <div className="absolute inset-4 rounded-full border border-white/[0.03] animate-[spin_40s_linear_infinite]">
        {techs.map((t, i) => {
          const rad = (t.angle * Math.PI) / 180;
          const radius = 45;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          return (
            <div
              key={t.name}
              className="absolute animate-[spin_40s_linear_infinite_reverse] flex items-center justify-center"
              style={{ left: x + "%", top: y + "%", transform: "translate(-50%,-50%)" }}
            >
              <div className="glass rounded-lg px-3 py-1.5 hover:border-accent-500/20 transition-all duration-300 group cursor-none">
                <span className="text-[10px] font-mono text-white/40 group-hover:text-accent-400 transition-colors whitespace-nowrap">{t.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-white/[0.015]" />
    </div>
  );
}
