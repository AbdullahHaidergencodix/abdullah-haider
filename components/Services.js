import SpotlightCard from "./SpotlightCard";
import GradientLabel from "./GradientLabel";

const services = [
  { icon: "🎨", title: "Web Design", desc: "Custom designs that make visitors stop scrolling. Every pixel placed with purpose. No templates, no shortcuts.", glow: "glass-blue" },
  { icon: "⚡", title: "Web Development", desc: "Clean, fast, production-ready code. Built with modern frameworks and optimized for performance from day one.", glow: "glass-purple" },
  { icon: "📱", title: "Responsive Design", desc: "Your site will look incredible on every device — desktop, tablet, and phone. Tested on real devices.", glow: "glass-pink" },
  { icon: "🚀", title: "Landing Pages", desc: "High-converting landing pages designed to turn visitors into paying customers. Copy, design, and code.", glow: "glass-emerald" },
  { icon: "🔍", title: "SEO Optimization", desc: "Technical SEO baked into every build. Fast load times, clean markup, and structured data.", glow: "glass-blue" },
  { icon: "🛠️", title: "Maintenance", desc: "Monthly plans to keep your site updated, secure, and performing at its best. You focus on business.", glow: "glass-purple" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-purple w-[400px] h-[400px] -right-[100px] top-[20%]" />
      <div className="orb orb-blue w-[300px] h-[300px] -left-[80px] bottom-[10%]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <GradientLabel>Services</GradientLabel>
          <h2 className="text-section-title font-display text-white mb-5">What I Can Build <span className="accent-text">For You</span></h2>
          <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">Everything you need to look professional online and start getting more customers.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className={"reveal " + (i < 3 ? "rd" + (i + 1) : "rd" + (i - 2))}>
              <SpotlightCard className={"glass " + s.glow + " rounded-2xl p-7 h-full card-animate group"}>
                <span className="text-3xl block mb-5 card-icon animate-icon-bounce" style={{ animationDelay: i * 0.3 + "s" }}>{s.icon}</span>
                <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-accent-300 transition-colors duration-500">{s.title}</h3>
                <p className="text-[13px] text-white/45 leading-[1.8] group-hover:text-white/60 transition-colors duration-500">{s.desc}</p>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
