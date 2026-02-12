import { useRef, useEffect, useState } from "react";
export default function TextReveal({ text, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span
            className={"inline-block transition-all duration-700 " + (visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}
            style={{ transitionDelay: (i * 40) + "ms" }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
