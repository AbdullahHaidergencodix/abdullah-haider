#!/bin/bash

# =============================================================================
# MOBILE OPTIMIZATION — iOS + Android perfect experience
# =============================================================================

set -e

DIR="$HOME/Desktop/abdullah-haider"
cd "$DIR"

echo ""
echo "  📱 Optimizing for iOS + Android..."
echo ""

# ══════════════════════════════════════════════════════════════════════════
# 1. Add mobile-specific CSS to globals.css
# ══════════════════════════════════════════════════════════════════════════
cat > styles/globals.css << 'CSSEOF'
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════════════════════════════════
   1. ROOT VARIABLES
   ═══════════════════════════════════════════════════════════════════════ */
:root {
  --bg-primary: #0e1117;
  --bg-secondary: #131720;
  --bg-card: #171c28;
  --bg-elevated: #1c2233;
  --accent: #3b8eff;
  --accent-light: #6aadff;
  --accent-dark: #1a6be0;
  --purple: #7c3aed;
  --emerald: #10b981;
  --text-primary: #eef0f6;
  --text-secondary: rgba(238,240,246,0.7);
  --text-body: rgba(238,240,246,0.55);
  --text-muted: rgba(238,240,246,0.35);
  --text-faint: rgba(238,240,246,0.2);
  --border: rgba(255,255,255,0.06);
  --border-hover: rgba(59,142,255,0.2);
  --radius: 16px;
  --radius-sm: 10px;
  --radius-full: 9999px;
  --transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  /* Safe area for notched phones */
  --sat: env(safe-area-inset-top, 0px);
  --sab: env(safe-area-inset-bottom, 0px);
  --sal: env(safe-area-inset-left, 0px);
  --sar: env(safe-area-inset-right, 0px);
}

/* ═══════════════════════════════════════════════════════════════════════
   2. RESET & BASE
   ═══════════════════════════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color-scheme: dark;
  /* Prevent iOS text size adjust on rotation */
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
  cursor: default;
  line-height: 1.7;
  /* Prevent pull-to-refresh on mobile */
  overscroll-behavior-y: none;
  /* Smooth iOS momentum scrolling */
  -webkit-overflow-scrolling: touch;
}

a, button { cursor: pointer; -webkit-tap-highlight-color: transparent; }

/* Prevent iOS auto-zoom on input focus */
input, textarea, select { font-size: 16px !important; }

::selection { background: rgba(59,142,255,0.2); color: #fff; }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg-secondary); }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(59,142,255,0.3); }

/* ═══════════════════════════════════════════════════════════════════════
   3. TYPOGRAPHY
   ═══════════════════════════════════════════════════════════════════════ */
.font-display { font-family: 'Space Grotesk', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

h1, h2, h3, h4 {
  text-wrap: balance;
  text-rendering: optimizeLegibility;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.text-hero {
  font-size: clamp(2rem, 8vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.text-section-title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.accent-text {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 40%, #a78bfa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ═══════════════════════════════════════════════════════════════════════
   4. GLASS — Simplified for mobile GPU
   ═══════════════════════════════════════════════════════════════════════ */
.glass {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  transition: all var(--transition);
}
/* Only apply blur on devices that handle it well */
@media (min-width: 768px) {
  .glass {
    backdrop-filter: blur(20px) saturate(120%);
    -webkit-backdrop-filter: blur(20px) saturate(120%);
  }
}
@media (max-width: 767px) {
  .glass {
    background: rgba(23,28,40,0.95);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

.glass:hover {
  background: rgba(255,255,255,0.05);
  border-color: var(--border-hover);
  box-shadow: 0 8px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(59,142,255,0.06);
}
@media (min-width: 768px) {
  .glass:hover { transform: translateY(-2px); }
}
.glass-glow:hover {
  box-shadow: 0 0 60px rgba(59,142,255,0.04), 0 20px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04);
}

/* ═══════════════════════════════════════════════════════════════════════
   5. BUTTONS — Bigger touch targets on mobile
   ═══════════════════════════════════════════════════════════════════════ */
.btn-main {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 50%, var(--accent-light) 100%);
  background-size: 200% 200%;
  color: #fff;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: all var(--transition);
  box-shadow: 0 2px 20px rgba(59,142,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  min-height: 48px;
}
.btn-main:hover {
  box-shadow: 0 12px 40px rgba(59,142,255,0.3), inset 0 1px 0 rgba(255,255,255,0.15);
  background-position: 100% 100%;
}
@media (min-width: 768px) {
  .btn-main:hover { transform: translateY(-3px) scale(1.02); }
}
.btn-main:active { transform: scale(0.97); }
.btn-main::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
  background-size: 250% 250%;
  animation: btnShine 3s ease-in-out infinite;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
  min-height: 48px;
}
.btn-outline:hover {
  border-color: var(--border-hover);
  color: #fff;
  background: rgba(59,142,255,0.06);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}
@media (min-width: 768px) {
  .btn-outline:hover { transform: translateY(-3px); }
}
.btn-outline:active { transform: scale(0.97); }

/* ═══════════════════════════════════════════════════════════════════════
   6. TAGS
   ═══════════════════════════════════════════════════════════════════════ */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.3s ease;
  white-space: nowrap;
  min-height: 36px;
}
.tag:hover {
  border-color: var(--border-hover);
  color: var(--text-secondary);
  background: rgba(59,142,255,0.05);
}

/* ═══════════════════════════════════════════════════════════════════════
   7. STARS
   ═══════════════════════════════════════════════════════════════════════ */
.stars { display: inline-flex; gap: 2px; }
.star { color: #f59e0b; font-size: 14px; filter: drop-shadow(0 0 3px rgba(245,158,11,0.4)); }

/* ═══════════════════════════════════════════════════════════════════════
   8. TICKER DOT
   ═══════════════════════════════════════════════════════════════════════ */
.ticker-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--emerald); position: relative;
  animation: tickerPulse 2s ease-in-out infinite;
  box-shadow: 0 0 6px rgba(16,185,129,0.4);
}
.ticker-dot::after {
  content: ""; position: absolute; inset: -4px; border-radius: 50%;
  border: 1px solid rgba(16,185,129,0.3);
  animation: tickerRing 2s ease-in-out infinite;
}
@keyframes tickerPulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.7; transform:scale(0.85); } }
@keyframes tickerRing { 0%,100% { opacity:0; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.5); } }

/* ═══════════════════════════════════════════════════════════════════════
   9. AVATAR
   ═══════════════════════════════════════════════════════════════════════ */
.avatar-ring {
  width: 38px; height: 38px; border-radius: 50%; padding: 2px;
  background: linear-gradient(135deg, var(--accent), var(--purple));
}
.avatar-inner {
  width: 100%; height: 100%; border-radius: 50%;
  background: var(--bg-card); display: flex; align-items: center; justify-content: center;
}

/* ═══════════════════════════════════════════════════════════════════════
   10. ORBS & BACKGROUNDS
   ═══════════════════════════════════════════════════════════════════════ */
.orb {
  position: absolute; border-radius: 50%; filter: blur(120px);
  pointer-events: none; will-change: transform;
}
.orb-blue { background: radial-gradient(circle, rgba(59,142,255,0.08) 0%, transparent 70%); }
.orb-purple { background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%); }

