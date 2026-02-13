import { useState, useEffect } from "react";
export default function PageProgress() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    if (window.innerWidth < 1280) return;
    const ids = ["about","services","work","pricing","testimonials","process","faq","contact"];
    const handler = () => {
      setSections(ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, active: false };
        const rect = el.getBoundingClientRect();
        return { id, active: rect.top < window.innerHeight * 0.5 && rect.bottom > 0 };
      }));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  if (sections.length === 0) return null;
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
      {sections.map((s) => (
        <a key={s.id} href={"#" + s.id} className={"w-2 h-2 rounded-full transition-all duration-300 " + (s.active ? "bg-accent-500 scale-125" : "bg-white/10 hover:bg-white/20")} title={s.id.charAt(0).toUpperCase() + s.id.slice(1)} />
      ))}
    </div>
  );
}
