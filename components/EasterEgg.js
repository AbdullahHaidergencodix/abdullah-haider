import { useEffect, useState } from "react";
import { fireConfetti } from "./ConfettiButton";
const KONAMI = [38,38,40,40,37,39,37,39,66,65];
export default function EasterEgg() {
  const [seq, setSeq] = useState([]);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      setSeq((prev) => {
        const next = [...prev, e.keyCode].slice(-10);
        if (next.length === 10 && next.every((v, i) => v === KONAMI[i])) {
          setTriggered(true);
          fireConfetti();
          setTimeout(() => fireConfetti(), 500);
          setTimeout(() => setTriggered(false), 4000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  if (!triggered) return null;
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none">
      <div className="text-center animate-fade-up">
        <p className="text-5xl mb-4">&#127881;</p>
        <p className="font-display font-bold text-2xl accent-text">You found the secret!</p>
        <p className="text-white/40 text-sm mt-2">You're clearly paying attention. Let's work together.</p>
      </div>
    </div>
  );
}
