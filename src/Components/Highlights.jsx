/* 👇 This is Highlight section, 
it is created and styled with Styled 
Components will showcase products in HomePage 
*/

import React from "react";

import { useState, useEffect } from "react";

import styled from "styled-components";

// import product Card that will contain all products info and image
import ProductCard from "./ProductCard";

// import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import request axios request services
import { publicRequest } from "../services";

// all Components Container
const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: "50vh",
    marginBottom: "10vh",
  })}
`;

// Components Wrapper
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  ${mobile({
    marginLeft: "1vw",
    marginRight: "1vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  })}
`;

const Highlights = () => {
  // UseState to set products and display them  in the highlight section
  const [products, setProducts] = useState([]);
  // useEffect to get products from backend using axios through getProducts function
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          "/products/allproducts"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Highlights;
