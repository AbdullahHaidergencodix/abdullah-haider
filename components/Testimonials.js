import { useState, useEffect, useRef, useCallback } from "react";

const reviews = [
  { name: "Sarah Mitchell", role: "Founder, BrightPath Marketing", text: "I gave Abdullah a rough idea on a Monday and had a fully polished landing page by Wednesday. The design was so clean my own team thought I hired an expensive agency. Conversion rate went up 3x in the first month.", rating: 5 },
  { name: "Omar Al-Rashid", role: "CEO, Nexus Trading LLC", text: "We needed a professional website fast before a trade show. Abdullah delivered in two days and it genuinely looked better than competitors who spent tens of thousands on theirs. We closed deals directly because of that site.", rating: 5 },
  { name: "Jessica Wong", role: "Director, Elevate Fitness Studios", text: "Our old Wix site was embarrassing. Abdullah rebuilt the whole thing and now clients constantly tell us how professional we look online. New membership signups went up 40 percent the first week after launch.", rating: 5 },
  { name: "Daniel Kramer", role: "Co-Founder, ShipStack Logistics", text: "I have paid agencies five times more and gotten half the result. Abdullah actually listened to what our B2B clients needed to see. The site basically sells for us now. Our sales team sends the link and deals close faster.", rating: 5 },
  { name: "Amira Hassan", role: "Owner, Lumi\u00e8re Beauty Bar", text: "I was nervous because I am not technical at all. Abdullah made the entire process feel easy. He explained everything, never rushed me, and the website he built is gorgeous. My clients always ask who designed it.", rating: 5 },
  { name: "Ryan Patel", role: "Head of Growth, CloudSync AI", text: "We needed a SaaS landing page that could compete with well-funded startups. What Abdullah delivered in 48 hours outperformed the page we previously spent fifteen thousand dollars building. Demo signups doubled.", rating: 5 },
  { name: "Fatima Al-Zahra", role: "Managing Director, Horizon Real Estate", text: "In the Dubai real estate market your website has to be perfect. Abdullah understood that from the first conversation. The animations, the layout, the speed, everything was flawless. We have closed six-figure deals directly from it.", rating: 5 },
  { name: "Marcus Chen", role: "Founder, Grind Coffee Roasters", text: "I was paying two hundred dollars a month for a generic Shopify theme. Abdullah rebuilt our entire online presence for less than one month of that old cost. Online orders jumped 90 percent in two weeks. Best money I ever spent.", rating: 5 },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef(null);
  const isVisible = useRef(false);
  const sectionRef = useRef(null);

  /* Only auto-advance when section is visible on screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible.current) {
        setActiveIdx((prev) => (prev + 1) % reviews.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* FIX: Use container scrollLeft instead of scrollIntoView */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.offsetWidth || 350;
    const gap = 16;
    const scrollTarget = activeIdx * (cardWidth + gap);
    const containerCenter = container.offsetWidth / 2 - cardWidth / 2;
    container.scrollTo({
      left: Math.max(0, scrollTarget - containerCenter),
      behavior: "smooth",
    });
  }, [activeIdx]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-12">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">Testimonials</span>
          <h2 className="text-section-title font-display text-white mb-4">What People Say After Working With Me</h2>
          <p className="text-white/30 text-base max-w-lg mx-auto">Real feedback from real business owners.</p>
        </div>

        <div className="flex justify-center gap-1.5 mb-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={"h-1 rounded-full transition-all duration-500 cursor-none " + (i === activeIdx ? "bg-accent-500 w-12" : "bg-white/10 hover:bg-white/20 w-8")}
              aria-label={"Review " + (i + 1)}
            />
          ))}
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
          {reviews.map((r, i) => (
            <div
              key={i}
              onClick={() => setActiveIdx(i)}
              className={"flex-shrink-0 w-[300px] md:w-[350px] snap-center glass rounded-xl p-6 group transition-all duration-500 cursor-none " + (i === activeIdx ? "border-accent-600/20 scale-[1.02] bg-white/[0.03]" : "opacity-60 hover:opacity-80")}
            >
              <div className="stars mb-4">
                {Array.from({ length: r.rating }).map((_, j) => <span key={j} className="star">&#9733;</span>)}
              </div>
              <p className="text-[13px] text-white/40 leading-[1.7] mb-5 group-hover:text-white/55 transition-colors duration-500">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <span className="text-[11px] font-bold text-accent-400">{r.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-white/70">{r.name}</p>
                  <p className="text-[10px] text-white/25">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
