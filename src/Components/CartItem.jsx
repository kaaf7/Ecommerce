/* 👇 This is Cart Item Component 
created and styled with Styled Components,it will contain all the
info of the a single item purchased and added in the cart
and this component will be displayed in the cart page before checkout
*/

import React from "react";

import styled from "styled-components";

//import responsive Settings from responsive.js
import { mobile } from "../responsive";

import { removeProduct } from "../redux/cartRedux";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

//purchased item container
const PurchasedItem = styled.div`
  width: 30vw;
  height: 20vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 1vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

//photo of purchased single item added in cart
const PurchasedItemPhoto = styled.img`
  width: 100px;
  height: 150px;
  object-fit: scale-down;
  cursor: pointer;
`;

// Container of info for purchased single item added in cart
const PurchasedTextContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

// Text for purchased item name
const PurchasedItemName = styled.h4`
  margin-top: 0;
  margin-bottom: 1px;
  ${mobile({
    fontSize: "10px",
  })}
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  padding: auto;
  border: none;
  background-color: rgb(0, 0, 0);
  cursor: pointer;

  :hover {
    background-color: rgba(86, 1, 1, 0.943);
  }
`;

// Text for purchased item details
const DetailsContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

// Text for indication of product color and price
const Indication = styled.p`
  font-weight: 600;
  margin-top: 1px;

  ${mobile({
    fontSize: "10px",
    flexDirection: "column",
  })}
`;

const CartItem = ({ purchasedProduct }) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  /*useNavigate to switch pages*/
  const navigate = useNavigate();

  /*openProduct function to switch to Product page once pressed on product*/
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      {" "}
      <PurchasedItem>
        <PurchasedItemPhoto
          onClick={() => openProduct(purchasedProduct._id)}
          src={purchasedProduct?.images[0]}
        ></PurchasedItemPhoto>
        <PurchasedTextContainer>
          <PurchasedItemName>
            {purchasedProduct?.productTitle.toUpperCase()}
          </PurchasedItemName>
          <DetailsContainer>
            <Indication>EUR</Indication>
            <Indication>{purchasedProduct?.price}</Indication>
          </DetailsContainer>
          <DetailsContainer>
            <Indication>COLOR</Indication>
            <Indication>{purchasedProduct.color}</Indication>
          </DetailsContainer>
          <RemoveButton onClick={() => handleRemoveProduct(purchasedProduct)}>
            REMOVE
          </RemoveButton>
        </PurchasedTextContainer>
      </PurchasedItem>
    </div>
  );
};

export default CartItem;