/* Smaller, less intense orbs on mobile */
@media (max-width: 767px) {
  .orb { filter: blur(80px); opacity: 0.6; }
}

.gradient-mesh {
  position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none;
}
.gradient-mesh::before {
  content: ""; position: absolute; width: 150%; height: 150%; top: -25%; left: -25%;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(59,142,255,0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(59,142,255,0.03) 0%, transparent 50%);
  animation: meshFloat 25s ease-in-out infinite;
}
/* Disable mesh animation on mobile for GPU savings */
@media (max-width: 767px) {
  .gradient-mesh::before { animation: none; }
}
@keyframes meshFloat {
  0%,100% { transform: translate(0,0) rotate(0deg); }
  33% { transform: translate(1.5%,-2%) rotate(0.5deg); }
  66% { transform: translate(-1.5%,1.5%) rotate(-0.5deg); }
}

.noise::after {
  content: ""; position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.012;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
/* Disable noise on mobile */
@media (max-width: 767px) {
  .noise::after { display: none; }
}

/* ═══════════════════════════════════════════════════════════════════════
   11. ANIMATIONS
   ═══════════════════════════════════════════════════════════════════════ */
@keyframes float {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}
@keyframes floatDelay {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-1deg); }
}
.animate-float { animation: float 8s ease-in-out infinite; }
.animate-float-d { animation: floatDelay 10s ease-in-out infinite; }

/* Disable floating on mobile */
@media (max-width: 767px) {
  .animate-float, .animate-float-d { animation: none; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes blurIn {
  from { opacity: 0; filter: blur(12px); transform: translateY(20px); }
  to { opacity: 1; filter: blur(0); transform: translateY(0); }
}
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes flipIn {
  from { opacity: 0; transform: perspective(400px) rotateX(-20deg); }
  to { opacity: 1; transform: perspective(400px) rotateX(0); }
}
@keyframes textGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(59,142,255,0), 0 0 40px rgba(59,142,255,0); }
  50% { text-shadow: 0 0 15px rgba(59,142,255,0.2), 0 0 50px rgba(59,142,255,0.06); }
}
@keyframes borderPulse {
  0%, 100% { border-color: rgba(59,142,255,0.06); }
  50% { border-color: rgba(59,142,255,0.18); }
}
@keyframes gentleRock {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59,142,255,0); }
  50% { box-shadow: 0 0 30px 5px rgba(59,142,255,0.1); }
}
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes gradBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes typingBounce {
  0%,60%,100% { transform: translateY(0); opacity: 0.3; }
  30% { transform: translateY(-5px); opacity: 1; }
}
@keyframes btnShine {
  0%,100% { background-position: 200% 200%; }
  50% { background-position: 0% 0%; }
}

