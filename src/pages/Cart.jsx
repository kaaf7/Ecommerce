import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CartItem from "../Components/CartItem";
import { Navbar } from "../Components/Navbar";
import { useSelector } from "react-redux";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 70%;
  width: 100%;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PurchasedItems = styled.div`
  flex: 2;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 10px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;
const Text = styled.p`
  font-weight: 500;
  margin-top: 1px;
  ${mobile({
    fontSize: "10px",
    flexDirection: "column",
  })}
`;
const PurchaseButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  background-color: black;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: grey;
  }
`;
const PurchaseForm = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding:1vw;
  position: fixed;
  right: 150px;
  top: 140px;
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  })}
`;
const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderTitle = styled.h2`
  margin-top: 0;
  ${mobile({
    fontSize: "15px",
  })}
`;

const DeliveryPriceContainer = styled.div``;
const TotalSumContainer = styled.div``;
const shippingCost = 5;


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartProducts = cart.products;
  const totalPrice = Math.round(cart.price)
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <PurchasedItems>
          {cartProducts.map((product) => (
            <CartItem key={product._id} purchasedProduct={product} />
          ))}
        </PurchasedItems>
        <PurchaseForm>
          <OrderTitle>ORDER SUMMERY</OrderTitle>
          <OrderDetails>
            <Text>ORDER SUM</Text>
            <Text>€ {totalPrice}</Text>
          </OrderDetails>
          <OrderDetails>
            <Text>SHIPPING SUM</Text>
            <Text>€ {totalPrice > 50 ? 0 : shippingCost}</Text>
          </OrderDetails>
          <OrderDetails>
            <Text>TOTAL ORDER</Text>
            <Text>
              € {totalPrice > 50 ? totalPrice : totalPrice + shippingCost}
            </Text>
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
