import { useState } from "react";

const faqs = [
  { q: "Do you really deliver in 72 hours?", a: "Yes. Most projects are done in 48 hours. I work fast because I focus on one project at a time and I have been doing this long enough to know exactly what works." },
  { q: "What if I do not like the design?", a: "Every plan includes revision rounds. But I have never had a client reject the first draft. Plus there is a full money-back guarantee, so you have zero risk." },
  { q: "Do you use templates?", a: "Never. Every website is custom designed and custom coded from scratch. That is the entire point of hiring me instead of using a website builder yourself." },
  { q: "Will it work on mobile?", a: "Every website I build is fully responsive. It will look perfect on phones, tablets, laptops, and desktops. I test on real devices." },
  { q: "What about after launch?", a: "You own everything. I hand over all the code. If you want me to manage your site monthly, I offer a management plan for PKR 5,000 per month." },
  { q: "Who actually does the work?", a: "Me. Abdullah Haider. Personally. You are not getting outsourced to some random freelancer. I handle design, development, and deployment myself." },
  { q: "Can you work with my existing brand?", a: "Absolutely. Send me your logo, brand colors, and any guidelines you have. I will design everything to match your existing identity perfectly." },
  { q: "How do I get started?", a: "Scroll down to the contact section and send me a message. Or pick a plan in the pricing section. I will reply within a few hours." },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.04] group">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-none">
        <div className="flex items-center gap-3">
          {/* Feature 35: Animated icon */}
          <span className={"flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[11px] transition-all duration-300 " + (open ? "bg-accent-600/20 text-accent-400 rotate-0" : "bg-white/[0.03] text-white/20 group-hover:bg-white/[0.05]")}>
            {open ? "−" : "+"}
          </span>
          <span className={"text-[15px] font-medium transition-colors duration-300 " + (open ? "text-white" : "text-white/50 group-hover:text-white/70")}>{q}</span>
        </div>
      </button>
      <div className={"overflow-hidden transition-all duration-500 " + (open ? "max-h-60 pb-5" : "max-h-0")}>
        <p className="text-[13px] text-white/30 leading-[1.8] pl-9 pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-14">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">FAQ</span>
          <h2 className="text-section-title font-display text-white mb-4">Common Questions</h2>
        </div>
        <div className="reveal">
          {faqs.map((f, i) => <Item key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}
