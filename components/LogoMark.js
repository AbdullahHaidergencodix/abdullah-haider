export default function LogoMark({ size = 40 }) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-lg bg-accent-600 animate-pulse opacity-20" />
      <div className="absolute inset-0 rounded-lg bg-accent-600" />
      <span className="relative text-white font-bold" style={{ fontSize: size * 0.45 }}>A</span>
    </div>
  );
}
