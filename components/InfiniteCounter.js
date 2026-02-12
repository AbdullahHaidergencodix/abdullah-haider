import { useState, useEffect } from "react";
export default function InfiniteCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="font-mono text-accent-400/20 text-[10px] tabular-nums">
      {String(count).padStart(6, "0")}
    </span>
  );
}
