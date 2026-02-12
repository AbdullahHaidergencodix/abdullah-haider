import useScrollVelocity from "../hooks/useScrollVelocity";
export default function ScrollSpeedIndicator() {
  const velocity = useScrollVelocity();
  const intensity = Math.min(velocity * 200, 100);
  if (intensity < 5) return null;
  return (
    <div className="fixed top-1/2 left-3 -translate-y-1/2 z-40 w-1 h-24 rounded-full bg-white/[0.03] overflow-hidden">
      <div
        className="w-full bg-accent-500/40 rounded-full transition-all duration-150 ease-out"
        style={{ height: intensity + "%", marginTop: (100 - intensity) + "%" }}
      />
    </div>
  );
}
