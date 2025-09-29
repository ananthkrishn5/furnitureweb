import React from "react";
import styled from "styled-components";
import ProductCard from "./Shared/ProductCard";

const Wrapper = styled.section`
  padding: 3vw 5vw 5vw 5vw;
  background: #fffef9;

  @media (max-width: 900px) {
    padding: 2vw 3vw;
  }
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2vw;
  font-weight: 700;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.7rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1vw;
  }
`;

export default function BestSellers() {
  return (
    <Wrapper>
      <Heading>Meet Our Best Sellers</Heading>
      <Grid>
        <ProductCard title="Chair" price="$790.00" imgSrc={require("../assets/images/furniture1.jpg")} />
        <ProductCard title="Sofa" price="$1200.00" imgSrc={require("../assets/images/furniture2.jpg")} />
        <ProductCard title="Decor Pods" price="$980.00" imgSrc={require("../assets/images/furniture3.jpg")} />
        <ProductCard title="Swing Chair" price="$1100.00" imgSrc={require("../assets/images/furniture4.jpg")} />
      </Grid>
    </Wrapper>
  );
}
