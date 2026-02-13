import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { l: "About", h: "about" },
  { l: "Services", h: "services" },
  { l: "Work", h: "work" },
  { l: "Pricing", h: "pricing" },
  { l: "Reviews", h: "testimonials" },
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

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={"fixed top-0 w-full z-[1000] transition-all duration-500 " + (scrolled ? "bg-bg-primary/85 backdrop-blur-2xl border-b border-white/[0.05] py-2.5 md:py-3" : "bg-transparent py-4 md:py-5")}
        style={{ paddingTop: scrolled ? undefined : "max(1rem, env(safe-area-inset-top, 0px))" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#" className="relative z-[1001] flex items-center gap-2 md:gap-2.5 group">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-600/20 transition-shadow">
              <span className="text-white font-bold text-sm md:text-base font-display">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-[13px] md:text-[15px] tracking-tight">Abdullah Haider</span>
              <span className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-widest uppercase mt-0.5">Gencodix</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.l} href={"#" + l.h} onClick={(e) => go(e, l.h)}
                className={"px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 " + (active === l.h ? "text-accent-400 bg-accent-500/[0.08]" : "text-white/45 hover:text-white/70 hover:bg-white/[0.03]")}>
                {l.l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" onClick={(e) => go(e, "contact")} className="hidden md:inline-flex btn-main text-[12px] py-2 px-5 rounded-lg font-semibold">Let&rsquo;s Talk</a>
            <button onClick={() => setOpen(!open)} className="md:hidden relative z-[1001] w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/[0.05] active:bg-white/[0.08] transition-colors" aria-label="Menu">
              <span className={"block w-5 h-[1.5px] bg-white/70 transition-all duration-300 " + (open ? "rotate-45 translate-y-[4px]" : "")} />
              <span className={"block w-5 h-[1.5px] bg-white/70 transition-all duration-300 " + (open ? "-rotate-45 -translate-y-[4px]" : "")} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] bg-bg-primary/98 backdrop-blur-3xl flex items-center justify-center" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
            <nav className="flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.a key={l.l} href={"#" + l.h} onClick={(e) => go(e, l.h)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  className={"font-display text-2xl font-bold transition-colors active:scale-95 " + (active === l.h ? "text-accent-400" : "text-white/80")}>
                  {l.l}
                </motion.a>
              ))}
              <motion.a href="#contact" onClick={(e) => go(e, "contact")} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="btn-main mt-4 text-sm py-3.5 px-10 rounded-xl w-64 justify-center">
                Let&rsquo;s Talk &rarr;
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
