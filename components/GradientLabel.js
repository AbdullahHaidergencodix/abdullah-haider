export default function GradientLabel({ children }) {
  return (
    <span className="inline-block text-[11px] font-mono tracking-[0.3em] uppercase mb-4 gradient-label">
      {children}
    </span>
  );
}
