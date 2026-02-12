import { useEffect, useState } from "react";
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[1001] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600 transition-[width] duration-100 ease-out"
        style={{ width: progress + "%" }}
      />
    </div>
  );
}
