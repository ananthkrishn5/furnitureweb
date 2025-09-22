import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 5vw 0 5vw 0;
  background: #f8f7f2;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

const OptionRow = styled.div`
  background: #fff;
  width: 320px;
  padding: 1rem 1.2rem;
  border-radius: 13px;
  box-shadow: 0 4px 16px #e7e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #f8e3bb;
    transform: scale(1.03);
    transition: all 0.3s;
  }

  @media (max-width: 600px) {
    width: 95vw;
    font-size: 1rem;
  }
`;

export default function CuratedSection() {
  return (
    <Section as={motion.section} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
      <Title>Curated By Furniture Shop </Title>
      <OptionWrapper>
        <OptionRow>Living Room <span>→</span></OptionRow>
        <OptionRow>Residence <span>→</span></OptionRow>
        <OptionRow>Office Space <span>→</span></OptionRow>
      </OptionWrapper>
    </Section>
  );
}
