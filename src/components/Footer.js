import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 3vw 2vw;
  background: #fffcd2;
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  font-size: 1rem;

  @media (max-width: 900px) {
    font-size: 0.85rem;
    padding: 2vw 1vw;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3vw;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5vw;
    align-items: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Logo = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.8rem;
  color: #ae8b49;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  border-top: 1px solid #efe9de;
  padding-top: 1vw;
  margin-top: 2vw;
  color: #767676;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <TopRow>
        <Logo>Furniture Shop </Logo>
        <Column>
          <strong>Our Company</strong>
          <span>About Belo Fur</span>
          <span>Sustainability</span>
          <span>Blogs</span>
        </Column>
        <Column>
          <strong>Product</strong>
          <span>Chairs</span>
          <span>Tables</span>
          <span>Beds</span>
          <span>Sofas</span>
          <span>Desks</span>
        </Column>
        <Column>
          <strong>Help</strong>
          <span>Customer Service</span>
          <span>Track Order</span>
          <span>Returns & Refunds</span>
          <span>Shipping Information</span>
          <span>Warranty</span>
          <span>Career</span>
        </Column>
        <Column>
          <strong>Contact Us</strong>
          <span>hello@Furniture Shop .com</span>
          <span>877-308-9873 (TOLL FREE)</span>
          <span>7511 Elgin St. Green Dst</span>
        </Column>
      </TopRow>
      <BottomRow>
        <span>© Furniture Shop  2025 All rights reserved</span>
        <span>Privacy | Terms and Conditions.</span>
      </BottomRow>
    </FooterWrapper>
  );
}
