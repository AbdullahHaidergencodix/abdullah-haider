export default function TestimonialCard({ name, role, text, rating = 5 }) {
  return (
    <div className="glass rounded-xl p-6 group hover:border-accent-600/15 transition-all duration-500">
      <div className="stars mb-4">
        {Array.from({ length: rating }).map((_, i) => <span key={i} className="star">★</span>)}
      </div>
      <p className="text-[13px] text-white/40 leading-[1.7] mb-5 group-hover:text-white/55 transition-colors">{text}</p>
      <div className="flex items-center gap-3">
        <div className="avatar-ring"><div className="avatar-inner"><span className="text-[11px] font-bold text-accent-400">{name.split(" ").map(n=>n[0]).join("")}</span></div></div>
        <div>
          <p className="text-[12px] font-medium text-white/70">{name}</p>
          <p className="text-[10px] text-white/25">{role}</p>
        </div>
      </div>
    </div>
  );
}
