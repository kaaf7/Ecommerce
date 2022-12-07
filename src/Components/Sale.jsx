/* *👇
 *This is Sale Component
 *cretaed and styled with Styled Component
 *It will show Sale items with Image and Information
 *it also directs user to displayed Products's page when clicked
 */

// import React
import React from "react";

// import Styled Components
import styled from "styled-components";

// import React Hooks
import { useState, useEffect } from "react";

// import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import useNavigate to redirect to pages
import { useNavigate } from "react-router-dom";

// import axios request services

import { publicRequest } from "../services";

// all items Container
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom: 0.1px solid lightgray;
  border-top: 0.1px solid lightgray;
`;

// Wrapper of components
const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  height: 80%;
  margin-right: 150px;
  margin-left: 150px;
  justify-content: center;
  text-align: start;
  transition: all 1.5s ease;
  // border: 0.1px solid #d5d5d5;
  //background-color: #f4f4f4;
`;

// Product Container
const Product = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
  })}
`;

// Product Image Container
const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  flex: 1;
  ${mobile({
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
  })}
`;

//Product Image
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  object-position: 0% 120%;
  margin-right: 330px;
  cursor: pointer;
  ${mobile({
    height: "100%",
    width: "90%",
  })}
`;
// Product Info Container
const InfoContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  flex: 1;
  gap: 10px;
  color: #272727f5;
  ${mobile({
    display: "none",
  })}
`;

// Sale Title
const Title = styled.h1`
  flex: 1;
  font-weight: 200;
  color: #252525;
  font-family: "Lexend";
  font-size: 60px;
  margin: 0;
  ${mobile({
    position: "absolute",
    fontSize: "40px",
    marginBottom: "90%",
  })}
`;

// Sale Description
const Description = styled.p`
  flex: 1;
  margin: 0;
  margin-right: 200px;
  font-weight: 200;
  font-size: 16px;
  letter-spacing: 3px;
  width: 600px;
  font-family: "Lexend";
  color: grey;
`;

// Check Sale Button
const Button = styled.button`
  width: 200px;
  flex: 1;
  font-size: 20px;
  padding: 20px 20px;
  background-color: transparent;
  margin-bottom: 200px;
  font-family: "Lexend";
  border: 0.1px solid lightgray;
  cursor: pointer;
  color: grey;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const Sale = () => {
  //useNavigate to switch pages
  const navigate = useNavigate();
  //useState hook to set products
  const [products, setProducts] = useState([]);
  //openProduct function directs to Product page when clicked
  const openProduct = (productId, e) => {
    navigate(`/products/${productId}`);
  };
  // useEffect hook to get products callinf getProduct function*/
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/allproducts");
        setProducts(res.data.sort(() => Math.random() - 0.5).slice(0, 1));
      } catch (err) {}
    };
    getProduct();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Product>
          <ImageContainer>
            {
              /*add product image and make it clickable to direct to product page*/
              products?.map((product) => (
                <Image
                  key={product._id}
                  src={product?.images[2]}
                  onClick={() => openProduct(product._id)}
                />
              ))
            }
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. AENEAN
              COMMODO LIGULA EGET DOLOR. AENEAN MASSA. CUM SOCIIS NATOQUE
              PENATIBUS ET MAGNIS DIS PARTURIENT MONTES, NASCETUR RIDICULUS MUS.
            </Description>
            {products?.map((product) => (
              /*add Button and make it clickable to direct to product page*/
              <Button
                key={product._id}
                onClick={() => openProduct(product._id)}
              >
                SHOP NOW
              </Button>
            ))}
          </InfoContainer>
        </Product>
      </Wrapper>
    </Container>
  );
};

export default Sale;
