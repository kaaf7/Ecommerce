import React from "react";
import styled from "styled-components";
const Container = styled.div``;

const ProductCardTemplate = styled.div`
  flex: 1;
  max-width: 50vw;
  height: 100%;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 60vh;
`;
const ProductInfoContainer = styled.div`
  max-width: 20vw;
  height: 100px;
  font-size: 14px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const ProductInfo = styled.p`
  flex: 1;
  font-weight: bold;
  color: #272727f5;
  font-size: 12px;
  letter-spacing: 2px;
`;
const ProductPrice = styled.p`
  flex: 1;
  font-weight: bold;
  color: #272727f5;
  font-size: 12px;
  letter-spacing: 2px;
`;
const ColorContainer = styled.div`
  display: flex;
  gap: 2px;
  flex: 1;
`;
const ColorSelections = styled.div`
  width: 10px;
  height: 10px;
  background-color: #8f8f8f;
`;

const ProductCard = () => {
  return (
    <Container>
      <ProductCardTemplate>
        <ProductImage src="https://i.pinimg.com/564x/e7/a0/db/e7a0dbfbb6842612e9388ba89a47d299.jpg"></ProductImage>
        <ProductInfoContainer>
          <ProductInfo>JACQUARD-HEMD MIT NORMALER PASSFORM</ProductInfo>
          <ProductPrice>$65</ProductPrice>
          <ColorContainer>
            <ColorSelections></ColorSelections>
            <ColorSelections></ColorSelections>
          </ColorContainer>
        </ProductInfoContainer>
      </ProductCardTemplate>
    </Container>
  );
};

export default ProductCard;
