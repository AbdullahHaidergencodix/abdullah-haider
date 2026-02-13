import { useState } from "react";

const faqs = [
  { q: "How fast can you actually deliver?", a: "Landing pages in 48-72 hours. Full websites in 5-7 days. I have never missed a deadline. If I am late, you get 50% off." },
  { q: "What do you need from me to get started?", a: "Your logo, brand colors if you have them, any content like text and images, and a rough idea of what you want. If you do not have these, I can help with that too." },
  { q: "Do you use templates?", a: "Never. Every website is designed from scratch. Custom code, custom design, built specifically for your business." },
  { q: "What if I do not like the design?", a: "Each package includes revision rounds. We work together until you love it. And if you are truly not happy, full refund. No questions." },
  { q: "Will my website work on mobile?", a: "Absolutely. I design mobile-first. Every site is tested on real devices — iPhone, Android, tablet, desktop." },
  { q: "Do you handle hosting and domain?", a: "Yes. I deploy on Vercel or your preferred platform, connect your domain, set up SSL, and make sure everything runs smoothly." },
  { q: "What about SEO?", a: "Basic SEO is included — clean HTML, fast load times, meta tags, structured data. For advanced SEO strategy, we can discuss a custom package." },
  { q: "Can I update the site myself?", a: "If you need a CMS, I can integrate one. Otherwise, I offer monthly management plans where I handle all updates for you." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-[11px] font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">FAQ</span>
          <h2 className="text-section-title font-display text-white mb-5">Common Questions</h2>
          <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">Everything you need to know before we start working together.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={"reveal rd" + Math.min(i + 1, 6)}>
              <div className={"glass rounded-xl overflow-hidden transition-all duration-500 " + (open === i ? "border-accent-500/15 bg-white/[0.03]" : "")}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left group">
                  <span className={"text-[14px] font-medium transition-all duration-500 " + (open === i ? "text-white" : "text-white/60 group-hover:text-white/80")}>{f.q}</span>
                  <span className={"text-accent-400/60 text-xl transition-transform duration-500 flex-shrink-0 ml-4 " + (open === i ? "rotate-45" : "")}>+</span>
                </button>
                <div className={"overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " + (open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0")}>
                  <p className="px-5 pb-5 text-[13px] text-white/45 leading-[1.85]">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
