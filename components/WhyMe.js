import GradientLabel from "./GradientLabel";

const reasons = [
  { icon: "👤", title: "You Work With Me Directly", desc: "No account managers, no middlemen. Direct access to the person building your website.", glow: "glass-blue" },
  { icon: "⏱", title: "72 Hours. Not 72 Days.", desc: "While agencies schedule discovery calls, your website is already live and making money.", glow: "glass-emerald" },
  { icon: "💰", title: "Prices That Make Sense", desc: "Premium quality at a fraction of agency prices. Budget goes into website, not overhead.", glow: "glass-purple" },
  { icon: "🎨", title: "Zero Templates. Ever.", desc: "Every pixel is custom designed and coded for your specific business.", glow: "glass-pink" },
];

export default function WhyMe() {
  return (
    <div className="reveal py-16 max-w-4xl mx-auto px-5 md:px-8">
      <div className="text-center mb-10">
        <GradientLabel>Why Choose Me</GradientLabel>
        <h3 className="text-section-title font-display text-white">Four Reasons. <span className="accent-text">No Fluff.</span></h3>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {reasons.map((r, i) => (
          <div key={i} className={"glass " + r.glow + " rounded-xl p-6 group card-animate"}>
            <span className="text-2xl block mb-3 card-icon">{r.icon}</span>
            <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-accent-300 transition-colors">{r.title}</h4>
            <p className="text-[13px] text-white/45 leading-relaxed group-hover:text-white/60 transition-colors">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
