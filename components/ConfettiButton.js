import confetti from "canvas-confetti";
export function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#3b8eff", "#59b0ff", "#1e6bf5", "#ffffff", "#bce0ff"],
    disableForReducedMotion: true,
  });
}
