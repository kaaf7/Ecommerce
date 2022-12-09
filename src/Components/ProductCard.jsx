/* * 👇
 *This is a Product Component
 *It will contain all the product image and info like price, size, and color
 *It will be desplayed in Hightlights Component and also in ProductsPage
 */

// import React
import React from "react";

// import Styled Components
import styled from "styled-components";

// import useNavigate to redirect to pages
import { useNavigate } from "react-router-dom";

// import Favorite Icon from material UI
import FavoriteIcon from "@mui/icons-material/Favorite";

// addAndRemoveFavorite reudcer from favorite slice
import { addAndRemoveFavorite } from "../redux/favoriteRedux";

// import Cart Badge from material UI
import Badge from "@mui/material/Badge";

import { useDispatch, useSelector } from "react-redux";

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
  font-family: "Lexend", sans-serif;
  font-weight: 400;
  justify-content: center;
  align-items: start;
  text-align: start;
  flex-direction: column;
  color: black;
  font-size: 12px;
`;

// Text for product information
const ProductInfo = styled.p`
  flex: 1;
  font-size: 12px;
  color: #272727f5;
  font-family: "Lexend", sans-serif;
  letter-spacing: 2px;
`;

// product price
const ProductPrice = styled.p`
  flex: 1;
  font-weight: bold;
  font-size: 12px;
  color: #272727f5;
  font-family: "Lexend", sans-serif;
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
  // color is color prop based on the product
  background-color: ${({ color }) => color};
`;

// Heart icon to add product to favorites
const ProductHeart = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 30%;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
  transition: 1s;
  cursor: pointer;
  :hover {
    transition: 1s;
    transform: scale(1.3);
  }
`;
// passing product and category in productCard component to change its props in other pages
const ProductCard = ({ product, category }) => {
  //useNavigate to switch pages
  const navigate = useNavigate();
  // activate dispatch
  const dispatch = useDispatch();

  /* *
   *handleFavorite function responsible for adding or removing products into favorites
   *It activates the function using dispatch and the product intended to be added */
  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(addAndRemoveFavorite(newFAvoriteProduct));
  };
  // favorite state from favorite slice
  const favorites = useSelector((state) => state.favorite.favorites);
  // spread operator to get product into newFavoriteProduct
  let newFAvoriteProduct = { ...product };

  //openProduct function to switch to Product page once pressed on product
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  // check if product exists in favorites
  const doesFavoritExist =
    favorites?.findIndex((favorite) => favorite?._id === product?._id) !== -1;

  return (
    <Container>
      <ProductCardTemplate>
        {/* show the heart sign only if the display in a category */}
        {/* handleFavorite function to add product into favorite list*/}
        {category && (
          <ProductHeart onClick={handleFavorite}>
            <Badge badgeContent={0} color="error">
              {/*if the product does not exist in favorites turn the heart into red 
            , else turn it grey*/}
              <FavoriteIcon
                sx={
                  doesFavoritExist
                    ? { color: "#ce1d1df5" }
                    : { color: "darkgrey" }
                }
              />
            </Badge>
          </ProductHeart>
        )}
        {/*product image props*/}
        <ProductImage
          src={product?.images[0]}
          // on mouse hover the product main image will change to another image
          onMouseEnter={(e) => (e.target.src = product?.images[1])}
          onMouseLeave={(e) => (e.target.src = product?.images[0])}
          onClick={() => openProduct(product?._id)}
        ></ProductImage>
        <ProductInfoContainer>
          {/*product title props*/}
          <ProductInfo>{product?.productTitle.toUpperCase()}</ProductInfo>
          {/*product price props*/}
          <ProductPrice>€ {product?.price}</ProductPrice>
          {/*product color props*/}
          <ColorContainer>
            {product?.colors.map((availableColor) => (
              <ColorSelections key={availableColor} color={availableColor} />
            ))}
          </ColorContainer>
        </ProductInfoContainer>
      </ProductCardTemplate>
    </Container>
  );
};

export default ProductCard;
