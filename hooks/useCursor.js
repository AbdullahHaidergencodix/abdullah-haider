import { useEffect, useRef } from "react";
export default function useCursor() {
  const ring = useRef(null);
  const dot = useRef(null);
  useEffect(() => {
    const r = ring.current, d = dot.current;
    if (!r || !d) return;
    let mx=0,my=0,cx=0,cy=0;
    const move = (e) => { mx=e.clientX; my=e.clientY; };
    const loop = () => {
      cx += (mx-cx)*0.13; cy += (my-cy)*0.13;
      r.style.left = cx+"px"; r.style.top = cy+"px";
      d.style.left = mx+"px"; d.style.top = my+"px";
      requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    requestAnimationFrame(loop);
    const targets = document.querySelectorAll("a,button,.glass,.btn-main,.btn-outline");
    const enter = () => r.classList.add("hover");
    const leave = () => r.classList.remove("hover");
    targets.forEach((el) => { el.addEventListener("mouseenter",enter); el.addEventListener("mouseleave",leave); });
    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => { el.removeEventListener("mouseenter",enter); el.removeEventListener("mouseleave",leave); });
    };
  }, []);
  return { ring, dot };
}
