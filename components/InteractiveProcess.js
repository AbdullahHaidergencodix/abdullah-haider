import { useState } from "react";
import SpotlightCard from "./SpotlightCard";

const steps = [
  { num: "01", title: "Tell Me What You Need", desc: "Send me a message describing your business and what you need. A landing page, a full website, a redesign. Takes 2 minutes.", icon: "💬", detail: "I will ask you a few clarifying questions about your target audience, your competitors, and what success looks like for you. No jargon, no fluff." },
  { num: "02", title: "I Get to Work Immediately", desc: "No long discovery phases. No unnecessary meetings. I design and build your website from scratch with custom code.", icon: "⚡", detail: "I start with a wireframe, then move to high-fidelity design, then code it up. All in parallel. That is how I hit 72 hours consistently." },
  { num: "03", title: "You Review, I Refine", desc: "Within 72 hours you get a full preview. Tell me what to tweak and I make it happen fast.", icon: "🔍", detail: "I will send you a live preview link. You can test it on your phone, tablet, and desktop. Leave comments directly and I will action them within hours." },
  { num: "04", title: "Launch Day", desc: "I deploy your site, connect your domain, set up analytics, and make sure everything runs perfectly.", icon: "🚀", detail: "I handle DNS, SSL, hosting setup, Google Analytics, Search Console, and a final performance audit. You go live with zero stress." },
];

export default function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-36 bg-bg-secondary relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">How It Works</span>
          <h2 className="text-section-title font-display text-white mb-4">From First Message to Live in 72 Hours</h2>
          <p className="text-white/30 text-base max-w-lg mx-auto">Click each step to learn more.</p>
        </div>

        {/* Step selector */}
        <div className="flex justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={"flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-500 cursor-none " + (i === activeStep ? "bg-accent-600/15 border border-accent-500/20 text-white" : "glass text-white/40 hover:text-white/60")}
            >
              <span className="text-sm">{s.icon}</span>
              <span className="text-[12px] font-medium hidden sm:inline">{s.title}</span>
              <span className="text-[12px] font-medium sm:hidden">{s.num}</span>
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <div className="reveal max-w-2xl mx-auto">
          <SpotlightCard className="glass rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">{steps[activeStep].icon}</span>
              <div>
                <span className="text-[11px] font-mono text-accent-400/40 tracking-wider block mb-1">Step {steps[activeStep].num}</span>
                <h3 className="font-display font-bold text-white text-xl">{steps[activeStep].title}</h3>
              </div>
            </div>
            <p className="text-[14px] text-white/40 leading-[1.8] mb-4">{steps[activeStep].desc}</p>
            <p className="text-[13px] text-white/25 leading-[1.8] pl-4 border-l-2 border-accent-500/20">{steps[activeStep].detail}</p>

            {/* Progress bar */}
            <div className="mt-8 flex gap-1.5">
              {steps.map((_, i) => (
                <div key={i} className={"h-1 rounded-full flex-1 transition-all duration-500 " + (i <= activeStep ? "bg-accent-500" : "bg-white/[0.04]")} />
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
