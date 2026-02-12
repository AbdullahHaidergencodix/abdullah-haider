export default function AnimatedDivider() {
  return (
    <div className="relative h-16 max-w-6xl mx-auto flex items-center justify-center overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="relative flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-accent-500/30" style={{ animation: `pulse 2s ease-in-out ${i * 0.3}s infinite` }} />
        ))}
      </div>
    </div>
  );
}
