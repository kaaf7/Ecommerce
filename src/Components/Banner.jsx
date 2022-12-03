/* 👇 This is Banner Component  	
created and styled with Styled Component 
it will display company's logo will  direct customers to products
*/

import React from "react";

import styled from "styled-components";

// import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import useNavigate to redirect to pages
import { useNavigate } from "react-router-dom";

// all Components Container
const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid lightgray;
  position: relative;
  ${mobile({
    height: "25vh",
  })}
`;

// wrapper to wrap Left and Right items
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  margin-top: 50px;
`;

// Left Items together
const LeftItems = styled.div`
  width: 40vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 150px;
`;

// Right Items together
const RightItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-right: 150px;
`;

// Text for menu items
const MenuText = styled.div`
  font-size: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #272727f5;
  font-weight: 500;
  font-family: "Lexend";

  cursor: pointer;
  &:hover {
    background-color: #d3d3d35e;
    opacity: 0.8;
    font-weight: 600;
  }
  ${mobile({
    marginLeft: "5px",
    display: "flex",
    JustifyContent: "center",
    fontSize: "15px",
  })}
`;

// company's logo
const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 100px;
  color: #272727f5;
  font-family: "Lexend";
  cursor: pointer;
  ${mobile({
    marginLeft: "50px",
    marginRight: "50px",
    display: "flex",
    JustifyContent: "center",
    width: "380px",
    fontSize: "60px",
  })}
`;

const Banner = () => {
  /*useNavigate to switch pages*/
  const navigate = useNavigate();
  /*NavigateDir depends on custome directory*/
  const NavigateDir = (directory) => {
    navigate(directory);
  };

  return (
    <Container>
      <Wrapper>
        <LeftItems>
          <MenuText
            /*Direct to Products Page*/
            onClick={() => {
              NavigateDir("/products");
            }}
          >
            ATELIER
          </MenuText>
        </LeftItems>
        <Logo
          /*Direct to Home Page*/
          onClick={() => {
            NavigateDir("/");
          }}
        >
          AKT
        </Logo>
        <RightItems>
          <MenuText
            /*Direct to Men's product*/
            onClick={() => {
              NavigateDir("/products/men");
            }}
          >
            MEN
          </MenuText>
          <MenuText
            /*Direct to Women's product*/
            onClick={() => {
              NavigateDir("/products/women");
            }}
          >
            WOMEN
          </MenuText>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default Banner;
