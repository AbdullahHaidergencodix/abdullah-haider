export default function ShiftingGradient({ children, className = "" }) {
  return (
    <span className={"inline-block bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer " + className}
      style={{ backgroundImage: "linear-gradient(90deg, #3b8eff, #7c3aed, #f43f5e, #3b8eff)" }}>
      {children}
    </span>
  );
}
