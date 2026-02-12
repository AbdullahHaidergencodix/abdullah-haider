import { motion } from "framer-motion";
import useParallax from "../hooks/useParallax";
import useMouseParallax from "../hooks/useMouseParallax";
import useTextScramble from "../hooks/useTextScramble";
import useTypewriter from "../hooks/useTypewriter";
import useTimeGreeting from "../hooks/useTimeGreeting";
import dynamic from "next/dynamic";
import LiveCounter from "./LiveCounter";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

const codeLines = [
  { indent: 0, text: '<div class="hero">', color: "text-pink-400/60" },
  { indent: 1, text: '<h1>Your Brand</h1>', color: "text-accent-400/60" },
  { indent: 1, text: '<p>Built in 72 hours</p>', color: "text-emerald-400/50" },
  { indent: 1, text: '<button>Get Started</button>', color: "text-amber-400/50" },
  { indent: 0, text: '</div>', color: "text-pink-400/60" },
  { indent: 0, text: "", color: "" },
  { indent: 0, text: '.hero {', color: "text-purple-400/50" },
  { indent: 1, text: 'display: grid;', color: "text-white/30" },
  { indent: 1, text: 'animation: fadeIn 0.8s;', color: "text-white/30" },
  { indent: 0, text: '}', color: "text-purple-400/50" },
];

function CodeEditor() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/[0.06] w-full max-w-md">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <span className="text-[10px] font-mono text-white/15 ml-2">index.html — Abdullah Haider</span>
      </div>
      {/* Code */}
      <div className="p-4 font-mono text-[11px] leading-[1.9] min-h-[260px]">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.12, duration: 0.4 }}
          >
            <span className="text-white/10 select-none mr-3">{String(i + 1).padStart(2, "0")}</span>
            <span style={{ paddingLeft: line.indent * 20 }} className={line.color}>{line.text}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3, duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-accent-400/50 ml-1 mt-1"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollY = useParallax(0.2);
  const mouse = useMouseParallax(0.015);
  const scrambled = useTextScramble("I Build Websites", 1200, 28);
  const typed = useTypewriter(
    "I design and build landing pages and websites that make your visitors stop, pay attention, and take action. Delivered in 72 hours. Every time.",
    2200,
    22
  );
  const greeting = useTimeGreeting();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <Particles />
      <div className="gradient-mesh" />
      <div className="orb orb-blue w-[600px] h-[600px] top-[5%] left-[5%] animate-float" style={{ transform: `translate(${mouse.x * 2}px, ${mouse.y * 2}px)` }} />
      <div className="orb orb-purple w-[500px] h-[500px] bottom-[10%] right-[10%] animate-float-d" style={{ transform: `translate(${mouse.x * -1.5}px, ${mouse.y * -1.5}px)` }} />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(59,142,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(59,142,255,0.4) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ transform: `translateY(${scrollY}px)` }}>
        <div>
          {/* Time-based greeting */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-4">
              <span className="text-sm">👋</span>
              <span className="text-[12px] text-white/50 font-medium">{greeting}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-8">
              <span className="ticker-dot" />
              <span className="text-[12px] text-white/50 font-medium">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-hero font-display mb-3">
            <span className="text-white font-mono">{scrambled || "\u00A0"}</span><br />
            <span className="accent-text">People Remember.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} className="mb-10 min-h-[70px]">
            <p className="text-lg text-white/35 font-light max-w-xl leading-relaxed">
              I&rsquo;m <span className="text-white/60 font-medium">Abdullah Haider</span> &mdash; Co-Founder &amp; CEO of{" "}
              <a href="https://www.gencodix.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors animated-underline">Gencodix</a>.{" "}
              {typed}
              <span className="inline-block w-[2px] h-5 bg-accent-400 ml-1 animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="btn-main text-[14px] py-3.5 px-8 rounded-lg">Work With Me &rarr;</a>
            <a href="#work" className="btn-outline text-[14px] py-3.5 px-8 rounded-lg">See My Work</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 0.8 }} className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="stars"><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span></div>
              <span className="text-[12px] text-white/30">5.0 rating</span>
            </div>
            <span className="text-white/10">|</span>
            <span className="text-[12px] text-white/30">&#9889; 72hr delivery</span>
            <span className="text-white/10">|</span>
            <LiveCounter />
          </motion.div>
        </div>

        {/* Right side — Animated code editor instead of portrait */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }} className="flex justify-center lg:justify-end">
          <div className="relative" style={{ transform: `translate(${mouse.x * -0.5}px, ${mouse.y * -0.5}px)` }}>
            <div className="absolute -inset-3 rounded-2xl border border-accent-500/[0.06]" />
            <CodeEditor />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
