import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import hero image from assets

const Hero = styled.section`
  display: flex;
  padding: 5vw 10vw;
  align-items: center;
  justify-content: space-between;
  background: #fffef9;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 3vw 3vw;
  }
`;
// ... More styled components

const TextBlock = styled.div`
  flex: 1;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  h2 {
    font-size: 1.2rem;
    color: #767676;
  }
`;

export default function HeroSection() {
  return (
    <Hero as={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <TextBlock>
        <h1>Furniture Shop </h1>
        <h2>Honoring Dedication With Enduring Comfort</h2>
        <p>Bedroom explore different bed styles, mattresses, dressers, and nightstands...</p>
        <button>Shop Now</button>
      </TextBlock>
      <motion.img
        src={require("../assets/images/hero.jpg")}
        alt="Hero"
        style={{ width: '450px', borderRadius: "16px", boxShadow: "0 0 24px #eee" }}
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
    </Hero>
  );
}
