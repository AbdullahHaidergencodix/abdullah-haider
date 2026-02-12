import useCounter from "../hooks/useCounter";
function Stat({ target, suffix, label }) {
  const { ref, count } = useCounter(target, 2000);
  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-display font-black accent-text">{count}{suffix}</span>
      <span className="block text-[11px] text-white/25 font-medium mt-2 tracking-wide">{label}</span>
    </div>
  );
}
export default function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <Stat target={72} suffix="hr" label="Max Delivery Time" />
          <Stat target={40} suffix="+" label="Projects Completed" />
          <Stat target={100} suffix="%" label="Client Satisfaction" />
          <Stat target={3} suffix="+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}
