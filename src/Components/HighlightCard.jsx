import React from "react";
import styled from "styled-components";
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 80%;
  flex: 1;
`;
const ProductCardTemplate = styled.div`
  flex: 1;
  width: 20vw;
  height: 25%;
  align-items: start;
  ${mobile({
    width: "90vw",
    height: "25%",
  })}
`;
const ProductImage = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  ${mobile({
    width: "100%",
    objectFit: "cover",
  })}
`;
const ProductInfoContainer = styled.div`
  width: 20vw;
  font-size: 14px;
  text-align: start;
  ${mobile({
    display: "none",
  })}
`;
const ProductInfo = styled.h2`
  flex: 1;
  color: #272727f5;
  position: relative;
`;
const ProductPrice = styled.p`
  flex: 1;
  color: #272727f5;
`;
const Button = styled.button`
  padding: 10px;
  width:60vw;
  background-color: grey;
  opacity: 0.5;
  color:white;
  position: absolute; 
  display: none;
  text-align:center;
  font-size: 20px;
  ${mobile({
    display:"block",
    marginTop:"100%",
    marginLeft:"15%"
  })}
`;

const ColorSelections = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
`;
const ColorContainer = styled.div`
  display: flex;
  gap: 2px;
`;
const FavoriteIconContainer = styled.div`
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #a6a6a6;
  font-size: 14px;
  top: 80%;
  left: 20%;
  display: flex;
  opacity: 0.2;
  z-index: 0;
  color: #1a1a1a;
  cursor: pointer;
  flex: 1;
  position: absolute;
`;

const HighlightCard = (props) => {
  return (
    <Container>
      <FavoriteIconContainer>
        <Favorite color={"red"}></Favorite>
      </FavoriteIconContainer>
      <ProductCardTemplate>
      <Button>EXPLORE</Button>
        <ProductImage src={props.link}></ProductImage>
        <ProductInfoContainer>
          <ProductInfo>PRODUCT TITLE</ProductInfo>
          <ProductPrice>PRODUCT INFO</ProductPrice>
          <ColorContainer>
            <ColorSelections color={"brown"}></ColorSelections>
            <ColorSelections color={"grey"}></ColorSelections>
            <ColorSelections color={"black"}></ColorSelections>
          </ColorContainer>
        </ProductInfoContainer>
      </ProductCardTemplate>
    </Container>
  );
};

export default HighlightCard;
