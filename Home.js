
import React from "react";
import HeroSection from "../components/HeroSection";
import CollectionSection from "../components/CollectionSection";
import CuratedSection from "../components/CuratedSection";
import BestSellers from "../components/BestSellers";
import DesignSeries from "../components/DesignSeries";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <HeroSection />
      <CollectionSection />
      <CuratedSection />
      <BestSellers />
      <DesignSeries />
    </motion.div>
  );
}
