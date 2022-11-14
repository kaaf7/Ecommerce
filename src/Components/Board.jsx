/* 👇 This is Board display Component  
created and styled with Styled Component it will display 
3 random product photos and a fashion quote	
cretaed and styled with Styled Component 
*/

import React from "react";

import styled from "styled-components";

import { useState, useEffect } from "react";

// import Navigate to redirect to pages
import { useNavigate } from "react-router-dom";

//import responsive Settings from responsive.js
import { mobile } from "../responsive";

//import Axios Library to get data
import axios from "axios";

// Array of random quotes
const dummyQuotes = [
  "YOU CAN HAVE ANYTHING YOU WANT IN LIFE IF YOU DRESS FOR IT",
  "The joy of dressing is an art ",
  "When in doubt, wear red.",
  "I make clothes. Women make fashion.",
  "We must never confuse elegance with snobbery.",
];

// Components Container
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;

// Components Wrapper
const Wrapper = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 150px;
  margin-right: 150px;
  ${mobile({
    height: "100vh",
  })}
`;

// Image Component to display product images
const Image = styled.img`
  height: 90%;
  flex: 1;
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

// Quote Component to display random quotes
const Quote = styled.p`
  margin-top: 0%;
  margin-left: 0%;
  position: absolute;
  font-size: 40px;
  font-weight: 600;
  color: #e13913;
  z-index: 1;
  ${mobile({
    fontSize: "20px",
    position: "absolute",
  })}
`;

const Board = () => {
  /*useNavigate to switch pages*/
  const navigate = useNavigate();

  /*OpenProduct function to open any of the products displayd based on productId*/
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  /*useState to get random products from the database 
    and display only 3 random products each tme*/
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3005/api/products/allproducts"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        {dummyQuotes
          .sort(() => 0.5 - Math.random())
          .slice(0, 1)
          .map((quote) => (
            <Quote key={quote}>{quote.toUpperCase()}</Quote>
          ))}
        {products
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((product) => (
            <Image
              key={product._id}
              onClick={() => openProduct(product._id)}
              src={product.images[1]}
            ></Image>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Board;
