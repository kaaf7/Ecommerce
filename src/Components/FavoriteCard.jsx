import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAndRemoveFavorite } from "../redux/favoriteRedux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
const Container = styled.div``;



const Card = styled.img`
  height: 30vh;
  width: 10vw;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;
const ProductHeart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  margin-top: 15%;
  width: 5px;
  height: 5px;
  opacity: 1;
  border-radius: 50%;
  position: absolute;
  transition: 1s;
  cursor: pointer;
  :hover {
    transition: 1s;
    transform: scale(1.3);
  }
`;

const FavoriteCard = ({ product }) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  let newFAvoriteProduct = { ...product };
  const navigate = useNavigate();
  const handleAddAndRemove = (e) => {
    dispatch(addAndRemoveFavorite(newFAvoriteProduct));
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    handleAddAndRemove();
    console.log(favorites);
  };

  const doesFavoritExist =
    favorites?.findIndex((favorite) => favorite?._id === product?._id) !== -1;

  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };
  return (
    <Container>
      <ProductHeart onClick={handleFavorite}>
        {" "}
        <Badge badgeContent={0} color="error">
          <FavoriteIcon
            sx={
              doesFavoritExist ? { color: "#ce1d1df5" } : { color: "darkgrey" }
            }
          />
        </Badge>
      </ProductHeart>
      <Card
        onClick={() => openProduct(product?._id)}
        onMouseEnter={(e) => (e.target.src = product?.images[2])}
        onMouseLeave={(e) => (e.target.src = product?.images[1])}
        src={product?.images[2]}
      ></Card>
    </Container>
  );
};

export default FavoriteCard;
