export default function NumberedSection({ number, title, children, className = "" }) {
  return (
    <div className={"flex gap-6 " + className}>
      <div className="flex-shrink-0">
        <span className="text-5xl font-display font-black text-white/[0.03]">{String(number).padStart(2, "0")}</span>
      </div>
      <div>
        <h3 className="font-display font-bold text-white text-lg mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}
