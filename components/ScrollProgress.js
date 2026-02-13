import { useState, useEffect } from "react";
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] h-[2px] md:h-[3px] bg-transparent">
      <div className="h-full bg-gradient-to-r from-accent-600 to-accent-400 transition-all duration-150 ease-out" style={{ width: progress + "%" }} />
    </div>
  );
}
