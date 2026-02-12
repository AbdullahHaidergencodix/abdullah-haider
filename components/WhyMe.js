const reasons = [
  { icon: "👤", title: "You Work With Me Directly", desc: "No account managers, no middlemen. You get direct access to the person designing and building your website." },
  { icon: "⏱️", title: "72 Hours. Not 72 Days.", desc: "While agencies take weeks for a discovery phase, your website is already live and making money." },
  { icon: "💰", title: "Prices That Make Sense", desc: "Premium quality at a fraction of agency prices. Because overhead should not be your problem." },
  { icon: "🎨", title: "Zero Templates", desc: "Every pixel is custom designed and coded for your specific business. No cookie-cutter solutions." },
];
export default function WhyMe() {
  return (
    <div className="reveal py-16 max-w-4xl mx-auto px-5 md:px-8">
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-3">Why Choose Me</span>
        <h3 className="text-section-title font-display text-white">Four Reasons. No Fluff.</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {reasons.map((r, i) => (
          <div key={i} className="glass glass-glow rounded-xl p-6 group">
            <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform duration-500">{r.icon}</span>
            <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-accent-200 transition-colors">{r.title}</h4>
            <p className="text-[12px] text-white/30 leading-relaxed group-hover:text-white/45 transition-colors">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
