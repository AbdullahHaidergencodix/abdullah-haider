import { useState } from "react";
const cards = [
  { title: "Design", desc: "Clean, modern, and conversion-focused", color: "from-accent-600/10 to-purple-600/5" },
  { title: "Develop", desc: "Custom code, zero templates, blazing fast", color: "from-emerald-600/10 to-accent-600/5" },
  { title: "Deploy", desc: "Live in 72 hours with full optimization", color: "from-amber-600/10 to-red-600/5" },
];
export default function StackedCards() {
  const [active, setActive] = useState(0);
  return (
    <div className="reveal flex justify-center py-8">
      <div className="relative w-72 h-48">
        {cards.map((c, i) => {
          const offset = i - active;
          const isActive = i === active;
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={"absolute inset-0 glass rounded-xl p-6 cursor-none transition-all duration-700 " + (isActive ? "z-10 opacity-100 scale-100" : "opacity-40 scale-95")}
              style={{ transform: `translateY(${offset * 12}px) scale(${1 - Math.abs(offset) * 0.05})`, zIndex: 10 - Math.abs(offset) }}
            >
              <div className={"absolute inset-0 rounded-xl bg-gradient-to-br opacity-50 " + c.color} />
              <div className="relative">
                <h4 className="font-display font-bold text-white text-lg mb-2">{c.title}</h4>
                <p className="text-[12px] text-white/30">{c.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
