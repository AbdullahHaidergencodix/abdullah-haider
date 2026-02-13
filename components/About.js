import SpotlightCard from "./SpotlightCard";
import TechOrbit from "./TechOrbit";
import SkillPopover from "./SkillPopover";
import ExperienceTimeline from "./Timeline";
import AvailabilityCalendar from "./AvailabilityCalendar";

export default function About() {
  const skills = ["React / Next.js","Tailwind CSS","JavaScript","TypeScript","Node.js","UI/UX Design","Figma","SEO","Responsive Design","Web Performance","Git","Framer Motion"];
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <span className="text-[11px] font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">About Me</span>
            <h2 className="text-section-title font-display text-white mb-6">I Turn Ideas Into Websites<br /><span className="accent-text animate-text-glow">That Actually Work.</span></h2>
            <div className="space-y-5 text-white/50 text-[15px] leading-[1.85] font-light">
              <p>I&rsquo;m Abdullah Haider. I started building websites because I was tired of seeing businesses with great products stuck behind a terrible online presence.</p>
              <p>So I started <a href="https://www.gencodix.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors animated-underline font-medium">Gencodix</a> with a simple mission: build websites that are fast, beautiful, and actually bring in business.</p>
              <p>I personally handle every project because I believe in quality over quantity. When you work with me, you get my full attention from start to finish.</p>
            </div>
            <div className="mt-8"><AvailabilityCalendar /></div>
          </div>
          <div className="reveal-right">
            <span className="text-[11px] font-mono text-accent-400 tracking-[0.3em] uppercase block mb-6">My Toolkit</span>
            <div className="flex flex-wrap gap-2.5 mb-10 stagger-children">
              {skills.map((s) => <SkillPopover key={s} name={s} />)}
            </div>
            <SpotlightCard className="glass rounded-xl p-6 space-y-5 hover-lift">
              {[{name:"Web Design & Development",pct:95},{name:"UI/UX Design",pct:90},{name:"SEO & Performance",pct:88},{name:"Communication & Delivery",pct:100}].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[13px] text-white/60 font-medium">{s.name}</span>
                    <span className="text-[12px] text-accent-400/80 font-mono">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-600 to-accent-400 rounded-full reveal" style={{ width: s.pct + "%", transition: "width 1.5s cubic-bezier(0.16,1,0.3,1) 0.3s" }} />
                  </div>
                </div>
              ))}
            </SpotlightCard>
            <TechOrbit />
          </div>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
