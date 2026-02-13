import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { icon: "🎨", text: "Fully custom design — no templates" },
  { icon: "📱", text: "Mobile responsive on all devices" },
  { icon: "⚡", text: "Blazing fast load speed" },
  { icon: "🔍", text: "Basic SEO setup included" },
  { icon: "💬", text: "WhatsApp / Contact form built-in" },
  { icon: "🔄", text: "1 free revision round" },
];

const ease = [0.16, 1, 0.3, 1];

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (typeof window !== "undefined" && sessionStorage.getItem("offer-dismissed")) return;

    const timer = setTimeout(() => setShow(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setShow(false);
    setDismissed(true);
    if (typeof window !== "undefined") sessionStorage.setItem("offer-dismissed", "1");
  };

  const waLink =
    "https://wa.me/923054573962?text=" +
    encodeURIComponent(
      "Hi Abdullah! I saw the demo site offer for PKR 3,999. I'd love to get my website built! 🚀"
    );

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/[0.08]"
              style={{
                background: "linear-gradient(135deg, rgba(12,16,28,0.97), rgba(18,14,32,0.97), rgba(12,16,28,0.97))",
                backdropFilter: "blur(40px) saturate(150%)",
                WebkitBackdropFilter: "blur(40px) saturate(150%)",
              }}
            >
              {/* Animated gradient border glow */}
              <div className="absolute inset-0 rounded-3xl gradient-border-glow" />

              {/* Background orbs inside popup */}
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/5 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/5 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/5 to-teal-500/3 blur-3xl" />

              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06] text-white/30 hover:text-white/60 hover:bg-white/[0.08] transition-all duration-300 active:scale-90"
                aria-label="Close"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                {/* Top badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease }}
                  className="flex justify-center mb-5"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/15 bg-amber-400/[0.04]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                    </span>
                    <span className="text-[11px] font-semibold text-amber-300/80 tracking-wider uppercase">Limited Time Offer</span>
                  </div>
                </motion.div>

                {/* Timer emoji + rocket */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center mb-4"
                >
                  <span className="text-5xl block mb-2 animate-icon-bounce">🚀</span>
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6, ease }}
                  className="text-center mb-2"
                >
                  <h2 className="font-display font-black text-2xl md:text-3xl text-white leading-tight">
                    Get Your Demo Website
                    <br />
                    <span className="accent-text">In Just 24 Hours</span>
                  </h2>
                </motion.div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5, ease }}
                  className="text-center mb-6"
                >
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-white/30 line-through text-sm font-mono">PKR 10,000</span>
                    <span className="font-display font-black text-3xl md:text-4xl text-white">
                      PKR <span className="gradient-label">3,999</span>
                    </span>
                  </div>
                  <p className="text-[12px] text-emerald-400/60 font-medium mt-2">
                    ✨ You save PKR 6,001 — That&rsquo;s 60% off!
                  </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="grid grid-cols-2 gap-2.5 mb-6"
                >
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.06, duration: 0.4, ease }}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] group hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-300"
                    >
                      <span className="text-sm flex-shrink-0">{f.icon}</span>
                      <span className="text-[11px] text-white/50 leading-tight group-hover:text-white/65 transition-colors">{f.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* What you get summary */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="text-center mb-6"
                >
                  <p className="text-[13px] text-white/40 leading-relaxed max-w-sm mx-auto">
                    A complete, professional demo website built from scratch — ready in <span className="text-white/70 font-semibold">24 hours</span>. See how your business looks online before committing to a full project.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5, ease }}
                  className="space-y-3"
                >
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-main w-full text-[15px] py-4 rounded-2xl font-bold justify-center gap-3 animate-pulse-glow"
                  >
                    <span className="relative z-10 flex items-center gap-2.5">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Claim This Offer on WhatsApp
                    </span>
                  </a>

                  <button
                    onClick={close}
                    className="w-full text-[12px] text-white/25 hover:text-white/40 transition-colors py-2 font-medium"
                  >
                    Maybe later — I&rsquo;ll keep browsing
                  </button>
                </motion.div>

                {/* Trust bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-white/[0.04]"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="stars">
                      <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                    </div>
                    <span className="text-[10px] text-white/25">5.0</span>
                  </div>
                  <span className="text-white/10">•</span>
                  <span className="text-[10px] text-white/25">47+ projects delivered</span>
                  <span className="text-white/10">•</span>
                  <span className="text-[10px] text-white/25">100% satisfaction</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
