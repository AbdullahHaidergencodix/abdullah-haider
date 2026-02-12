export default function AnimatedIcon({ icon, size = 40, className = "" }) {
  return (
    <div className={"flex items-center justify-center rounded-xl bg-accent-600/10 border border-accent-500/10 group-hover:bg-accent-600/15 group-hover:scale-110 transition-all duration-500 " + className} style={{ width: size, height: size }}>
      <span className="text-lg">{icon}</span>
    </div>
  );
}
