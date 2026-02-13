import { useState } from "react";
import GradientLabel from "./GradientLabel";

const faqs = [
  { q: "How fast can you actually deliver?", a: "Landing pages in 48-72 hours. Full websites in 5-7 days. I have never missed a deadline. If I am late, you get 50% off.", icon: "⚡" },
  { q: "What do you need from me?", a: "Your logo, brand colors, any content, and a rough idea of what you want. If you don't have these, I help with that too.", icon: "📋" },
  { q: "Do you use templates?", a: "Never. Every website is designed from scratch. Custom code, custom design, built specifically for your business.", icon: "🎨" },
  { q: "What if I don't like the design?", a: "Each package includes revision rounds. We work together until you love it. Full refund if you're truly not happy.", icon: "💯" },
  { q: "Will it work on mobile?", a: "Absolutely. I design mobile-first. Every site is tested on real iPhones, Androids, tablets, and desktops.", icon: "📱" },
  { q: "Do you handle hosting?", a: "Yes. I deploy on Vercel or your preferred platform, connect your domain, set up SSL — everything.", icon: "🌐" },
  { q: "What about SEO?", a: "Basic SEO is included — clean HTML, fast load times, meta tags, structured data. Advanced SEO is available as addon.", icon: "🔍" },
  { q: "Can I update it myself?", a: "If you need a CMS, I integrate one. Otherwise, my monthly plan handles all updates for you.", icon: "🛠️" },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 md:py-36 relative">
      <div className="orb orb-purple w-[300px] h-[300px] -right-[80px] top-[20%]" />
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <GradientLabel>FAQ</GradientLabel>
          <h2 className="text-section-title font-display text-white mb-5">Common <span className="accent-text">Questions</span></h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">Everything you need to know before we work together.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={"reveal rd" + Math.min(i + 1, 6)}>
              <div className={"glass rounded-xl overflow-hidden transition-all duration-500 " + (open === i ? "border-purple-500/15 glass-purple" : "")}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center gap-3 p-5 text-left group">
                  <span className="text-lg flex-shrink-0">{f.icon}</span>
                  <span className={"text-[14px] font-medium transition-all duration-500 flex-1 " + (open === i ? "text-white" : "text-white/60 group-hover:text-white/80")}>{f.q}</span>
                  <span className={"text-purple-400/60 text-xl transition-transform duration-500 flex-shrink-0 " + (open === i ? "rotate-45" : "")}>+</span>
                </button>
                <div className={"overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " + (open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0")}>
                  <p className="px-5 pb-5 pl-14 text-[13px] text-white/45 leading-[1.85]">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