.animate-fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-fade-left { animation: fadeLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-fade-right { animation: fadeRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-scale-in { animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-blur-in { animation: blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-bounce-in { animation: bounceIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-flip-in { animation: flipIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-text-glow { animation: textGlow 3s ease-in-out infinite; }
.animate-border-pulse { animation: borderPulse 3s ease-in-out infinite; }
.animate-gentle-rock { animation: gentleRock 5s ease-in-out infinite; }
.animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
.page-enter { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

/* ═══════════════════════════════════════════════════════════════════════
   12. REVEAL SYSTEM
   ═══════════════════════════════════════════════════════════════════════ */
.reveal {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.8s cubic-bezier(0.16,1,0.3,1);
}
/* Only use blur reveals on desktop — expensive on mobile GPU */
@media (min-width: 768px) {
  .reveal { filter: blur(4px); }
  .reveal.vis { filter: blur(0); }
}
.reveal.vis { opacity: 1; transform: translateY(0); }

.reveal-left { opacity: 0; transform: translateX(-40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
.reveal-left.vis { opacity: 1; transform: translateX(0); }
.reveal-right { opacity: 0; transform: translateX(40px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
.reveal-right.vis { opacity: 1; transform: translateX(0); }
.reveal-scale { opacity: 0; transform: scale(0.9); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
.reveal-scale.vis { opacity: 1; transform: scale(1); }

@media (min-width: 768px) {
  .reveal-left { filter: blur(4px); }
  .reveal-left.vis { filter: blur(0); }
  .reveal-right { filter: blur(4px); }
  .reveal-right.vis { filter: blur(0); }
  .reveal-scale { filter: blur(4px); }
  .reveal-scale.vis { filter: blur(0); }
}

/* On mobile, reveal from same direction (no left/right — feels janky on small screens) */
@media (max-width: 767px) {
  .reveal-left, .reveal-right {
    opacity: 0;
    transform: translateY(30px);
  }
  .reveal-left.vis, .reveal-right.vis {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal.rd1 { transition-delay: 0.05s; }
.reveal.rd2 { transition-delay: 0.1s; }
.reveal.rd3 { transition-delay: 0.15s; }
.reveal.rd4 { transition-delay: 0.2s; }
.reveal.rd5 { transition-delay: 0.25s; }
.reveal.rd6 { transition-delay: 0.3s; }
.reveal.rd7 { transition-delay: 0.35s; }
.reveal.rd8 { transition-delay: 0.4s; }
.reveal-left.rd1, .reveal-right.rd1 { transition-delay: 0.05s; }
.reveal-left.rd2, .reveal-right.rd2 { transition-delay: 0.1s; }

/* ═══════════════════════════════════════════════════════════════════════
   13. HOVER — Desktop only
   ═══════════════════════════════════════════════════════════════════════ */
@media (hover: hover) {
  .hover-lift { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease; }
  .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
  .hover-tilt { transition: transform 0.5s ease; }
  .hover-tilt:hover { transform: perspective(600px) rotateX(3deg) rotateY(-3deg) translateY(-4px); }
  .hover-glow { transition: all 0.4s ease; }
  .hover-glow:hover { box-shadow: 0 0 40px rgba(59,142,255,0.08), 0 0 80px rgba(59,142,255,0.04); }
  .hover-scale { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
  .hover-scale:hover { transform: scale(1.05); }
}

/* ═══════════════════════════════════════════════════════════════════════
   14. CARD ANIMATIONS — Desktop only transforms
   ═══════════════════════════════════════════════════════════════════════ */
.card-animate { transition: all 0.5s cubic-bezier(0.16,1,0.3,1); }
@media (hover: hover) {
  .card-animate:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.2), 0 0 40px rgba(59,142,255,0.04); }
  .card-animate:hover .card-icon { transform: scale(1.2) rotate(5deg); }
}
.card-icon { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }

/* ═══════════════════════════════════════════════════════════════════════
   15. STAGGER
   ═══════════════════════════════════════════════════════════════════════ */
.stagger-children > *:nth-child(1) { animation-delay: 0s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.05s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.15s; }
.stagger-children > *:nth-child(5) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(6) { animation-delay: 0.25s; }
.stagger-children > *:nth-child(7) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(8) { animation-delay: 0.35s; }
.stagger-children > *:nth-child(9) { animation-delay: 0.4s; }
.stagger-children > *:nth-child(10) { animation-delay: 0.45s; }
.stagger-children > *:nth-child(11) { animation-delay: 0.5s; }
.stagger-children > *:nth-child(12) { animation-delay: 0.55s; }

/* ═══════════════════════════════════════════════════════════════════════
   16. MARQUEE
   ═══════════════════════════════════════════════════════════════════════ */
.marquee-wrap { overflow: hidden; white-space: nowrap; }
.marquee-inner { display: inline-flex; animation: marqueeScroll 30s linear infinite; }
@media (hover: hover) {
  .marquee-wrap:hover .marquee-inner { animation-play-state: paused; }
}

/* ═══════════════════════════════════════════════════════════════════════
   17. PRELOADER
   ═══════════════════════════════════════════════════════════════════════ */
.preloader {
  position: fixed; inset: 0; z-index: 100000;
  background: var(--bg-primary); display: flex; align-items: center; justify-content: center;
  transition: opacity 0.8s ease, visibility 0.8s ease;
  padding-top: var(--sat);
}
.preloader.done { opacity: 0; visibility: hidden; pointer-events: none; }

/* ═══════════════════════════════════════════════════════════════════════
   18. ANIMATED UNDERLINE
   ═══════════════════════════════════════════════════════════════════════ */
.animated-underline { position: relative; display: inline-block; }
.animated-underline::after {
  content: ""; position: absolute; left: 0; bottom: -2px;
  width: 100%; height: 1.5px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  transform: scaleX(0); transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
@media (hover: hover) {
  .animated-underline:hover::after { transform: scaleX(1); transform-origin: left; }
}

/* ═══════════════════════════════════════════════════════════════════════
   19. GRADIENT BORDER
   ═══════════════════════════════════════════════════════════════════════ */
.gradient-border { position: relative; }
.gradient-border::before {
  content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
  background: linear-gradient(135deg, var(--accent), var(--purple), var(--accent));
  background-size: 300% 300%; animation: gradBorder 5s linear infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude; -webkit-mask-composite: xor;
}

/* ═══════════════════════════════════════════════════════════════════════
   20. PRICING FEATURED
   ═══════════════════════════════════════════════════════════════════════ */
.pricing-featured {
  background: rgba(59,142,255,0.04); border: 1px solid rgba(59,142,255,0.1);
}
@media (hover: hover) {
  .pricing-featured:hover {
    background: rgba(59,142,255,0.06); border-color: rgba(59,142,255,0.2);
    box-shadow: 0 0 80px rgba(59,142,255,0.06), 0 30px 60px rgba(0,0,0,0.2);
    transform: translateY(-8px) scale(1.01);
  }
}

/* ═══════════════════════════════════════════════════════════════════════
   21. TYPING INDICATOR
   ═══════════════════════════════════════════════════════════════════════ */
.typing-dot {
  display: inline-block; width: 5px; height: 5px; border-radius: 50%;
  background: var(--accent); animation: typingBounce 1.4s ease-in-out infinite;
}
.typing-dot:nth-child(2) { animation-delay: 0.15s; }
.typing-dot:nth-child(3) { animation-delay: 0.3s; }

/* ═══════════════════════════════════════════════════════════════════════
   22. IMAGE REVEAL
   ═══════════════════════════════════════════════════════════════════════ */
.image-reveal { position: relative; overflow: hidden; }
.image-reveal::after {
  content: ""; position: absolute; inset: 0; background: var(--bg-primary);
  transform: scaleX(1); transform-origin: right;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.image-reveal.vis::after { transform: scaleX(0); }

/* ═══════════════════════════════════════════════════════════════════════
   23. DIVIDER
   ═══════════════════════════════════════════════════════════════════════ */
.divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent); margin: 0 auto; }

/* ═══════════════════════════════════════════════════════════════════════
   24. FOCUS
   ═══════════════════════════════════════════════════════════════════════ */
*:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }

/* ═══════════════════════════════════════════════════════════════════════
   25. UTILITIES
   ═══════════════════════════════════════════════════════════════════════ */
section { scroll-margin-top: 80px; }
img { image-rendering: -webkit-optimize-contrast; }
.snap-x { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
.snap-center { scroll-snap-align: center; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { scrollbar-width: none; }
.skeleton {
  background: linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 75%);
  background-size: 200% 100%; animation: shimmer 1.5s ease-in-out infinite; border-radius: var(--radius-sm);
}

/* ═══════════════════════════════════════════════════════════════════════
   26. MOBILE-SPECIFIC LAYOUT
   ═══════════════════════════════════════════════════════════════════════ */
@media (max-width: 767px) {
  /* Padding respects safe areas (iPhone notch/dynamic island) */
  body {
    padding-left: var(--sal);
    padding-right: var(--sar);
  }

  /* Section spacing tighter on mobile */
  section { scroll-margin-top: 70px; }

  /* Touch-friendly tap targets */
  a, button { min-height: 44px; }

  /* Prevent text from being too small */
  p, span, li { font-size: max(13px, inherit); }

  /* Full-width buttons on mobile */
  .btn-main, .btn-outline {
    width: 100%;
    justify-content: center;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 15px;
  }

  /* Horizontal scrolling sections — touch-friendly */
  .snap-x {
    scroll-padding: 0 20px;
    padding: 0 20px;
    gap: 12px;
  }

  /* Reduce section padding on small screens */
  .py-24 { padding-top: 3.5rem; padding-bottom: 3.5rem; }
  .py-36 { padding-top: 4rem; padding-bottom: 4rem; }

  /* Stack grid columns */
  .grid.md\:grid-cols-2,
  .grid.md\:grid-cols-3,
  .grid.lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  /* Reduce heading sizes further on very small screens */
  .text-hero { font-size: clamp(1.75rem, 9vw, 2.5rem); }
  .text-section-title { font-size: clamp(1.4rem, 6vw, 1.8rem); }

  /* Hide desktop-only elements */
  .hidden-mobile { display: none !important; }
}

/* Small phones (SE, etc) */
@media (max-width: 374px) {
  .text-hero { font-size: 1.6rem; }
  .text-section-title { font-size: 1.3rem; }
  .px-5 { padding-left: 1rem; padding-right: 1rem; }
}

/* Tablet tweaks */
@media (min-width: 768px) and (max-width: 1023px) {
  .text-hero { font-size: clamp(2.2rem, 5vw, 3rem); }
}

/* ═══════════════════════════════════════════════════════════════════════
   27. iOS SPECIFIC FIXES
   ═══════════════════════════════════════════════════════════════════════ */
/* Fix iOS 100vh issue — use dvh when available */
@supports (height: 100dvh) {
  .min-h-screen { min-height: 100dvh !important; }
}

/* Fix iOS rubber-band scrolling visual glitch */
html { background: var(--bg-primary); }

/* Fix iOS Safari bottom bar overlap */
.fixed.bottom-6 {
  bottom: max(1.5rem, calc(var(--sab) + 0.5rem));
}

/* ═══════════════════════════════════════════════════════════════════════
   28. ANDROID SPECIFIC
   ═══════════════════════════════════════════════════════════════════════ */
/* Ensure proper font rendering on Android Chrome */
@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
  body { text-rendering: optimizeSpeed; }
}

/* ═══════════════════════════════════════════════════════════════════════
   29. LIGHT MODE
   ═══════════════════════════════════════════════════════════════════════ */
.light-mode {
  --bg-primary: #f8f9fc; --bg-secondary: #eef0f6; --bg-card: #ffffff; --bg-elevated: #ffffff;
  --text-primary: #1a1a2e; --text-secondary: rgba(26,26,46,0.7); --text-body: rgba(26,26,46,0.55);
  --text-muted: rgba(26,26,46,0.35); --text-faint: rgba(26,26,46,0.2);
  --border: rgba(0,0,0,0.07); --border-hover: rgba(59,142,255,0.25);
}
.light-mode body { background: var(--bg-primary); color: var(--text-primary); }
.light-mode html { background: var(--bg-primary); }
.light-mode .glass { background: rgba(255,255,255,0.7); border-color: var(--border); }
@media (max-width: 767px) {
  .light-mode .glass { background: rgba(255,255,255,0.92); }
}
.light-mode .glass:hover { background: rgba(255,255,255,0.9); border-color: var(--border-hover); }
.light-mode .text-white { color: var(--text-primary) !important; }
.light-mode .text-white\/90, .light-mode .text-white\/80, .light-mode .text-white\/70,
.light-mode .text-white\/60 { color: var(--text-secondary) !important; }
.light-mode .text-white\/50, .light-mode .text-white\/45, .light-mode .text-white\/40,
.light-mode .text-white\/35, .light-mode .text-white\/30, .light-mode .text-white\/25,
.light-mode .text-white\/20, .light-mode .text-white\/15 { color: var(--text-muted) !important; }
.light-mode .noise::after { display: none; }
.light-mode ::selection { background: rgba(59,142,255,0.15); color: #1a1a2e; }
.light-mode .preloader { background: var(--bg-primary) !important; }
.light-mode .image-reveal::after { background: var(--bg-primary); }
.light-mode .orb-blue { background: radial-gradient(circle, rgba(59,142,255,0.04) 0%, transparent 70%) !important; }

/* ═══════════════════════════════════════════════════════════════════════
   30. REDUCED MOTION
   ═══════════════════════════════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  .reveal, .reveal-left, .reveal-right, .reveal-scale { opacity: 1 !important; transform: none !important; filter: none !important; }
}

/* ═══════════════════════════════════════════════════════════════════════
   31. PRINT
   ═══════════════════════════════════════════════════════════════════════ */
@media print {
  body { background: #fff !important; color: #000 !important; }
  .preloader, nav, footer, canvas, .orb, .gradient-mesh, .noise::after { display: none !important; }
}
CSSEOF

echo "  ✅ CSS rewritten with full mobile optimization"

# ══════════════════════════════════════════════════════════════════════════
# 2. Rewrite Hero — Mobile-first layout
# ══════════════════════════════════════════════════════════════════════════
cat > components/Hero.js << 'HEROEOF'
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
HEROEOF

# ══════════════════════════════════════════════════════════════════════════
# 3. Particles — Disable on mobile
# ══════════════════════════════════════════════════════════════════════════
cat > components/Particles.js << 'EOF'
import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on mobile entirely
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const count = Math.min(35, Math.floor(window.innerWidth / 40));
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1 + 0.3,
        o: Math.random() * 0.2 + 0.05,
      });
    }

    const connDistSq = 90 * 90;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = `rgba(59,142,255,${p.o})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < connDistSq) {
            const alpha = 0.02 * (1 - distSq / connDistSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,142,255,${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />;
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 4. Floating WhatsApp — Safe area aware
# ══════════════════════════════════════════════════════════════════════════
cat > components/FloatingWhatsApp.js << 'EOF'
import { useState, useEffect } from "react";
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    const p = setInterval(() => setPulse((v) => !v), 4000);
    return () => { clearTimeout(t); clearInterval(p); };
  }, []);
  return (
    <a href="https://wa.me/923054573962" target="_blank" rel="noopener noreferrer"
      className={"fixed z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-700 group active:scale-90 " + (show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none")}
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", bottom: "max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))", right: "1.5rem" }} aria-label="Chat on WhatsApp">
      {pulse && <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />}
      <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 5. SocialProof — Bottom-left, respects safe area
# ══════════════════════════════════════════════════════════════════════════
cat > components/SocialProof.js << 'EOF'
import { useState, useEffect } from "react";
const proofs = [
  { name: "Sarah M.", action: "just booked a project", time: "2 min ago", flag: "\u{1F1FA}\u{1F1F8}" },
  { name: "Omar A.", action: "got their website delivered", time: "15 min ago", flag: "\u{1F1E6}\u{1F1EA}" },
  { name: "Jessica W.", action: "left a 5-star review", time: "1 hr ago", flag: "\u{1F1E8}\u{1F1E6}" },
  { name: "Daniel K.", action: "just booked a project", time: "2 hrs ago", flag: "\u{1F1E9}\u{1F1EA}" },
  { name: "Amira H.", action: "got their landing page", time: "3 hrs ago", flag: "\u{1F1F8}\u{1F1E6}" },
];
export default function SocialProof() {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let i = 0;
    const show = () => { setCurrent(proofs[i % proofs.length]); setVisible(true); setTimeout(() => setVisible(false), 4000); i++; };
    const initial = setTimeout(show, 8000);
    const interval = setInterval(show, 18000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);
  if (!current) return null;
  return (
    <div
      className={"fixed left-4 md:left-6 z-50 transition-all duration-500 " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}
      style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))" }}
    >
      <div className="glass rounded-xl px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-3 max-w-[280px] md:max-w-xs border border-white/[0.06]">
        <span className="text-lg md:text-xl">{current.flag}</span>
        <div>
          <p className="text-[11px] md:text-[12px] text-white/70 font-medium">{current.name} {current.action}</p>
          <p className="text-[9px] md:text-[10px] text-white/25">{current.time}</p>
        </div>
      </div>
    </div>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 6. BackToTop — Safe area aware
# ══════════════════════════════════════════════════════════════════════════
cat > components/BackToTop.js << 'EOF'
import { useState, useEffect } from "react";
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={"fixed z-50 w-11 h-11 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center transition-all duration-500 active:scale-90 " + (show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none")}
      style={{ bottom: "max(5rem, calc(env(safe-area-inset-bottom, 0px) + 4rem))", right: "1.5rem" }}
      aria-label="Back to top"
    >
      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 7. Navbar — Mobile-optimized with safe areas
# ══════════════════════════════════════════════════════════════════════════
cat > components/Navbar.js << 'NAVEOF'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { l: "About", h: "about" },
  { l: "Services", h: "services" },
  { l: "Work", h: "work" },
  { l: "Pricing", h: "pricing" },
  { l: "Reviews", h: "testimonials" },
  { l: "Contact", h: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.h));

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={"fixed top-0 w-full z-[1000] transition-all duration-500 " + (scrolled ? "bg-bg-primary/85 backdrop-blur-2xl border-b border-white/[0.05] py-2.5 md:py-3" : "bg-transparent py-4 md:py-5")}
        style={{ paddingTop: scrolled ? undefined : "max(1rem, env(safe-area-inset-top, 0px))" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#" className="relative z-[1001] flex items-center gap-2 md:gap-2.5 group">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-600/20 transition-shadow">
              <span className="text-white font-bold text-sm md:text-base font-display">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-[13px] md:text-[15px] tracking-tight">Abdullah Haider</span>
              <span className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-widest uppercase mt-0.5">Gencodix</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.l} href={"#" + l.h} onClick={(e) => go(e, l.h)}
                className={"px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 " + (active === l.h ? "text-accent-400 bg-accent-500/[0.08]" : "text-white/45 hover:text-white/70 hover:bg-white/[0.03]")}>
                {l.l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" onClick={(e) => go(e, "contact")} className="hidden md:inline-flex btn-main text-[12px] py-2 px-5 rounded-lg font-semibold">Let&rsquo;s Talk</a>
            <button onClick={() => setOpen(!open)} className="md:hidden relative z-[1001] w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/[0.05] active:bg-white/[0.08] transition-colors" aria-label="Menu">
              <span className={"block w-5 h-[1.5px] bg-white/70 transition-all duration-300 " + (open ? "rotate-45 translate-y-[4px]" : "")} />
              <span className={"block w-5 h-[1.5px] bg-white/70 transition-all duration-300 " + (open ? "-rotate-45 -translate-y-[4px]" : "")} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] bg-bg-primary/98 backdrop-blur-3xl flex items-center justify-center" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
            <nav className="flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.a key={l.l} href={"#" + l.h} onClick={(e) => go(e, l.h)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  className={"font-display text-2xl font-bold transition-colors active:scale-95 " + (active === l.h ? "text-accent-400" : "text-white/80")}>
                  {l.l}
                </motion.a>
              ))}
              <motion.a href="#contact" onClick={(e) => go(e, "contact")} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="btn-main mt-4 text-sm py-3.5 px-10 rounded-xl w-64 justify-center">
                Let&rsquo;s Talk &rarr;
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
NAVEOF

# ══════════════════════════════════════════════════════════════════════════
# 8. StickyCTA — Mobile-optimized
# ══════════════════════════════════════════════════════════════════════════
cat > components/StickyCTA.js << 'EOF'
import { useState, useEffect } from "react";
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => {
      const contact = document.getElementById("contact");
      if (!contact) { setShow(window.scrollY > 1200); return; }
      const rect = contact.getBoundingClientRect();
      setShow(window.scrollY > 1200 && rect.top > window.innerHeight);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <div
      className="fixed left-0 right-0 z-40 px-4 md:hidden"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))" }}
    >
      <a href="#contact" className="btn-main w-full text-[14px] py-3.5 rounded-xl justify-center shadow-lg shadow-accent-600/20">
        Work With Me &rarr;
      </a>
    </div>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 9. ThemeToggle — Bigger touch target
# ══════════════════════════════════════════════════════════════════════════
cat > components/ThemeToggle.js << 'EOF'
import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    if (light) document.documentElement.classList.add("light-mode");
    else document.documentElement.classList.remove("light-mode");
  }, [light]);
  return (
    <button onClick={() => setLight(!light)}
      className="fixed top-[80px] md:top-[90px] right-4 md:right-6 z-50 w-11 h-11 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center active:scale-90 transition-all duration-300 group"
      style={{ top: "max(80px, calc(env(safe-area-inset-top, 0px) + 60px))" }}
      aria-label="Toggle theme">
      <span className="text-base md:text-sm group-hover:scale-110 transition-transform">{light ? "\u{1F319}" : "\u2600\uFE0F"}</span>
    </button>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 10. ScrollProgress — Thinner on mobile
# ══════════════════════════════════════════════════════════════════════════
cat > components/ScrollProgress.js << 'EOF'
import { useState, useEffect } from "react";
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] h-[2px] md:h-[3px] bg-transparent">
      <div className="h-full bg-gradient-to-r from-accent-600 to-accent-400 transition-all duration-150 ease-out" style={{ width: progress + "%" }} />
    </div>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 11. PageProgress — Hide on mobile (too small)
# ══════════════════════════════════════════════════════════════════════════
cat > components/PageProgress.js << 'EOF'
import { useState, useEffect } from "react";
export default function PageProgress() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    if (window.innerWidth < 1280) return;
    const ids = ["about","services","work","pricing","testimonials","process","faq","contact"];
    const handler = () => {
      setSections(ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, active: false };
        const rect = el.getBoundingClientRect();
        return { id, active: rect.top < window.innerHeight * 0.5 && rect.bottom > 0 };
      }));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  if (sections.length === 0) return null;
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
      {sections.map((s) => (
        <a key={s.id} href={"#" + s.id} className={"w-2 h-2 rounded-full transition-all duration-300 " + (s.active ? "bg-accent-500 scale-125" : "bg-white/10 hover:bg-white/20")} title={s.id.charAt(0).toUpperCase() + s.id.slice(1)} />
      ))}
    </div>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 12. ScrollIndicator — Hide on mobile
# ══════════════════════════════════════════════════════════════════════════
cat > components/ScrollIndicator.js << 'EOF'
import { motion } from "framer-motion";
export default function ScrollIndicator() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
      <span className="text-[10px] text-white/20 font-mono">Scroll</span>
      <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1.5 rounded-full bg-accent-400/40" />
      </div>
    </motion.div>
  );
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 13. Update Head with proper mobile meta tags
# ══════════════════════════════════════════════════════════════════════════
cat > pages/index.js << 'INDEXEOF'
import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SocialProof from "../components/SocialProof";
import EasterEgg from "../components/EasterEgg";
import AnimatedDivider from "../components/AnimatedDivider";
import ClientMarquee from "../components/ClientMarquee";
import RandomQuote from "../components/RandomQuote";
import CTABanner from "../components/CTABanner";
import FunFacts from "../components/FunFacts";
import Guarantee from "../components/Guarantee";
import ComparisonTable from "../components/ComparisonTable";
import GrainOverlay from "../components/GrainOverlay";
import InteractiveProcess from "../components/InteractiveProcess";
import ToastProvider from "../components/Toast";
import TrustBadges from "../components/TrustBadges";
import WhyMe from "../components/WhyMe";
import NetworkStatus from "../components/NetworkStatus";
import MorphBlob from "../components/MorphBlob";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), { ssr: false });
const CommandPalette = dynamic(() => import("../components/CommandPalette"), { ssr: false });
const KeyboardHints = dynamic(() => import("../components/KeyboardHints"), { ssr: false });
const DynamicTitle = dynamic(() => import("../components/DynamicTitle"), { ssr: false });
const IdlePrompt = dynamic(() => import("../components/IdlePrompt"), { ssr: false });
const StickyCTA = dynamic(() => import("../components/StickyCTA"), { ssr: false });
const PageProgress = dynamic(() => import("../components/PageProgress"), { ssr: false });
const ScrollIndicator = dynamic(() => import("../components/ScrollIndicator"), { ssr: false });

export default function Home() {
  useReveal();
  useSmoothScroll();

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person",
    name: "Abdullah Haider", email: "Aboodiprofessional@gmail.com", telephone: "+923054573962",
    url: "https://www.gencodix.com", jobTitle: "Co-Founder & CEO",
    worksFor: { "@type": "Organization", name: "Gencodix", url: "https://www.gencodix.com" },
    knowsAbout: ["Web Design", "Web Development", "UI/UX Design", "Landing Pages", "SEO"],
  };

  return (
    <>
      <Head>
        <title>Abdullah Haider — Web Designer & Developer | Gencodix</title>
        <meta name="description" content="I am Abdullah Haider, Co-Founder of Gencodix. I design and build stunning websites in 72 hours." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="theme-color" content="#0e1117" />
        <meta name="theme-color" content="#f8f9fc" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Abdullah Haider — Web Designer & Developer" />
        <meta property="og:description" content="Websites delivered in 72 hours." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abdullah Haider" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Preloader />
      <NetworkStatus />
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />
      <FloatingWhatsApp />
      <SocialProof />
      <EasterEgg />
      <CommandPalette />
      <KeyboardHints />
      <DynamicTitle />
      <IdlePrompt />
      <StickyCTA />
      <GrainOverlay />
      <ToastProvider />
      <PageProgress />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="noise page-enter relative">
        <MorphBlob className="w-[400px] md:w-[800px] h-[400px] md:h-[800px] top-[20%] -left-[100px] md:-left-[200px]" />
        <MorphBlob className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] top-[60%] -right-[80px] md:-right-[150px]" />
        <Navbar />
        <div className="relative"><Hero /><ScrollIndicator /></div>
        <Marquee />
        <Stats />
        <FunFacts />
        <AnimatedDivider />
        <About />
        <Services />
        <WhyMe />
        <AnimatedDivider />
        <Work />
        <ClientMarquee />
        <Pricing />
        <Guarantee />
        <ComparisonTable />
        <TrustBadges />
        <Testimonials />
        <RandomQuote />
        <InteractiveProcess />
        <AnimatedDivider />
        <CTABanner />
        <FAQ />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
INDEXEOF

# ══════════════════════════════════════════════════════════════════════════
# 14. Manifest for PWA / Add to Home Screen
# ══════════════════════════════════════════════════════════════════════════
cat > public/manifest.json << 'EOF'
{
  "name": "Abdullah Haider — Web Designer",
  "short_name": "Abdullah",
  "description": "Web Designer & Developer. Websites in 72 hours.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0e1117",
  "theme_color": "#0e1117",
  "orientation": "portrait-primary",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
EOF

# ══════════════════════════════════════════════════════════════════════════
# 15. useSmoothScroll — Disable Lenis on mobile
# ══════════════════════════════════════════════════════════════════════════
cat > hooks/useSmoothScroll.js << 'EOF'
import { useEffect } from "react";
export default function useSmoothScroll() {
  useEffect(() => {
    // Disable smooth scrolling library on mobile — native is better
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis;
    const init = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
        const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      } catch (e) {}
    };
    init();
    return () => { if (lenis) lenis.destroy(); };
  }, []);
}
EOF

echo ""
echo " ┌─────────────────────────────────────────────────────────────────┐"
echo " │                                                                 │"
echo " │  📱 MOBILE OPTIMIZATION COMPLETE                                │"
echo " │                                                                 │"
echo " │  iOS FIXES:                                                     │"
echo " │   ✓ 100dvh for hero (fixes Safari bottom bar)                  │"
echo " │   ✓ Safe area insets (notch/Dynamic Island)                     │"
echo " │   ✓ -webkit-tap-highlight-color: transparent                    │"
echo " │   ✓ -webkit-text-size-adjust: 100%                             │"
echo " │   ✓ Input font-size 16px (prevents auto-zoom)                  │"
echo " │   ✓ apple-mobile-web-app-capable meta tag                      │"
echo " │   ✓ apple-mobile-web-app-status-bar-style                      │"
echo " │   ✓ apple-touch-icon link                                      │"
echo " │   ✓ html bg color matches body (rubber-band fix)               │"
echo " │   ✓ overscroll-behavior-y: none                                │"
echo " │   ✓ -webkit-overflow-scrolling: touch                          │"
echo " │                                                                 │"
echo " │  ANDROID FIXES:                                                 │"
echo " │   ✓ theme-color meta tag                                       │"
echo " │   ✓ PWA manifest.json with icons                               │"
echo " │   ✓ format-detection: telephone=no                             │"
echo " │   ✓ Android font rendering fix                                  │"
echo " │   ✓ viewport-fit=cover, maximum-scale=5                        │"
echo " │                                                                 │"
echo " │  PERFORMANCE ON MOBILE:                                         │"
echo " │   ✓ Particles.js disabled on mobile                            │"
echo " │   ✓ backdrop-filter disabled on mobile (solid bg)              │"
echo " │   ✓ Noise overlay disabled on mobile                           │"
echo " │   ✓ Mesh animation disabled on mobile                          │"
echo " │   ✓ Float animations disabled on mobile                        │"
echo " │   ✓ Blur reveals disabled on mobile (opacity only)             │"
echo " │   ✓ Left/right reveals → fadeUp on mobile                      │"
echo " │   ✓ Lenis smooth scroll disabled on mobile                     │"
echo " │   ✓ Hover effects only on hover-capable devices                │"
echo " │   ✓ MorphBlobs smaller on mobile                               │"
echo " │   ✓ Orbs smaller & less intense on mobile                      │"
echo " │                                                                 │"
echo " │  LAYOUT ON MOBILE:                                              │"
echo " │   ✓ All grids → single column on mobile                        │"
echo " │   ✓ Buttons full-width on mobile (48px min height)             │"
echo " │   ✓ 44px minimum tap targets                                   │"
echo " │   ✓ Hero code editor hidden on mobile                          │"
echo " │   ✓ Section padding reduced on mobile                          │"
echo " │   ✓ Font sizes responsive with clamp()                         │"
echo " │   ✓ Small phone (375px) specific sizes                         │"
echo " │   ✓ Tablet-specific heading sizes                              │"
echo " │   ✓ Scroll indicator hidden on mobile                          │"
echo " │   ✓ Page progress dots hidden on mobile                        │"
echo " │   ✓ Sticky CTA bar at bottom on mobile only                    │"
echo " │   ✓ Navbar hamburger bigger (44px)                             │"
echo " │   ✓ Mobile menu full-screen with safe areas                    │"
echo " │   ✓ WhatsApp button respects safe area                         │"
echo " │   ✓ BackToTop respects safe area                               │"
echo " │   ✓ SocialProof respects safe area                             │"
echo " │   ✓ Active states (scale) instead of hover on mobile           │"
echo " │                                                                 │"
echo " │  Run: npm run dev                                               │"
echo " │  Test: Open on your phone or use Chrome DevTools                │"
echo " │                                                                 │"
echo " └─────────────────────────────────────────────────────────────────┘"
echo ""