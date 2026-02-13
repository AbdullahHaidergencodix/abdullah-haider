import { useState, useEffect } from "react";
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => {
      const contact = document.getElementById("contact");
      if (!contact) { setShow(window.scrollY > 1200); return; }
      const rect = contact.getBoundingClientRect();
      setShow(window.scrollY > 1200 && rect.top > window.innerHeight);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <div
      className="fixed left-0 right-0 z-40 px-4 md:hidden"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))" }}
    >
      <a href="#contact" className="btn-main w-full text-[14px] py-3.5 rounded-xl justify-center shadow-lg shadow-accent-600/20">
        Work With Me &rarr;
      </a>
    </div>
  );
}
