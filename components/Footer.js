import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">A</span>
              </div>
              <span className="font-display font-bold text-white text-[14px]">Abdullah Haider</span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed mb-4">Co-Founder & CEO of Gencodix. I build websites that make businesses look great and sell more. 72 hours. Every time.</p>
            <SocialLinks />
          </div>
          <div>
            <h4 className="text-[11px] font-mono text-white/40 tracking-widest uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["About","Services","Work","Pricing","Testimonials","FAQ","Contact"].map((l) => (
                <a key={l} href={"#" + l.toLowerCase()} className="text-[13px] text-white/30 hover:text-white/60 transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-mono text-white/40 tracking-widest uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:Aboodiprofessional@gmail.com" className="text-[13px] text-white/30 hover:text-accent-400 transition-colors">Aboodiprofessional@gmail.com</a>
              <a href="https://wa.me/923054573962" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/30 hover:text-accent-400 transition-colors">+92 305 457 3962</a>
              <a href="https://www.gencodix.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-accent-400/50 hover:text-accent-400 transition-colors">gencodix.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/15">&copy; {new Date().getFullYear()} Abdullah Haider. All rights reserved.</p>
          <p className="text-[10px] text-white/10">Press ? for shortcuts</p>
        </div>
      </div>
    </footer>
  );
}
