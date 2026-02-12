import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative glass rounded-2xl p-0 max-w-2xl w-full border border-white/[0.08] overflow-hidden max-h-[90vh] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/40 hover:text-white cursor-none transition-colors">✕</button>

          {/* Image */}
          <div className={"relative h-48 md:h-64 overflow-hidden"}>
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
            ) : (
              <div className={"h-full bg-gradient-to-br flex items-center justify-center " + project.color}>
                <span className="font-display text-4xl font-bold text-white/10">{project.title.split(" ")[0]}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/50 to-transparent" />
          </div>

          <div className="p-8 -mt-12 relative z-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-mono text-accent-400/40 tracking-wider uppercase block mb-2">{project.type}</span>
                <h3 className="font-display font-bold text-white text-2xl">{project.title}</h3>
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-main text-[11px] py-2 px-4 rounded-lg flex-shrink-0 cursor-none">
                  Visit Live ↗
                </a>
              )}
            </div>

            <p className="text-[14px] text-white/40 leading-[1.8] mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-accent-400/50 font-mono">{project.tag}</span>
              </div>
              <span className="text-white/10">|</span>
              <span className="text-[10px] text-white/25 font-mono">Delivered in {project.days} days</span>
              {project.url && (
                <>
                  <span className="text-white/10">|</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-accent-400/50 hover:text-accent-400 font-mono animated-underline cursor-none">{project.url.replace("https://","")}</a>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
