import { useState } from "react";
import SpotlightCard from "./SpotlightCard";

const plans = [
  {
    name: "Starter",
    desc: "One killer landing page that gets you online and looking professional.",
    price: { pkr: "10,000", usd: "35", aed: "129" },
    yearly: { pkr: "8,000", usd: "28", aed: "103" },
    period: "one-time",
    features: ["Single landing page","Fully mobile responsive","72-hour delivery guaranteed","1 round of revisions","Basic SEO setup","Contact form integration","Speed optimized","1 month free support","Free deployment help"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business",
    desc: "A complete website that makes your business look like the real deal.",
    price: { pkr: "20,000", usd: "70", aed: "259" },
    yearly: { pkr: "16,000", usd: "56", aed: "207" },
    period: "one-time",
    features: ["Up to 5 custom pages","Premium custom design","72-hour delivery guaranteed","3 rounds of revisions","Advanced SEO optimization","Animations & micro-interactions","CMS integration","Analytics dashboard setup","Social media integration","2 months free support","Free domain setup help","WhatsApp integration"],
    cta: "Most Popular",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "Premium",
    desc: "A top-tier custom website that dominates your market and crushes competitors.",
    price: { pkr: "30,000", usd: "105", aed: "389" },
    yearly: { pkr: "24,000", usd: "84", aed: "311" },
    period: "one-time",
    features: ["Unlimited pages","Fully custom design & code","72-hour delivery guaranteed","Unlimited revisions","Priority support forever","Advanced animations & effects","Custom copywriting included","Full SEO suite","E-commerce ready","Performance monitoring","A/B testing setup","3 months free management","Free hosting setup","Custom email setup"],
    cta: "Go Premium",
    featured: false,
  },
];

const addon = {
  name: "Website Management",
  price: { pkr: "5,000", usd: "18", aed: "65" },
  period: "/month per site",
  features: ["Monthly content updates","Security monitoring","Performance optimization","Uptime monitoring 24/7","Monthly analytics report","Priority bug fixes","Backup management"],
};

function Check() {
  return <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>;
}

export default function Pricing() {
  /* Feature 21: Pricing toggle */
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-36 relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="reveal text-center mb-6">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">Pricing</span>
          <h2 className="text-section-title font-display text-white mb-4">Transparent Pricing. Real Value.</h2>
          <p className="text-white/30 text-base max-w-lg mx-auto mb-8">No hidden fees, no surprises. Pick a plan, tell me what you need, and I will deliver it in 72 hours.</p>

          {/* Feature 21: Toggle */}
          <div className="inline-flex items-center gap-4 px-1 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <button onClick={() => setYearly(false)} className={"px-5 py-2 rounded-full text-[12px] font-medium transition-all duration-300 cursor-none " + (!yearly ? "bg-accent-600 text-white" : "text-white/40 hover:text-white/60")}>
              Standard
            </button>
            <button onClick={() => setYearly(true)} className={"px-5 py-2 rounded-full text-[12px] font-medium transition-all duration-300 cursor-none flex items-center gap-2 " + (yearly ? "bg-accent-600 text-white" : "text-white/40 hover:text-white/60")}>
              Bundle Deal <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="reveal rd1 flex justify-center mb-14">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.04]">
            <span className="text-lg">&#128737;</span>
            <span className="text-[12px] text-emerald-400/80 font-medium">100% Money-Back Guarantee &mdash; Not happy? Full refund. No questions.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          {plans.map((plan, i) => {
            const p = yearly ? plan.yearly : plan.price;
            return (
              <SpotlightCard key={plan.name} className={"reveal rd" + (i + 1) + " rounded-2xl p-7 md:p-8 relative " + (plan.featured ? "pricing-featured gradient-border" : "glass")}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-600 text-[10px] font-bold text-white tracking-wider uppercase z-20">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-white text-xl mb-2">{plan.name}</h3>
                  <p className="text-white/25 text-[13px] leading-relaxed">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-display font-black text-white transition-all duration-500">PKR {p.pkr}</span>
                    <span className="text-white/20 text-xs">{plan.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-white/20">
                    <span>&#36;{p.usd} USD</span>
                    <span className="text-white/10">|</span>
                    <span>AED {p.aed}</span>
                  </div>
                  {yearly && <span className="text-[10px] text-emerald-400/60 mt-1 inline-block">20% bundle discount applied</span>}
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check />
                      <span className="text-[13px] text-white/50">{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={"block w-full text-center py-3 rounded-lg font-semibold text-[13px] transition-all duration-300 cursor-none " + (plan.featured ? "bg-gradient-to-r from-accent-700 to-accent-500 text-white hover:shadow-lg hover:shadow-accent-600/20 hover:-translate-y-0.5" : "border border-white/[0.08] text-white/50 hover:border-accent-500/30 hover:text-white hover:-translate-y-0.5")}>
                  {plan.cta}
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        <div className="reveal glass rounded-2xl p-7 md:p-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-600/10 border border-accent-600/15 mb-3">
                <span className="text-[10px] font-bold text-accent-400 tracking-wider uppercase">Add-On</span>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-1">{addon.name}</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-display font-black text-white">PKR {addon.price.pkr}</span>
                <span className="text-white/20 text-xs">{addon.period}</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-white/20 mt-1">
                <span>&#36;{addon.price.usd} USD</span>
                <span className="text-white/10">|</span>
                <span>AED {addon.price.aed}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addon.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <Check />
                  <span className="text-[12px] text-white/40">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
