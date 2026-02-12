import { useState } from "react";
const details = {
  "React / Next.js": "3+ years building production React apps. Next.js is my primary framework for every project.",
  "Tailwind CSS": "My go-to styling solution. Utility-first CSS that ships fast and looks pixel-perfect.",
  "JavaScript": "Deep understanding of modern JS, async patterns, DOM manipulation, and browser APIs.",
  "TypeScript": "Type-safe code for larger projects. Catches bugs before they reach production.",
  "Node.js": "Backend APIs, server-side rendering, build tools, and automation scripts.",
  "UI/UX Design": "I design everything I build. Figma prototypes to production, end to end.",
  "Figma": "High-fidelity mockups, component systems, and interactive prototypes.",
  "SEO": "Technical SEO, structured data, Core Web Vitals optimization, and content strategy.",
  "Responsive Design": "Every pixel is tested on real devices. Mobile-first approach, always.",
  "Web Performance": "Sub-second load times. Image optimization, code splitting, lazy loading.",
  "Git": "Version control for every project. Clean commit history and branching strategy.",
  "Framer Motion": "Smooth, performant animations that enhance UX without sacrificing speed.",
};
export default function SkillPopover({ name }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="tag cursor-none relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {name}
      {show && details[name] && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-xl bg-bg-elevated border border-white/[0.06] text-[11px] text-white/50 leading-relaxed shadow-xl z-50 pointer-events-none">
          {details[name]}
        </span>
      )}
    </span>
  );
}
