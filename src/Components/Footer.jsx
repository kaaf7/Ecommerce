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
  color: black;
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
// right items container
const RightItems = styled.div`
  margin-right: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-items: center;
  max-width: 30%;
  gap: 10px;
  flex: 1;
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
          <Item>iverra quis, feugiat a, tellus. Phasellus v</Item>
          <Item>tellus. Phasellus v</Item>
          <Item>iverra quis, feugiat a, tellus. Phasellus v</Item>
          <Item>iverra quis, feugiat a, tellus. Phasellus v</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
        </ItemsContainer>
        <ItemsContainer>
          <Item>Kontakt</Item>
          <Item>Lieferung</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
        </ItemsContainer>
        <ItemsContainer>
          <Item>Kontakt</Item>
          <Item>Lieferung</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
        </ItemsContainer>
      </LeftItems>
      <RightItems>
        <ItemsContainer>
          <Item>Kontakt</Item>
          <Item>Lieferung</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
        </ItemsContainer>
        <ItemsContainer>
          <Item>Kontakt</Item>
          <Item>Lieferung</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
          <Item>Text</Item>
        </ItemsContainer>
      </RightItems>
    </Container>
  );
};

export default Footer;
