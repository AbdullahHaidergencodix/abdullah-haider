const badges = [
  { icon: "\u{1F512}", text: "SSL Secured" },
  { icon: "\u26A1", text: "99.9% Uptime" },
  { icon: "\u{1F6E1}", text: "Money-Back Guarantee" },
  { icon: "\u{1F30D}", text: "Global CDN" },
  { icon: "\u{1F4F1}", text: "Mobile First" },
  { icon: "\u{1F50D}", text: "SEO Optimized" },
];
export default function TrustBadges() {
  return (
    <div className="reveal flex flex-wrap justify-center gap-3 py-8 max-w-3xl mx-auto px-5">
      {badges.map((b) => (
        <div key={b.text} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-[11px] text-white/35 font-medium hover:border-white/[0.1] hover:text-white/55 transition-all duration-300">
          <span>{b.icon}</span><span>{b.text}</span>
        </div>
      ))}
    </div>
  );
}
