import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled.nav`
  width: 91.9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4vw;
  background: #fff;
  box-shadow: 0 1px 10px #f2e6d3;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 2vw;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #292929;
  letter-spacing: -1px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MenuItem = styled.li`
  font-size: 1.05rem;
  cursor: pointer;
  &:hover {
    color: #ae8b49;
    transition: color 0.3s;
  }
`;

export default function Navbar() {
  return (
    <Nav as={motion.div} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Logo>Furniture Shop </Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Collections</MenuItem>
        <MenuItem>Design Series</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Nav>
  );
}
