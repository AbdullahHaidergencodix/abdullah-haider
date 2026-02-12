import { motion } from "framer-motion";
export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] text-white/20 font-mono">Scroll</span>
      <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-1.5 rounded-full bg-accent-400/40"
        />
      </div>
    </motion.div>
  );
}
