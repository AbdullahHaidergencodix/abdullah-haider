const reasons = [
  { icon: "\u{1F464}", title: "You Work With Me Directly", desc: "No account managers, no middlemen. Direct access to the person building your website." },
  { icon: "\u23F1", title: "72 Hours. Not 72 Days.", desc: "While agencies schedule discovery calls, your website is already live and making money." },
  { icon: "\u{1F4B0}", title: "Prices That Make Sense", desc: "Premium quality at a fraction of agency prices. Your budget goes into the website, not overhead." },
  { icon: "\u{1F3A8}", title: "Zero Templates. Ever.", desc: "Every pixel is custom designed and coded for your specific business. No cookie-cutter solutions." },
];
export default function WhyMe() {
  return (
    <div className="reveal py-16 max-w-4xl mx-auto px-5 md:px-8">
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono text-accent-400 tracking-[0.3em] uppercase block mb-3">Why Choose Me</span>
        <h3 className="text-section-title font-display text-white">Four Reasons. No Fluff.</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {reasons.map((r, i) => (
          <div key={i} className="glass glass-glow rounded-xl p-6 group card-animate">
            <span className="text-2xl block mb-3 card-icon">{r.icon}</span>
            <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-accent-300 transition-colors">{r.title}</h4>
            <p className="text-[13px] text-white/45 leading-relaxed group-hover:text-white/60 transition-colors">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
