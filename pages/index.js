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
import OfferPopup from "../components/OfferPopup";

const LiveBackground = dynamic(() => import("../components/LiveBackground"), { ssr: false });
const FloatingEmojis = dynamic(() => import("../components/FloatingEmojis"), { ssr: false });
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), { ssr: false });
const CommandPalette = dynamic(() => import("../components/CommandPalette"), { ssr: false });
const KeyboardHints = dynamic(() => import("../components/KeyboardHints"), { ssr: false });
const DynamicTitle = dynamic(() => import("../components/DynamicTitle"), { ssr: false });
const IdlePrompt = dynamic(() => import("../components/IdlePrompt"), { ssr: false });
const StickyCTA = dynamic(() => import("../components/StickyCTA"), { ssr: false });
const PageProgress = dynamic(() => import("../components/PageProgress"), { ssr: false });
const ScrollIndicator = dynamic(() => import("../components/ScrollIndicator"), { ssr: false });

export default function Home() {
  useReveal();
  useSmoothScroll();

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person",
    name: "Abdullah Haider", email: "Aboodiprofessional@gmail.com", telephone: "+923054573962",
    url: "https://www.gencodix.com", jobTitle: "Co-Founder & CEO",
    worksFor: { "@type": "Organization", name: "Gencodix", url: "https://www.gencodix.com" },
  };

  return (
    <>
      <Head>
        <title>Abdullah Haider — Web Designer & Developer | Gencodix</title>
        <meta name="description" content="I am Abdullah Haider, Co-Founder of Gencodix. I design and build stunning websites in 72 hours." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="theme-color" content="#050510" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Abdullah Haider — Web Designer & Developer" />
        <meta property="og:description" content="Websites delivered in 72 hours." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Preloader />
      <LiveBackground />
      <FloatingEmojis />
      <OfferPopup />
      <NetworkStatus />
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />
      <FloatingWhatsApp />
      <SocialProof />
      <EasterEgg />
      <CommandPalette />
      <KeyboardHints />
      <DynamicTitle />
      <IdlePrompt />
      <StickyCTA />
      <GrainOverlay />
      <ToastProvider />
      <PageProgress />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="noise page-enter relative z-[1]">
        <Navbar />
        <div className="relative"><Hero /><ScrollIndicator /></div>
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
