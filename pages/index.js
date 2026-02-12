import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SocialProof from "../components/SocialProof";
import EasterEgg from "../components/EasterEgg";
import AnimatedDivider from "../components/AnimatedDivider";
import ClientMarquee from "../components/ClientMarquee";
import RandomQuote from "../components/RandomQuote";
import CTABanner from "../components/CTABanner";
import FunFacts from "../components/FunFacts";
import Guarantee from "../components/Guarantee";
import ComparisonTable from "../components/ComparisonTable";
import GrainOverlay from "../components/GrainOverlay";
import InteractiveProcess from "../components/InteractiveProcess";
import ToastProvider from "../components/Toast";
import TrustBadges from "../components/TrustBadges";
import WhyMe from "../components/WhyMe";
import NetworkStatus from "../components/NetworkStatus";
import MorphBlob from "../components/MorphBlob";

const Cursor = dynamic(() => import("../components/Cursor"), { ssr: false });
const CursorTrail = dynamic(() => import("../components/CursorTrail"), { ssr: false });
const CursorText = dynamic(() => import("../components/CursorText"), { ssr: false });
const MouseGlow = dynamic(() => import("../components/MouseGlow"), { ssr: false });
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), { ssr: false });
const CommandPalette = dynamic(() => import("../components/CommandPalette"), { ssr: false });
const TrailColorPicker = dynamic(() => import("../components/TrailColorPicker"), { ssr: false });
const KeyboardHints = dynamic(() => import("../components/KeyboardHints"), { ssr: false });
const DynamicTitle = dynamic(() => import("../components/DynamicTitle"), { ssr: false });
const ScrollSpeedIndicator = dynamic(() => import("../components/ScrollSpeedIndicator"), { ssr: false });
const IdlePrompt = dynamic(() => import("../components/IdlePrompt"), { ssr: false });
const StickyCTA = dynamic(() => import("../components/StickyCTA"), { ssr: false });
const PageProgress = dynamic(() => import("../components/PageProgress"), { ssr: false });
const ScrollIndicator = dynamic(() => import("../components/ScrollIndicator"), { ssr: false });

export default function Home() {
  useReveal();
  useSmoothScroll();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Haider",
    url: "https://www.gencodix.com",
    jobTitle: "Co-Founder & CEO",
    worksFor: { "@type": "Organization", name: "Gencodix", url: "https://www.gencodix.com" },
    knowsAbout: ["Web Design", "Web Development", "UI/UX Design", "Landing Pages", "SEO"],
    description: "I design and build stunning websites and landing pages in 72 hours.",
    sameAs: [],
  };

  return (
    <>
      <Head>
        <title>Abdullah Haider — Web Designer & Developer | Co-Founder, Gencodix</title>
        <meta name="description" content="I am Abdullah Haider, Co-Founder and CEO of Gencodix. I design and build stunning websites and landing pages in 72 hours. Fast, affordable, and built to convert." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Abdullah Haider — Web Designer & Developer" />
        <meta property="og:description" content="Websites and landing pages delivered in 72 hours. Designed to impress. Built to convert." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abdullah Haider" />
        <link rel="canonical" href="https://abdullahhaider.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Preloader />
      <NetworkStatus />
      <ScrollProgress />
      <Cursor />
      <CursorTrail />
      <CursorText />
      <MouseGlow />
      <ThemeToggle />
      <TrailColorPicker />
      <BackToTop />
      <FloatingWhatsApp />
      <SocialProof />
      <EasterEgg />
      <CommandPalette />
      <KeyboardHints />
      <DynamicTitle />
      <ScrollSpeedIndicator />
      <IdlePrompt />
      <StickyCTA />
      <GrainOverlay />
      <ToastProvider />
      <PageProgress />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="noise page-enter relative"
      >
        <MorphBlob className="w-[800px] h-[800px] top-[20%] -left-[200px]" />
        <MorphBlob className="w-[600px] h-[600px] top-[60%] -right-[150px]" />

        <Navbar />
        <div className="relative">
          <Hero />
          <ScrollIndicator />
        </div>
        <Marquee />
        <Stats />
        <FunFacts />
        <AnimatedDivider />
        <About />
        <Services />
        <WhyMe />
        <AnimatedDivider />
        <Work />
        <ClientMarquee />
        <Pricing />
        <Guarantee />
        <ComparisonTable />
        <TrustBadges />
        <Testimonials />
        <RandomQuote />
        <InteractiveProcess />
        <AnimatedDivider />
        <CTABanner />
        <FAQ />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
