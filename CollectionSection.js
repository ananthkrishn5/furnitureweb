import React from "react";
import styled from "styled-components";
import NewProductCards from "./Shared/NewProductCards";

const Section = styled.section`
  padding: 4vw 10vw;
  background: #faf8f4;
`;

export default function CollectionSection() {
  // Map over your collections
  return (
    <Section>
      <h2>Exclusive Collections</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Example ProductCard usage */}
        <NewProductCards
          title="Modern Corporate Chair"
          price="$790.00"
          imgSrc={require("../assets/images/furniture7.jpg")}
        />
                <NewProductCards
          title="Modern Corporate table with compartments"
          price="$790.00"
          imgSrc={require("../assets/images/furniture8.jpg")}
        />
                <NewProductCards
          title="Modern Corporate table with-out compartments"
          price="$790.00"
          imgSrc={require("../assets/images/furniture9.jpg")}
        />
        
        {/* Add more ProductCard components */}
      </div>
    </Section>
  );
}
