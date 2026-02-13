import SpotlightCard from "./SpotlightCard";
import TechOrbit from "./TechOrbit";
import SkillPopover from "./SkillPopover";
import ExperienceTimeline from "./Timeline";
import AvailabilityCalendar from "./AvailabilityCalendar";
import GradientLabel from "./GradientLabel";

export default function About() {
  const skills = ["React / Next.js","Tailwind CSS","JavaScript","TypeScript","Node.js","UI/UX Design","Figma","SEO","Responsive Design","Web Performance","Git","Framer Motion"];
  return (
    <section id="about" className="py-24 md:py-36 relative">
      <div className="orb orb-cyan w-[400px] h-[400px] top-[10%] -right-[100px]" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <GradientLabel>About Me</GradientLabel>
            <h2 className="text-section-title font-display text-white mb-6">I Turn Ideas Into Websites<br /><span className="accent-text">That Actually Work.</span></h2>
            <div className="space-y-5 text-white/50 text-[15px] leading-[1.85] font-light">
              <p>I&rsquo;m Abdullah Haider. I started building websites because I was tired of seeing businesses with great products stuck behind a terrible online presence.</p>
              <p>So I started <a href="https://www.gencodix.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors animated-underline font-medium">Gencodix</a> with a simple mission: build websites that are fast, beautiful, and actually bring in business.</p>
              <p>I personally handle every project because I believe in quality over quantity. When you work with me, you get my <span className="text-emerald-400/70">full attention</span> from start to finish.</p>
            </div>
            <div className="mt-8"><AvailabilityCalendar /></div>
          </div>
          <div className="reveal-right">
            <GradientLabel>My Toolkit</GradientLabel>
            <div className="flex flex-wrap gap-2.5 mb-10 stagger-children">{skills.map((s) => <SkillPopover key={s} name={s} />)}</div>
            <SpotlightCard className="glass glass-blue rounded-xl p-6 space-y-5 hover-lift">
              {[{name:"Web Design & Dev",pct:95,color:"from-blue-500 to-cyan-400"},{name:"UI/UX Design",pct:90,color:"from-purple-500 to-pink-400"},{name:"SEO & Performance",pct:88,color:"from-emerald-500 to-teal-400"},{name:"Communication",pct:100,color:"from-amber-500 to-orange-400"}].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[13px] text-white/60 font-medium">{s.name}</span>
                    <span className="text-[12px] text-white/40 font-mono">{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className={"h-full bg-gradient-to-r " + s.color + " rounded-full reveal"} style={{ width: s.pct + "%", transition: "width 1.5s cubic-bezier(0.16,1,0.3,1) 0.3s" }} />
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
