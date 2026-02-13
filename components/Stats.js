import AnimatedNumber from "./AnimatedNumber";
import GradientLabel from "./GradientLabel";

const stats = [
  { value: 47, suffix: "+", label: "Projects Delivered", icon: "🚀", color: "text-blue-400" },
  { value: 72, suffix: "hr", label: "Average Delivery", icon: "⚡", color: "text-amber-400" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "💎", color: "text-purple-400" },
  { value: 8, suffix: "+", label: "Countries Served", icon: "🌍", color: "text-emerald-400" },
];

export default function Stats() {
  return (
    <div className="py-16 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <span className="text-2xl mb-3 block group-hover:scale-125 transition-transform duration-500 animate-icon-bounce" style={{ animationDelay: i * 0.4 + "s" }}>{s.icon}</span>
              <span className="text-3xl md:text-4xl font-display font-black text-white block mb-1">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </span>
              <span className={"text-[11px] font-medium uppercase tracking-wider " + s.color + "/50"}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
