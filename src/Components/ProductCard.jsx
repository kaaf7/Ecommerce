/* 👇 This is a Product 
Component it will contain all the product 
image and info like price, size, and color 
it will be desplayed in Hightlights and also in ProductsPage
*/

import React from "react";

import styled from "styled-components";

// import useNavigate to redirect to pages
import { useNavigate } from "react-router-dom";

// all Components Container
const Container = styled.div``;

// the template that will contain the Product images and info
const ProductCardTemplate = styled.div`
  max-width: 50vw;
  height: 100%;
  flex: 1;
`;

// Product main image
const ProductImage = styled.img`
  width: 100%;
  height: 60vh;
  cursor: pointer;
`;

// Container for all product information
const ProductInfoContainer = styled.div`
  max-width: 20vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: start;
  flex-direction: column;
  font-size: 14px;
`;

// Text for product information
const ProductInfo = styled.p`
  flex: 1;
  font-weight: bold;
  font-size: 12px;
  color: #272727f5;
  letter-spacing: 2px;
`;

// product price
const ProductPrice = styled.p`
  flex: 1;
  font-weight: bold;
  font-size: 12px;
  color: #272727f5;
  letter-spacing: 2px;
`;

// Product Colors Container
const ColorContainer = styled.div`
  display: flex;
  gap: 2px;
  flex: 1;
`;

// Color selection with color props based on the product
const ColorSelections = styled.div`
  width: 10px;
  height: 10px;
  border: 0.1px solid lightgrey;
  background-color: ${({ color }) => color};
`;

const ProductCard = ({ product }) => {
  /*useNavigate to switch pages*/
  const navigate = useNavigate();

  /*openProduct function to switch to Product page once pressed on product*/
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <Container>
      <ProductCardTemplate>
        <ProductImage
          src={product.images[0]}
          // on mouse hover the product main image will change to another image
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
