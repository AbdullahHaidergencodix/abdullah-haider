const steps = [
  { num: "01", title: "Tell Me What You Need", desc: "Send me a message describing your business and what you need. A landing page, a full website, a redesign. Takes 2 minutes.", icon: "&#128172;" },
  { num: "02", title: "I Get to Work Immediately", desc: "No long discovery phases. No unnecessary meetings. I design and build your website from scratch with custom code. No templates ever.", icon: "&#9889;" },
  { num: "03", title: "You Review, I Refine", desc: "Within 72 hours you get a full preview. Tell me what to tweak and I make it happen fast. Your vision, my execution.", icon: "&#128269;" },
  { num: "04", title: "Launch Day", desc: "I deploy your site, connect your domain, set up analytics, and make sure everything runs perfectly. You are live and ready to grow.", icon: "&#128640;" },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-bg-secondary relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">How It Works</span>
          <h2 className="text-section-title font-display text-white mb-4">From First Message to Live in 72 Hours</h2>
          <p className="text-white/30 text-base max-w-lg mx-auto">The simplest process you will ever experience working with a web designer. Four steps.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.num} className={"reveal rd" + (i + 1) + " glass rounded-xl p-7 group hover:border-accent-600/15 relative overflow-hidden"}>
              <div className="absolute -top-2 -right-2 text-4xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700" dangerouslySetInnerHTML={{ __html: s.icon }} />
              <span className="text-[11px] font-mono text-accent-400/30 tracking-wider block mb-5">{s.num}</span>
              <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-accent-200 transition-colors duration-500">{s.title}</h3>
              <p className="text-[13px] text-white/30 leading-[1.7] group-hover:text-white/45 transition-colors duration-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
