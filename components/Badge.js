export default function Badge({ children, variant = "default", pulse = false }) {
  const variants = {
    default: "bg-white/[0.03] border-white/[0.06] text-white/40",
    accent: "bg-accent-600/10 border-accent-600/15 text-accent-400",
    success: "bg-emerald-500/10 border-emerald-500/15 text-emerald-400",
    warning: "bg-amber-500/10 border-amber-500/15 text-amber-400",
  };
  return (
    <span className={"inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-medium " + variants[variant]}>
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
      {children}
    </span>
  );
}
