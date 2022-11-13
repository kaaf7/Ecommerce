import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

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
    backgroundColor:"yellow",
  
  })}
`;
const Items = styled.div`
  font-size: 12px;
  color: black;
  cursor: pointer;
  flex: 1;
  ${mobile({
    fontSize: "10px",
  })}
`;
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
          <Items>iverra quis, feugiat a, tellus. Phasellus v</Items>
          <Items>tellus. Phasellus v</Items>
          <Items>iverra quis, feugiat a, tellus. Phasellus v</Items>
          <Items>iverra quis, feugiat a, tellus. Phasellus v</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
        </ItemsContainer>
        <ItemsContainer>
          <Items>Kontakt</Items>
          <Items>Lieferung</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
        </ItemsContainer>
        <ItemsContainer>
          <Items>Kontakt</Items>
          <Items>Lieferung</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
        </ItemsContainer>
      </LeftItems>
      <RightItems>
        <ItemsContainer>
          <Items>Kontakt</Items>
          <Items>Lieferung</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
        </ItemsContainer>
        <ItemsContainer>
          <Items>Kontakt</Items>
          <Items>Lieferung</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
          <Items>Text</Items>
        </ItemsContainer>
      </RightItems>
    </Container>
  );
};

export default Footer;
