const badges = [
  { icon: "🔒", text: "SSL Secured", c: "border-blue-500/10 hover:border-blue-500/20" },
  { icon: "⚡", text: "99.9% Uptime", c: "border-amber-500/10 hover:border-amber-500/20" },
  { icon: "🛡️", text: "Money-Back", c: "border-emerald-500/10 hover:border-emerald-500/20" },
  { icon: "🌍", text: "Global CDN", c: "border-purple-500/10 hover:border-purple-500/20" },
  { icon: "📱", text: "Mobile First", c: "border-pink-500/10 hover:border-pink-500/20" },
  { icon: "🔍", text: "SEO Ready", c: "border-cyan-500/10 hover:border-cyan-500/20" },
];
export default function TrustBadges() {
  return (
    <div className="reveal flex flex-wrap justify-center gap-3 py-8 max-w-3xl mx-auto px-5">
      {badges.map((b) => (
        <div key={b.text} className={"inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border bg-white/[0.01] text-[11px] text-white/40 font-medium transition-all duration-300 hover:text-white/60 " + b.c}>
          <span>{b.icon}</span><span>{b.text}</span>
        </div>
      ))}
    </div>
  );
}
