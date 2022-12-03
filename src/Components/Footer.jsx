/* 👇 This is Footer  Component, 
it is created and styled with Styled Components 
it will contain company's information
*/

import React from "react";

import styled from "styled-components";

//import responsive Settings from responsive.js
import { mobile } from "../responsive";

// all Components Container
const Container = styled.div`
  height: 30vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  ${mobile({
    display: "flex",
    justifyContent: "flex-start",
    height: "15vh",
    backgroundColor: "yellow",
  })}
`;
// text items where all the info is displayed
const Item = styled.div`
  font-size: 12px;
  color: grey;
  font-family: "Lexend", sans-serif;
  font-weight: 400;
  cursor: pointer;
  flex: 1;
  ${mobile({
    fontSize: "10px",
  })}
`;

// left itemns container
const LeftItems = styled.div`
  margin-left: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 30%;
  gap: 10px;
  flex: 1;
  ${mobile({
    display: "none",
  })}
`;

// all items container
const ItemsContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 60%;
  margin-left: 50px;
  max-width: 30%;
  flex: 1;
`;
const Footer = () => {
  return (
    <Container>
      <LeftItems>
        <ItemsContainer>
          <Item>Contact Us</Item>
          <Item>FAQs</Item>
          <Item>Delivery Option</Item>
          <Item>Returns & Refunds</Item>
          <Item>Store Locator</Item>
          <Item>Customer Service</Item>
          <Item>Payment</Item>
          <Item>Size Guide</Item>
          <Item>Privac Policy</Item>
          <Item>Cookie Settings</Item>
        </ItemsContainer>
        <ItemsContainer>
          <Item>Student Discount</Item>
          <Item>Sustainability</Item>
          <Item>Product Care</Item>
          <Item>Career</Item>
          <Item>Press</Item>
          <Item>About Bankai.</Item>
        </ItemsContainer>
        <ItemsContainer>
          <Item>Facebook</Item>
          <Item>Pinterest</Item>
          <Item>Instagram</Item>
          <Item>Spotify</Item>
        </ItemsContainer>
      </LeftItems>
    </Container>
  );
};

export default Footer;
