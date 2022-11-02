import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div``;

const ProductCardTemplate = styled.div`
  flex: 1;
  max-width: 50vw;
  height: 100%;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 60vh;
  cursor: pointer;
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
  border: 0.1px solid lightgrey;
  background-color: ${({ color }) => color};
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <Container>
      <ProductCardTemplate>
        <ProductImage
          src={product.images[0]}
          onMouseEnter={(e) => (e.target.src = product.images[1])}
          onMouseLeave={(e) => (e.target.src = product.images[0])}
          onClick={() => openProduct(product._id)}
        ></ProductImage>
        <ProductInfoContainer>
          <ProductInfo>{product.productTitle}</ProductInfo>
          <ProductPrice>€ {product.price}</ProductPrice>
          <ColorContainer>
            {product.colors.map((availableColor) => (
              <ColorSelections key={availableColor} color={availableColor} />
            ))}
          </ColorContainer>
        </ProductInfoContainer>
      </ProductCardTemplate>
    </Container>
  );
};

export default ProductCard;
