import React from "react";
import styled from "styled-components";
import ProductCard from "./Shared/ProductCard";

const Wrapper = styled.section`
  padding: 5vw 5vw 6vw 5vw;
  background: #faf8f4;
`;

const Heading = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 2vw;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.3vw;
  }
`;

export default function DesignSeries() {
  return (
    <Wrapper>
      <Heading>Design Series</Heading>
      <Grid>
        <ProductCard title="Drawer" price="$695.00" imgSrc={require("../assets/images/furniture5.jpg")} />
        <ProductCard title="Wooden Pod" price="$450.00" imgSrc={require("../assets/images/furniture6.jpg")} />
        <ProductCard title="Mini Ottoman" price="$540.00" imgSrc={require("../assets/images/furniture1.jpg")} />
      </Grid>
    </Wrapper>
  );
}
