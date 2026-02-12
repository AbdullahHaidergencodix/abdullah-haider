export default function Marquee() {
  const items = ["Web Design","Landing Pages","UI/UX","Responsive Design","Web Development","SEO","Performance","Branding","Web Design","Landing Pages","UI/UX","Responsive Design","Web Development","SEO","Performance","Branding"];
  return (
    <div className="py-6 border-y border-white/[0.03] overflow-hidden">
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {items.map((w, i) => (
            <span key={i} className="inline-flex items-center mx-6">
              <span className="text-sm text-white/[0.06] font-medium">{w}</span>
              <span className="ml-6 w-1 h-1 rounded-full bg-accent-500/20" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
