import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03] py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-accent-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white/60 text-sm">Abdullah Haider</span>
              <span className="text-[8px] font-mono text-white/20 tracking-wider uppercase mt-0.5">Co-Founder & CEO, Gencodix</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["About", "Services", "Work", "Pricing", "Testimonials", "FAQ", "Contact"].map((l) => (
              <a key={l} href={"#" + l.toLowerCase()} className="text-[12px] text-white/25 hover:text-white/50 transition-colors animated-underline">{l}</a>
            ))}
            <a href="https://www.gencodix.com" target="_blank" rel="noopener noreferrer" className="text-[12px] text-accent-400/50 hover:text-accent-400 transition-colors">gencodix.com</a>
          </div>

          <SocialLinks />

          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] text-white/[0.08]">&copy; {new Date().getFullYear()} Abdullah Haider. All rights reserved.</p>
            <p className="text-[9px] text-white/[0.05]">Press ? for keyboard shortcuts &bull; ⌘K for command palette</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
