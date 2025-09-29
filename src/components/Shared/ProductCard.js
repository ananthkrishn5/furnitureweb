import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 32px #e7e7e7;
  padding: 1rem;
  width: 250px;
  transition: transform 0.25s;
  &:hover { transform: translateY(-5px) scale(1.03);}
`;

export default function ProductCard({ title, price, imgSrc }) {
  return (
    <Card whileHover={{ scale: 1.05 }}>
      <img src={imgSrc} alt={title} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{title}</h3>
      <p style={{ color: "#ae8b49", fontWeight: "600" }}>{price}</p>
    </Card>
  );
}
