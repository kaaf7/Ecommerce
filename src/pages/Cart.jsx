import React from "react";
import styled from "styled-components";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  justify-content: center;
`;
const PurchasedItems = styled.div`
  flex: 2;
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 10px;
  background-color: #d4d4d4;
`;
const PurchasedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  width: 90%;
  gap:20px;
  height: 20vh;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const PurchasedItemPhoto = styled.img`
  width: 100px;
  height: 150px;
  object-fit: scale-down;
  background-color: green;
  
`;
const PurchasedTextContainer = styled.div`
flex:1;
height:150px;
width :100%;
background-color: blue;
`;
const PurchasedItemText = styled.div``;
const text = styled.h1``;

const PurchaseButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  background-color: black;
  color: white;
  &:hover {
    background-color: grey;
  }
`;
const PurchaseForm = styled.div`
  width: 30%;
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
`;
const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderTitle = styled.h2`
  margin-top: 0;
`;
const OrderAnswer = styled.p`
  font-size: 15px;
`;
const OrderIndication = styled.p`
  font-size: 15px;
`;
const DeliveryPriceContainer = styled.div``;
const TotalSumContainer = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <PurchasedItems>
          <PurchasedItem>
            <PurchasedItemPhoto></PurchasedItemPhoto>
            <PurchasedTextContainer></PurchasedTextContainer>
          </PurchasedItem>
          <PurchasedItem>
            <PurchasedItemPhoto></PurchasedItemPhoto>
            <PurchasedTextContainer></PurchasedTextContainer>
          </PurchasedItem>
          <PurchasedItem>
            <PurchasedItemPhoto></PurchasedItemPhoto>
            <PurchasedTextContainer></PurchasedTextContainer>
          </PurchasedItem>
          <PurchasedItem>
            <PurchasedItemPhoto></PurchasedItemPhoto>
            <PurchasedTextContainer></PurchasedTextContainer>
          </PurchasedItem>
        </PurchasedItems>
        <PurchaseForm>
          <OrderTitle>Total Order</OrderTitle>
          <OrderDetails>
            <OrderIndication>Order Sum</OrderIndication>
            <OrderAnswer>$ 65</OrderAnswer>
          </OrderDetails>
          <OrderDetails>
            <OrderIndication>Delivery sum</OrderIndication>
            <OrderAnswer>$ 65</OrderAnswer>
          </OrderDetails>
          <OrderDetails>
            <OrderIndication>Total Sum</OrderIndication>
            <OrderAnswer>$ 130</OrderAnswer>
          </OrderDetails>
          <DeliveryPriceContainer></DeliveryPriceContainer>
          <TotalSumContainer></TotalSumContainer>
          <PurchaseButton>GO TO CHECKOUT</PurchaseButton>
        </PurchaseForm>
      </Wrapper>
    </Container>
  );
};

export default Cart;
