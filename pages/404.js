import Head from "next/head";
import { motion } from "framer-motion";
export default function NotFound() {
  return (
    <>
      <Head><title>404 — Abdullah Haider</title></Head>
      <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-8xl md:text-9xl font-display font-black accent-text mb-4">404</h1>
          <p className="text-xl text-white/50 mb-2">This page doesn&rsquo;t exist.</p>
          <p className="text-sm text-white/25 mb-8">But your next website could. Let me build it.</p>
          <a href="/" className="btn-main text-sm py-3 px-8 rounded-lg inline-flex">Back to Home &rarr;</a>
        </motion.div>
      </div>
    </>
  );
}
