import { useState } from "react";
export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="glass rounded-xl overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left cursor-none group">
            <span className={"text-[13px] font-medium transition-colors " + (open === i ? "text-white" : "text-white/50")}>{item.title}</span>
            <span className={"text-white/20 transition-transform duration-300 " + (open === i ? "rotate-180" : "")}>▾</span>
          </button>
          <div className={"transition-all duration-500 " + (open === i ? "max-h-40 px-4 pb-4" : "max-h-0 overflow-hidden")}>
            <p className="text-[12px] text-white/30 leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
