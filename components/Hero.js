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
  { indent: 0, text: '<div class="hero">', color: "text-pink-400/80" },
  { indent: 1, text: '<h1>Your Brand</h1>', color: "text-blue-400/80" },
  { indent: 1, text: '<p>Built in 72 hours</p>', color: "text-emerald-400/70" },
  { indent: 1, text: '<button>Get Started</button>', color: "text-amber-400/70" },
  { indent: 0, text: '</div>', color: "text-pink-400/80" },
  { indent: 0, text: "", color: "" },
  { indent: 0, text: '.hero {', color: "text-purple-400/70" },
  { indent: 1, text: 'display: grid;', color: "text-white/45" },
  { indent: 1, text: 'animation: fadeIn 0.8s;', color: "text-white/45" },
  { indent: 0, text: '}', color: "text-purple-400/70" },
];

const ease = [0.16, 1, 0.3, 1];

function CodeEditor() {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease }} className="glass rounded-2xl overflow-hidden w-full max-w-md">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, type: "spring" }} className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7, type: "spring" }} className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8, type: "spring" }} className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-[10px] font-mono text-white/25 ml-2">index.html</motion.span>
      </div>
      <div className="p-3 md:p-4 font-mono text-[10px] md:text-[11px] leading-[1.9] min-h-[200px] md:min-h-[260px]">
        {codeLines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 + i * 0.1, duration: 0.5, ease }}>
            <span className="text-white/20 select-none mr-2 md:mr-3">{String(i + 1).padStart(2, "0")}</span>
            <span style={{ paddingLeft: line.indent * 16 }} className={line.color}>{line.text}</span>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 3.5, duration: 1, repeat: Infinity }} className="inline-block w-2 h-4 bg-accent-400/60 ml-1 mt-1" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollY = useParallax(0.15);
  const mouse = useMouseParallax(0.01);
  const scrambled = useTextScramble("I Build Websites", 1200, 28);
  const typed = useTypewriter("I design and build landing pages and websites that make your visitors stop, pay attention, and take action. Delivered in 72 hours.", 2200, 22);
  const greeting = useTimeGreeting();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
      <Particles />
      <div className="gradient-mesh" />
      <div className="orb orb-blue w-[400px] md:w-[600px] h-[400px] md:h-[600px] top-[5%] left-[5%] animate-float" />
      <div className="orb orb-purple w-[300px] md:w-[500px] h-[300px] md:h-[500px] bottom-[10%] right-[10%] animate-float-d" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-3 md:mb-4">
              <span className="text-sm">&#128075;</span>
              <span className="text-[11px] md:text-[12px] text-white/60 font-medium">{greeting}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease }}>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6 md:mb-8 animate-border-pulse">
              <span className="ticker-dot" />
              <span className="text-[11px] md:text-[12px] text-white/60 font-medium">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1.2, ease }} className="text-hero font-display mb-3">
            <span className="text-white font-mono">{scrambled || "\u00A0"}</span><br />
            <span className="accent-text animate-text-glow">People Remember.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.8 }} className="mb-8 md:mb-10">
            <p className="text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed">
              I&rsquo;m <span className="text-white/80 font-medium">Abdullah Haider</span> &mdash; Co-Founder &amp; CEO of{" "}
              <a href="https://www.gencodix.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors animated-underline">Gencodix</a>.{" "}
              {typed}<span className="inline-block w-[2px] h-5 bg-accent-400 ml-1 animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: 0.8, ease }} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
            <a href="#contact" className="btn-main text-[14px] py-3.5 px-8 rounded-xl animate-pulse-glow">Work With Me &rarr;</a>
            <a href="#work" className="btn-outline text-[14px] py-3.5 px-8 rounded-xl">See My Work</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }} className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2">
              <div className="stars"><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span></div>
              <span className="text-[11px] md:text-[12px] text-white/40">5.0 rating</span>
            </div>
            <span className="text-white/15">|</span>
            <span className="text-[11px] md:text-[12px] text-white/40">&#9889; 72hr delivery</span>
            <span className="text-white/15 hidden sm:inline">|</span>
            <span className="hidden sm:inline"><LiveCounter /></span>
          </motion.div>
        </div>

        {/* Code editor hidden on small mobile, shown on larger screens */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="hidden md:flex justify-center lg:justify-end">
          <CodeEditor />
        </motion.div>
      </div>
    </section>
  );
}
