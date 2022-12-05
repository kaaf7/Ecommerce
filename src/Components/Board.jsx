/* * 👇 This is Board display it will display random products Component  
created and styled with Styled Component it will display 
3 random product photos and a fashion quote	
cretaed and styled with Styled Component 
*/

// import react
import React from "react";

// import Styled Components
import styled from "styled-components";

// import useState Hook from React
import { useState, useEffect } from "react";

// import Navigate to redirect to pages
import { useNavigate } from "react-router-dom";

//import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import public axios request from services
import { publicRequest } from "../services";

// Array of random quotes
const Quotes = [
  "YOU CAN HAVE ANYTHING YOU WANT IN LIFE IF YOU DRESS FOR IT",
  "The joy of dressing is an art ",
  "When in doubt, wear red.",
  "We must never confuse elegance with snobbery.",
  "Fashion is like eating, you shouldn't stick to the same menu.",
  "Elegance is good taste, plus a dash of daring",
];

// Components Container
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border-bottom: 1px solid lightgray;
  //border-top: 1px solid lightgray;
`;

// All Components Container
const Wrapper = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Lexend";
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
  transition: 0.1s ease-out;
  z-index: 0;
  cursor: pointer;
  &:hover {
    filter: none;
    opacity: 0.9;
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
  color: #8e2008;
  z-index: 1;
  ${mobile({
    fontSize: "20px",
    position: "absolute",
  })}
`;

const Board = () => {
  // useNavigate to navigate pages
  const navigate = useNavigate();

  // OpenProduct function that uses navigate to open products depends on product id
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  /* * UseEffect Hook to to fetch Products from API using axios's public request 
  without any dependencies */
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/allproducts");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* *using sort, slice, and map method to generate 
        random single quotes from Quotes Array*/}
        {Quotes.sort(() => 0.5 - Math.random())
          .slice(0, 1)
          .map((quote) => (
            <Quote key={quote}>{quote.toUpperCase()}</Quote>
          ))}
        {/* *using map, slice, and map to generate randomm 3 products images from 
        poroducts array, when clicked navigates to the specific product displayed*/}
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
