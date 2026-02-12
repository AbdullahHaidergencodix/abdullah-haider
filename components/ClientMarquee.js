const clients = ["BrightPath", "Nexus Trading", "Elevate Fitness", "ShipStack", "Lumière", "CloudSync AI", "Horizon RE", "Grind Coffee", "TechFlow", "Atlas Media"];
export default function ClientMarquee() {
  return (
    <div className="py-10 border-y border-white/[0.02] overflow-hidden">
      <p className="text-center text-[10px] font-mono text-white/15 tracking-widest uppercase mb-6">Trusted by businesses worldwide</p>
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="inline-flex items-center mx-8">
              <span className="text-sm text-white/[0.06] font-display font-bold tracking-tight">{c}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
