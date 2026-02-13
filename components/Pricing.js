import SpotlightCard from "./SpotlightCard";

const plans = [
  {
    name: "Landing Page", price: "PKR 10,000", usd: "~$35", desc: "Perfect for businesses that need a single high-converting page fast.",
    features: ["Custom design from scratch", "Mobile responsive", "Contact form / WhatsApp integration", "Basic SEO setup", "Delivery in 48-72 hours", "1 round of revisions"],
    cta: "Get Started", popular: false,
  },
  {
    name: "Full Website", price: "PKR 25,000", usd: "~$90", desc: "For businesses that need a complete online presence that impresses.",
    features: ["5-7 custom pages", "Advanced animations", "SEO optimized", "Performance optimized", "Analytics integration", "Delivery in 5-7 days", "3 rounds of revisions", "1 month free support"],
    cta: "Most Popular", popular: true,
  },
  {
    name: "Monthly Management", price: "PKR 8,000", usd: "~$30/mo", desc: "Keep your website updated, secure, and performing at its best.",
    features: ["Content updates", "Performance monitoring", "Security updates", "Monthly analytics report", "Priority support", "Bug fixes included"],
    cta: "Subscribe", popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-[11px] font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">Pricing</span>
          <h2 className="text-section-title font-display text-white mb-5">Simple Pricing. No Surprises.</h2>
          <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">Pay once. Own it forever. No hidden fees. No monthly charges.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={"reveal rd" + (i + 1)}>
              <SpotlightCard className={"rounded-2xl p-7 h-full flex flex-col card-animate " + (p.popular ? "pricing-featured gradient-border" : "glass")}>
                {p.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="text-[10px] font-bold text-accent-400 bg-accent-600/15 border border-accent-600/20 px-4 py-1.5 rounded-full tracking-wider uppercase animate-border-pulse">Most Popular</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-white text-xl mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-black text-3xl text-white">{p.price}</span>
                </div>
                <span className="text-[11px] text-accent-400/70 font-mono mb-3 block">{p.usd}</span>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span className="text-accent-400 text-[12px] mt-0.5 flex-shrink-0">&#10003;</span>
                      <span className="text-[12px] text-white/50 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={p.popular ? "btn-main w-full text-[13px] py-3 rounded-lg" : "btn-outline w-full text-[13px] py-3 rounded-lg"}>
                  {p.cta} &rarr;
                </a>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
