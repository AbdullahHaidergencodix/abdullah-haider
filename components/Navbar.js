import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { l: "About", h: "about" },
  { l: "Services", h: "services" },
  { l: "Work", h: "work" },
  { l: "Pricing", h: "pricing" },
  { l: "Testimonials", h: "testimonials" },
  { l: "Contact", h: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.h));

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Feature 28: Smooth scroll with custom easing */
  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <nav className={"fixed top-0 w-full z-[1000] transition-all duration-500 " + (scrolled ? "bg-bg-primary/90 backdrop-blur-2xl border-b border-white/[0.03] py-3" : "bg-transparent py-5")}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#" className="relative z-[1001] flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-accent-600 flex items-center justify-center">
              <span className="text-white font-bold text-base">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-[15px] tracking-tight">Abdullah Haider</span>
              <span className="text-[9px] font-mono text-white/25 tracking-widest uppercase mt-0.5">Co-Founder & CEO, Gencodix</span>
            </div>
          </a>

          {/* Feature 27: Active section highlighting */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.l}
                href={"#" + l.h}
                onClick={(e) => smoothScroll(e, l.h)}
                className={"text-[13px] font-medium transition-colors duration-300 animated-underline " + (active === l.h ? "text-accent-400" : "text-white/40 hover:text-white/70")}
              >
                {l.l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" onClick={(e) => smoothScroll(e, "contact")} className="hidden md:inline-flex btn-main text-[13px] py-2.5 px-5 rounded-lg">Let&rsquo;s Talk</a>
            <button onClick={() => setOpen(!open)} className="md:hidden relative z-[1001] w-8 h-8 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
              <span className={"block w-5 h-[1.5px] bg-white transition-all duration-300 " + (open ? "rotate-45 translate-y-[4px]" : "")} />
              <span className={"block w-5 h-[1.5px] bg-white transition-all duration-300 " + (open ? "-rotate-45 -translate-y-[4px]" : "")} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[999] bg-bg-primary/98 backdrop-blur-3xl flex items-center justify-center">
            <nav className="flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.a key={l.l} href={"#" + l.h} onClick={(e) => smoothScroll(e, l.h)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className={"font-display text-3xl font-bold transition-colors " + (active === l.h ? "text-accent-400" : "text-white/80 hover:text-accent-400")}>{l.l}</motion.a>
              ))}
              <motion.a href="#contact" onClick={(e) => smoothScroll(e, "contact")} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="btn-main mt-4 text-sm py-3 px-8 rounded-lg">Let&rsquo;s Talk</motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
