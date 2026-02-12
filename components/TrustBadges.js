const badges = [
  { icon: "🔒", text: "SSL Secured" },
  { icon: "⚡", text: "99.9% Uptime" },
  { icon: "🛡️", text: "Money-Back Guarantee" },
  { icon: "🌍", text: "Global CDN" },
  { icon: "📱", text: "Mobile First" },
  { icon: "🔍", text: "SEO Optimized" },
];
export default function TrustBadges() {
  return (
    <div className="reveal flex flex-wrap justify-center gap-3 py-8 max-w-3xl mx-auto px-5">
      {badges.map((b) => (
        <div key={b.text} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.03] bg-white/[0.01] text-[10px] text-white/25 font-medium hover:border-white/[0.06] hover:text-white/40 transition-all duration-300">
          <span>{b.icon}</span>
          <span>{b.text}</span>
        </div>
      ))}
    </div>
  );
}
