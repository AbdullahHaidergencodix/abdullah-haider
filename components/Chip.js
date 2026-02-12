export default function Chip({ children, active = false, onClick }) {
  return (
    <button onClick={onClick} className={"px-4 py-2 rounded-full text-[11px] font-medium transition-all duration-300 cursor-none " + (active ? "bg-accent-600/20 border border-accent-500/20 text-accent-400" : "glass text-white/40 hover:text-white/60")}>
      {children}
    </button>
  );
}
