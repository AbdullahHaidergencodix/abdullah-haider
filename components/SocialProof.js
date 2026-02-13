import { useState, useEffect } from "react";
const proofs = [
  { name: "Sarah M.", action: "just booked a project", time: "2 min ago", flag: "\u{1F1FA}\u{1F1F8}" },
  { name: "Omar A.", action: "got their website delivered", time: "15 min ago", flag: "\u{1F1E6}\u{1F1EA}" },
  { name: "Jessica W.", action: "left a 5-star review", time: "1 hr ago", flag: "\u{1F1E8}\u{1F1E6}" },
  { name: "Daniel K.", action: "just booked a project", time: "2 hrs ago", flag: "\u{1F1E9}\u{1F1EA}" },
  { name: "Amira H.", action: "got their landing page", time: "3 hrs ago", flag: "\u{1F1F8}\u{1F1E6}" },
];
export default function SocialProof() {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let i = 0;
    const show = () => { setCurrent(proofs[i % proofs.length]); setVisible(true); setTimeout(() => setVisible(false), 4000); i++; };
    const initial = setTimeout(show, 8000);
    const interval = setInterval(show, 18000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);
  if (!current) return null;
  return (
    <div
      className={"fixed left-4 md:left-6 z-50 transition-all duration-500 " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}
      style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))" }}
    >
      <div className="glass rounded-xl px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-3 max-w-[280px] md:max-w-xs border border-white/[0.06]">
        <span className="text-lg md:text-xl">{current.flag}</span>
        <div>
          <p className="text-[11px] md:text-[12px] text-white/70 font-medium">{current.name} {current.action}</p>
          <p className="text-[9px] md:text-[10px] text-white/25">{current.time}</p>
        </div>
      </div>
    </div>
  );
}
