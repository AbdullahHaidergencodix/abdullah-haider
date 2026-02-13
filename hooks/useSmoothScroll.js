import { useEffect } from "react";
export default function useSmoothScroll() {
  useEffect(() => {
    // Disable smooth scrolling library on mobile — native is better
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis;
    const init = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
        const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      } catch (e) {}
    };
    init();
    return () => { if (lenis) lenis.destroy(); };
  }, []);
}
