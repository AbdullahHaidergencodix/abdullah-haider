import { fireConfetti } from "./ConfettiButton";
import CopyEmail from "./CopyEmail";
import VisitorCounter from "./VisitorCounter";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="orb orb-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
        <div className="reveal">
          <span className="text-[11px] font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">Get in Touch</span>
          <h2 className="text-section-title font-display text-white mb-6">Let&rsquo;s Build Something<br /><span className="accent-text">You Are Proud Of.</span></h2>
          <div className="flex items-center justify-center gap-1.5 mb-6">
            <span className="text-[12px] text-white/40">Abdullah is online</span>
            <div className="flex gap-1 ml-1"><span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" /></div>
          </div>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Whether you need a landing page, a full website, or a redesign, I am ready to get started. Send me a message and I will get back to you within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://wa.me/923054573962" target="_blank" rel="noopener noreferrer" onClick={() => { try { fireConfetti(); } catch(e) {} }} className="btn-main text-[14px] py-4 px-10 rounded-lg">Message Me on WhatsApp &rarr;</a>
            <CopyEmail email="Aboodiprofessional@gmail.com" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="mailto:Aboodiprofessional@gmail.com" className="text-[13px] text-white/40 hover:text-accent-400 transition-colors animated-underline">Aboodiprofessional@gmail.com</a>
            <span className="text-white/15 hidden sm:inline">|</span>
            <a href="https://wa.me/923054573962" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-accent-400 transition-colors animated-underline">+92 305 457 3962</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2"><span className="ticker-dot" /><span className="text-[12px] text-white/40">Available for new projects</span></div>
            <span className="text-white/15">|</span>
            <span className="text-[12px] text-white/40">Average response: 2 hours</span>
          </div>
          <div className="flex justify-center"><VisitorCounter /></div>
        </div>
      </div>
    </section>
  );
}
