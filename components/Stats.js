import useCounter from "../hooks/useCounter";

const stats = [
  { value: 47, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { value: 72, suffix: "hr", label: "Average Delivery", icon: "⚡" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "💎" },
  { value: 8, suffix: "+", label: "Countries Served", icon: "🌍" },
];

function StatItem({ s }) {
  const { ref, count } = useCounter(s.value, 2000);
  return (
    <div ref={ref} className="text-center group">
      <span className="text-xl mb-3 block group-hover:scale-110 transition-transform duration-500">{s.icon}</span>
      <span className="text-3xl md:text-4xl font-display font-black text-white block mb-1">
        {count}<span className="text-accent-400">{s.suffix}</span>
      </span>
      <span className="text-[11px] text-white/35 font-medium uppercase tracking-wider">{s.label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => <StatItem key={i} s={s} />)}
        </div>
      </div>
    </div>
  );
}
