import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const emojis = ["💻", "🚀", "⚡", "🎨", "✨", "🔥", "💎", "🌟", "📱", "🎯", "💡", "🛠️"];

function Emoji({ emoji, delay, x, duration }) {
  return (
    <motion.div
      className="fixed pointer-events-none text-lg md:text-xl z-[2] select-none"
      initial={{ y: "110vh", x: x + "vw", opacity: 0, rotate: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.15, 0.15, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {emoji}
    </motion.div>
  );
}

export default function FloatingEmojis() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Skip on mobile for performance
    if (window.innerWidth < 768) return;
    setShow(true);
  }, []);

  if (!show) return null;

  const items = Array.from({ length: 10 }, (_, i) => ({
    emoji: emojis[i % emojis.length],
    delay: i * 3.5,
    x: 5 + Math.random() * 85,
    duration: 18 + Math.random() * 12,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[2]">
      {items.map((item, i) => (
        <Emoji key={i} {...item} />
      ))}
    </div>
  );
}
