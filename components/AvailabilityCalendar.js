export default function AvailabilityCalendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const availability = [true, true, true, true, true, false, false];
  return (
    <div className="reveal glass rounded-xl p-5 max-w-xs">
      <p className="text-[11px] font-mono text-accent-400/50 tracking-wider uppercase mb-3">Weekly Availability</p>
      <div className="flex gap-1.5">
        {days.map((d, i) => (
          <div key={d} className="flex-1 text-center">
            <span className="text-[9px] text-white/20 block mb-1.5">{d}</span>
            <div className={"w-full h-6 rounded " + (availability[i] ? "bg-emerald-500/15 border border-emerald-500/20" : "bg-white/[0.02] border border-white/[0.04]")} />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-white/20 mt-3">🟢 Available &nbsp; ⚫ Unavailable</p>
    </div>
  );
}
