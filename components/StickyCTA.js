import { useState, useEffect } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
export default function StickyCTA() {
  const dir = useScrollDirection();
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const handler = () => setPastHero(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const show = pastHero && dir === "up";
  return (
    <div className={"fixed bottom-0 left-0 right-0 z-[999] transition-all duration-500 md:hidden " + (show ? "translate-y-0" : "translate-y-full")}>
      <div className="bg-bg-primary/95 backdrop-blur-xl border-t border-white/[0.04] px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[12px] text-white/70 font-medium">Ready to start?</p>
          <p className="text-[10px] text-white/30">72-hour delivery guaranteed</p>
        </div>
        <a href="#contact" className="btn-main text-[11px] py-2 px-5 rounded-lg">Let&rsquo;s Talk</a>
      </div>
    </div>
  );
}
