import useCounter from "../hooks/useCounter";
export default function MetricsCard({ icon, value, suffix, label, desc }) {
  const { ref, count } = useCounter(value, 2000);
  return (
    <div ref={ref} className="glass glass-glow rounded-xl p-6 text-center group hover:border-accent-500/10 transition-all duration-500">
      <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform duration-500">{icon}</span>
      <span className="text-3xl font-display font-black accent-text">{count}{suffix}</span>
      <p className="text-[12px] text-white/40 font-medium mt-2">{label}</p>
      <p className="text-[10px] text-white/15 mt-1">{desc}</p>
    </div>
  );
}
