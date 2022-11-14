/* 👇 This is Explore display Component
created and styled with Styled Components,
it will redirect customer to other pages with products 
*/

import React from "react";

import styled from "styled-components";

//import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import Navigate to redirect to pages
import { useNavigate } from "react-router-dom";

// all Components Container
const Container = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({
    height: "15vh",
  })}
`;

// Components Wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
  text-align: center;
  max-height: 80%;
  overflow: hidden;
`;

// Explore Component Title
const Title = styled.h1`
  margin-bottom: 100px;
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 35px;
  font-weight: bolder;
  color: #272727f5;
`;

// Button container
const ButtonsContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: top;
  flex: 1;
  gap: 10px;
  ${mobile({
    gap: "20px",
  })}
`;

//Button to redirect to products page
const Button = styled.button`
  width: 20vw;
  height: 4vh;
  margin-top: 20px;
  border: 0.1px solid lightgrey;
  font-size: 14px;
  color: #272727f5;
  background-color: transparent;
  cursor: pointer;
  ${mobile({
    fontSize: "10px",
    width: "30vw",
  })}
`;

const Explore = () => {
  /*useNavigate to switch pages*/
  const navigate = useNavigate();
  
  /*NavigateDir depends on custome directory*/
  const NavigateDir = (directory) => {
    navigate(directory);
  };
  return (
    <Container>
      <Wrapper>
        <Title>EXPLORE MORE</Title>
        <ButtonsContainer>
          <Button
            onClick={() => {
              NavigateDir("/products/men");
            }}
          >
            MEN
          </Button>
          <Button
            onClick={() => {
              NavigateDir("/products/women");
            }}
          >
            WOMEN
          </Button>
          <Button
            onClick={() => {
              NavigateDir("/products");
            }}
          >
            MAGAZINE
          </Button>
          <Button
            onClick={() => {
              NavigateDir("/favorites");
            }}
          >
            FAVORITES
          </Button>
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};

export default Explore;
