export default function ComparisonTable() {
  const rows = [
    { feature: "Delivery Time", me: "72 hours", agency: "4-8 weeks", diy: "Weeks/months" },
    { feature: "Price", me: "PKR 10-30K", agency: "PKR 200K+", diy: "Free-ish" },
    { feature: "Custom Design", me: "✅", agency: "✅", diy: "❌" },
    { feature: "Custom Code", me: "✅", agency: "Maybe", diy: "❌" },
    { feature: "Direct Communication", me: "✅", agency: "❌", diy: "N/A" },
    { feature: "Revisions", me: "Included", agency: "Extra $$", diy: "N/A" },
    { feature: "Money-Back Guarantee", me: "✅", agency: "❌", diy: "N/A" },
    { feature: "SEO Optimized", me: "✅", agency: "Extra $$", diy: "Unlikely" },
  ];
  return (
    <div className="reveal py-16 max-w-4xl mx-auto px-5 md:px-8">
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-3">Why Me</span>
        <h3 className="text-section-title font-display text-white">The Honest Comparison</h3>
      </div>
      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-white/[0.04]">
                <th className="text-left text-[11px] text-white/25 font-medium p-4">Feature</th>
                <th className="text-center text-[11px] text-accent-400 font-bold p-4">Working With Me</th>
                <th className="text-center text-[11px] text-white/25 font-medium p-4">Agency</th>
                <th className="text-center text-[11px] text-white/25 font-medium p-4">DIY / Wix</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="text-[12px] text-white/40 p-4">{r.feature}</td>
                  <td className="text-center text-[12px] text-accent-300/70 font-medium p-4">{r.me}</td>
                  <td className="text-center text-[12px] text-white/20 p-4">{r.agency}</td>
                  <td className="text-center text-[12px] text-white/20 p-4">{r.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
