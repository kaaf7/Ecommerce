import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: "50vh",
    marginBottom: "10vh",
  })}
`;
const Wrapper = styled.div`
  height: 100%;
  gap: 25px;
  display: flex;
  justify-content: space-evenly;
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3005/api/products/allproducts"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Highlights;
