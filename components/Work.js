import { useState } from "react";
import DragGallery from "./DragGallery";
import ProjectModal from "./ProjectModal";
import BeforeAfter from "./BeforeAfter";

const projects = [
  {
    title: "Lapak Skincare",
    type: "Landing Page",
    color: "from-pink-600/10 to-rose-600/5",
    tag: "Live Project",
    days: 2,
    description: "A premium skincare brand landing page designed to showcase products beautifully and drive conversions. Clean layout, smooth animations, mobile-first design, and a checkout flow that makes buying feel effortless.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://lapakskincare.vercel.app",
    image: "/projects/lapakskincare.jpg",
    featured: true,
  },
  {
    title: "SaaS Landing Page",
    type: "Landing Page",
    color: "from-accent-600/10 to-purple-600/5",
    tag: "Conversion +240%",
    days: 2,
    description: "A high-converting landing page for a SaaS startup that needed to stand out in a crowded market. Custom animations, clear value proposition, and a signup flow that reduced friction by 60%.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    url: null,
    image: null,
    featured: false,
  },
  {
    title: "Ecommerce Storefront",
    type: "Full Website",
    color: "from-emerald-600/10 to-accent-600/5",
    tag: "Revenue +180%",
    days: 3,
    description: "A complete custom ecommerce experience that replaced a generic Shopify theme. Product pages that sell, a checkout that converts, and a brand identity that commands premium pricing.",
    tech: ["React", "Stripe", "Node.js"],
    url: null,
    image: null,
    featured: false,
  },
  {
    title: "Fintech Dashboard",
    type: "Web App UI",
    color: "from-violet-600/10 to-accent-600/5",
    tag: "User Retention +95%",
    days: 3,
    description: "A complex financial dashboard redesign that made dense data feel intuitive. Real-time charts, transaction history, and portfolio views that users actually enjoy using.",
    tech: ["TypeScript", "D3.js", "Tailwind"],
    url: null,
    image: null,
    featured: false,
  },
  {
    title: "Restaurant Chain",
    type: "Landing Page",
    color: "from-orange-600/10 to-red-600/5",
    tag: "Bookings +320%",
    days: 1,
    description: "A mouth-watering landing page for a multi-location restaurant chain. Online reservation system, menu showcase, and a visual design that captures the dining experience.",
    tech: ["Next.js", "Tailwind", "Google Maps API"],
    url: null,
    image: null,
    featured: false,
  },
  {
    title: "Real Estate Platform",
    type: "Full Website",
    color: "from-accent-600/10 to-emerald-600/5",
    tag: "Leads +200%",
    days: 3,
    description: "A premium real estate platform for the Dubai market. Property listings with virtual tours, agent profiles, mortgage calculator, and a lead capture system that feeds directly into their CRM.",
    tech: ["Next.js", "Mapbox", "Prisma"],
    url: null,
    image: null,
    featured: false,
  },
];

function ProjectCard({ p, onClick }) {
  const isFeatured = p.featured;
  return (
    <div
      onClick={() => onClick(p)}
      className={"flex-shrink-0 snap-center glass rounded-xl overflow-hidden group cursor-none hover:border-accent-600/15 transition-all duration-500 " + (isFeatured ? "w-[340px] md:w-[420px] ring-1 ring-accent-500/10" : "w-[300px] md:w-[350px]")}
    >
      {/* Project preview */}
      <div className={"relative overflow-hidden " + (isFeatured ? "h-56 md:h-64" : "h-48")}>
        {p.image ? (
          <>
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
              loading="lazy"
              onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
            />
            <div className={"absolute inset-0 bg-gradient-to-br items-center justify-center " + p.color} style={{ display: "none" }}>
              <span className="font-display text-2xl font-bold text-white/10">{p.title.split(" ")[0]}</span>
            </div>
          </>
        ) : (
          <div className={"h-full bg-gradient-to-br " + p.color + " flex items-center justify-center"}>
            <span className="font-display text-2xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-500 group-hover:scale-105">{p.title.split(" ")[0]}</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
        {/* Tags */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2.5 py-1 rounded-md bg-accent-600/80 backdrop-blur-sm text-[10px] font-bold text-white hover:bg-accent-500 transition-colors cursor-none"
            >
              Visit Live ↗
            </a>
          )}
          <div className="px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-sm">
            <span className="text-[10px] font-medium text-accent-300">{p.tag}</span>
          </div>
        </div>
        {isFeatured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/20">
            <span className="text-[10px] font-bold text-emerald-400">★ FEATURED</span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/20 backdrop-blur-sm">
          <span className="text-[9px] text-white/40 font-mono">{p.days} day delivery</span>
        </div>
      </div>
      <div className="p-5">
        <span className="text-[10px] font-mono text-accent-400/40 tracking-wider uppercase block mb-2">{p.type}</span>
        <h3 className="font-display font-bold text-white/90 text-base group-hover:text-white transition-colors mb-2">{p.title}</h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tech.map((t) => <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.03] text-white/25 border border-white/[0.04]">{t}</span>)}
        </div>
        <p className="text-[11px] text-white/20">Click to view details →</p>
      </div>
    </div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-6">
          <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-4">My Work</span>
          <h2 className="text-section-title font-display text-white mb-4">Real Projects. Real Results.</h2>
          <p className="text-white/30 text-base max-w-lg mx-auto mb-2">Click a project for details. Featured projects include live links.</p>
          <p className="text-[10px] text-white/15 font-mono">← Drag to explore →</p>
        </div>

        <div className="reveal">
          <DragGallery>
            {projects.map((p, i) => (
              <ProjectCard key={i} p={p} onClick={setSelected} />
            ))}
          </DragGallery>
        </div>

        <BeforeAfter />
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
