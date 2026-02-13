import SpotlightCard from "./SpotlightCard";
import GradientLabel from "./GradientLabel";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Landing Page", price: "PKR 10,000", usd: "~$35", desc: "Perfect for a single high-converting page fast.",
    features: ["Custom design from scratch", "Mobile responsive", "Contact form / WhatsApp", "Basic SEO setup", "Delivery in 48-72 hours", "1 revision round"],
    cta: "Get Started", popular: false, glow: "glass-blue",
  },
  {
    name: "Full Website", price: "PKR 25,000", usd: "~$90", desc: "Complete online presence that impresses.",
    features: ["5-7 custom pages", "Advanced animations", "SEO optimized", "Performance optimized", "Analytics integration", "5-7 day delivery", "3 revision rounds", "1 month free support"],
    cta: "Most Popular", popular: true, glow: "",
  },
  {
    name: "Monthly Plan", price: "PKR 8,000", usd: "~$30/mo", desc: "Keep your website updated and performing.",
    features: ["Content updates", "Performance monitoring", "Security updates", "Monthly analytics", "Priority support", "Bug fixes included"],
    cta: "Subscribe", popular: false, glow: "glass-purple",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-blue w-[400px] h-[400px] -left-[100px] top-[30%]" />
      <div className="orb orb-pink w-[300px] h-[300px] right-[10%] bottom-[10%]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <GradientLabel>Pricing</GradientLabel>
          <h2 className="text-section-title font-display text-white mb-5">Simple Pricing. <span className="accent-text">No Surprises.</span></h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">Pay once. Own it forever. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={"reveal rd" + (i + 1)}>
              <SpotlightCard className={"rounded-2xl p-7 h-full flex flex-col card-animate " + (p.popular ? "pricing-featured gradient-border" : "glass " + p.glow)}>
                {p.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="text-[10px] font-bold gradient-label bg-accent-600/15 border border-accent-600/20 px-4 py-1.5 rounded-full tracking-wider uppercase animate-rainbow-border">⭐ Most Popular</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-white text-xl mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-black text-3xl text-white">{p.price}</span>
                </div>
                <span className="text-[11px] text-purple-400/70 font-mono mb-3 block">{p.usd}</span>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 text-[12px] mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-[12px] text-white/50 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
                <MagneticButton href="#contact" className={p.popular ? "btn-main w-full text-[13px] py-3 rounded-xl" : "btn-outline w-full text-[13px] py-3 rounded-xl"}>
                  {p.popular ? <span className="relative z-10">{p.cta} →</span> : <>{p.cta} →</>}
                </MagneticButton>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
