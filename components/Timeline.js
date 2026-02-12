const events = [
  { year: "2022", title: "Started Web Development", desc: "Fell in love with building things for the internet." },
  { year: "2023", title: "Founded Gencodix", desc: "Turned freelance work into a real brand and team." },
  { year: "2024", title: "40+ Projects Delivered", desc: "Built for clients in 8+ countries across 4 continents." },
  { year: "2025", title: "Scaling Up", desc: "Expanding the team and taking on bigger challenges." },
];
export default function ExperienceTimeline() {
  return (
    <div className="reveal mt-16">
      <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-8 text-center">My Journey</span>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/20 via-accent-500/10 to-transparent" />
        {events.map((e, i) => (
          <div key={i} className={"relative flex items-start gap-6 mb-10 " + (i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-500/30 border-2 border-bg-primary -translate-x-1/2 mt-1.5 z-10" />
            <div className={"flex-1 ml-10 md:ml-0 " + (i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
              <span className="text-[11px] font-mono text-accent-400/40 block mb-1">{e.year}</span>
              <h4 className="font-display font-bold text-white/80 text-sm mb-1">{e.title}</h4>
              <p className="text-[12px] text-white/25 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
