import React from "react";
import styled from "styled-components";
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
`;
const PurchasedItem = styled.div`
  flex: 1;
  width: 90%;
  height: 20vh;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const PurchaseButton = styled.div``;

const PurchaseForm = styled.div`
  width: 30%;
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`;


const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <PurchasedItems>
          <PurchasedItem />
          <PurchasedItem />
          <PurchasedItem />
          <PurchasedItem />
        </PurchasedItems>
        <PurchaseForm></PurchaseForm>
      </Wrapper>
    </Container>
  );
};

export default Cart;
