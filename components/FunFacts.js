import { useState, useEffect } from "react";
const facts = [
  "I have written over 200,000 lines of code",
  "My fastest delivery was 18 hours",
  "I drink approximately 4 cups of coffee per project",
  "Every website I build scores 90+ on Lighthouse",
  "I have worked with clients in 8+ countries",
  "I reply to messages within 2 hours on average",
  "I have never missed a deadline",
  "My designs have generated over $500K for clients",
];
export default function FunFacts() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIdx((i) => (i + 1) % facts.length), 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="reveal text-center py-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.04] bg-white/[0.01]">
        <span className="text-sm">💡</span>
        <span className="text-[11px] text-white/30 font-medium transition-all duration-500" key={idx}>{facts[idx]}</span>
      </div>
    </div>
  );
}
