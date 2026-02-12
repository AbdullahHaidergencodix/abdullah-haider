export default function BorderBeam({ children, className = "" }) {
  return (
    <div className={"relative overflow-hidden rounded-2xl " + className}>
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-[spin_4s_linear_infinite]"
          style={{ top: "-10px", left: "50%", transformOrigin: "center 150px" }} />
      </div>
      <div className="relative bg-bg-card rounded-2xl border border-white/[0.04] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
