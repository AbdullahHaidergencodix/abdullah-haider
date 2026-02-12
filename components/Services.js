import SpotlightCard from "./SpotlightCard";
import useTilt from "../hooks/useTilt";

const services = [
  { icon: "&#128421;", title: "Landing Pages", desc: "High-converting landing pages designed to grab attention and drive action. Perfect for product launches, lead gen, events, and campaigns.", tags: ["Conversion Focused", "72hr Delivery", "A/B Ready"] },
  { icon: "&#127760;", title: "Business Websites", desc: "Full multi-page websites that make your business look legitimate, professional, and trustworthy. Your 24/7 salesperson on the internet.", tags: ["Multi-Page", "Mobile First", "SEO Optimized"] },
  { icon: "&#127912;", title: "UI/UX Design", desc: "Clean, modern interface design that your users will actually enjoy using. I design for humans, not for design awards.", tags: ["Figma", "Prototyping", "User Research"] },
  { icon: "&#9889;", title: "Website Redesign", desc: "Already have a website that looks like it was built in 2015? I will rebuild it from scratch and make it something you are actually proud to share.", tags: ["Modern Stack", "Speed Boost", "Fresh Design"] },
  { icon: "&#128200;", title: "SEO & Performance", desc: "Fast websites rank higher. I build every site for speed and optimize it so Google actually sends you traffic instead of burying you on page 5.", tags: ["Core Web Vitals", "Technical SEO", "Analytics"] },
  { icon: "&#128736;", title: "Website Management", desc: "Don\u2019t want to deal with updates, security, and hosting headaches? I handle everything monthly so you can focus on running your business.", tags: ["Monthly Updates", "Security", "24/7 Monitoring"] },
];

function ServiceCard({ s, i }) {
  const tiltRef = useTilt(5);
  return (
    <div ref={tiltRef} className={"reveal rd" + (i + 1)} style={{ transition: "transform 0.2s ease" }}>
      <SpotlightCard className="glass rounded-xl p-7 group hover:border-accent-600/15 relative overflow-hidden h-full">
        <div className="absolute -top-2 -right-2 text-4xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700" dangerouslySetInnerHTML={{ __html: s.icon }} />
        <div className="text-2xl mb-4" dangerouslySetInnerHTML={{ __html: s.icon }} />
        <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-accent-200 transition-colors duration-500">{s.title}</h3>
        <p className="text-[13px] text-white/30 leading-[1.7] mb-5 group-hover:text-white/45 transition-colors duration-500">{s.desc}</p>
        <div className="flex flex-wrap gap-2">
          {s.tags.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
        </div>
      </SpotlightCard>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-bg-secondary relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">Services</span>
          <h2 className="text-section-title font-display text-white mb-4">What I Can Do for You</h2>
          <p className="text-white/30 text-base max-w-lg mx-auto">No fluff. No unnecessary upsells. Just the things that will actually move the needle for your business online.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
