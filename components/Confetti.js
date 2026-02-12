import confetti from "canvas-confetti";
export function fireProjectConfetti() {
  const count = 150;
  const defaults = { origin: { y: 0.7 }, colors: ["#3b8eff", "#59b0ff", "#7c3aed", "#f43f5e", "#10b981"] };
  confetti({ ...defaults, particleCount: count * 0.25, spread: 26, startVelocity: 55 });
  confetti({ ...defaults, particleCount: count * 0.2, spread: 60 });
  confetti({ ...defaults, particleCount: count * 0.35, spread: 100, decay: 0.91, scalar: 0.8 });
}
