import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const PurchasedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  width: 90%;
  gap: 20px;
  height: 20vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const PurchasedItemPhoto = styled.img`
  width: 100px;
  height: 150px;
  object-fit: scale-down;
`;
const PurchasedTextContainer = styled.div`
  flex: 1;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const PurchasedItemName = styled.h4`
  margin-top: 0;
  margin-bottom: 1px;
  ${mobile({
    fontSize: "10px",
  })}
`;
const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

const Text = styled.p`
  font-weight: 500;
  margin-top: 1px;
  ${mobile({
    fontSize: "10px",
    flexDirection: "column",
  })}
`;
const CartItem = ({ purchasedProduct }) => {
  return (
    <div>
      {" "}
      <PurchasedItem>
        <PurchasedItemPhoto
          src={purchasedProduct.images[0]}
        ></PurchasedItemPhoto>
        <PurchasedTextContainer>
          <PurchasedItemName>
            {purchasedProduct.title.toUpperCase()}
          </PurchasedItemName>
          <DetailsContainer>
            <Text>EUR</Text>
            <Text>{purchasedProduct.price}</Text>
          </DetailsContainer>
          <DetailsContainer>
            <Text>SIZE</Text>
            <Text>{purchasedProduct.size.toUpperCase()}</Text>
          </DetailsContainer>
          <DetailsContainer>
            <Text>COLOR</Text>
            <Text>{purchasedProduct.colors[0].toUpperCase()}</Text>
          </DetailsContainer>
        </PurchasedTextContainer>
      </PurchasedItem>
    </div>
  );
};

export default CartItem;
