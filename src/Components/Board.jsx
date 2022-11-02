import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


const dummyQuotes = [
  "YOU CAN HAVE ANYTHING YOU WANT IN LIFE IF YOU DRESS FOR IT",
  "The joy of dressing is an art ",
  "When in doubt, wear red.",
  "I make clothes. Women make fashion.",
  "We must never confuse elegance with snobbery.",
];

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;
const Wrapper = styled.div`
  display: flex;
  height: 90%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  ${mobile({
    height: "100vh",
  })}
`;
const Image = styled.img`
  flex: 1;
  height: 90%;
  object-fit: cover;
  filter: grayscale(1);
  transition: 0.1s ease-out;
  z-index: 0;
  opacity: 0.9;
  border: 0.1px solid lightgrey;
  cursor: pointer;
  &:hover {
    opacity: 1;
    filter: none;
    transition: 0.1s ease-in;
  }
  ${mobile({
    width: "90vw",
  })}
`;
const Quote = styled.p`
  position: absolute;
  margin-top: 0%;
  margin-left: 0%;
  font-size: 30px;
  color: #e13913;
  font-weight: 600;
  z-index: 1;
  ${mobile({
    fontSize: "20px",
    position: "absolute",
  })}
`;

const Board = () => {
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



    const navigate = useNavigate();
    const openProduct = (productId) => {
      navigate(`/products/${productId}`);
    };
  
  return (
    <Container>
      <Wrapper>
        <Quote>
          {dummyQuotes
            .sort(() => 0.5 - Math.random())
            .slice(0, 1)
            .map((quote) => quote.toUpperCase())}
        </Quote>
        {products
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((product) => (
            <Image onClick={() => openProduct(product._id)} src={product.images[1]}></Image>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Board;
