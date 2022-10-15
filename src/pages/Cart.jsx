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
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 10px;
`;
const PurchasedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  width: 90%;
  gap: 20px;
  height: 20vh;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
`;
const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 20px;
`;
const Text = styled.p`
  font-weight: 500;
  margin-top: 1px;
`;

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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
            <PurchasedItemPhoto src="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></PurchasedItemPhoto>
            <PurchasedTextContainer>
              <PurchasedItemName>
                SANDALEN MIT BLOCKABSATZ UND KARREEFÖRMIGER ZEHENP
              </PurchasedItemName>
              <Text>EUR 115</Text>
              <DetailsContainer>
                <Text>SIZE</Text>
                <Text>L</Text>
              </DetailsContainer>
              <DetailsContainer>
                <Text>COLOR</Text>
                <Text>BLACK</Text>
              </DetailsContainer>
            </PurchasedTextContainer>
          </PurchasedItem>
          <PurchasedItem>
            <PurchasedItemPhoto src="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></PurchasedItemPhoto>
            <PurchasedTextContainer>
              <PurchasedItemName>
                SANDALEN MIT BLOCKABSATZ UND KARREEFÖRMIGER ZEHENP
              </PurchasedItemName>
              <Text>EUR 115</Text>
              <DetailsContainer>
                <Text>SIZE</Text>
                <Text>L</Text>
              </DetailsContainer>
              <DetailsContainer>
                <Text>COLOR</Text>
                <Text>BLACK</Text>
              </DetailsContainer>
            </PurchasedTextContainer>
          </PurchasedItem>
          <PurchasedItem>
            <PurchasedItemPhoto src="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></PurchasedItemPhoto>
            <PurchasedTextContainer>
              <PurchasedItemName>
                SANDALEN MIT BLOCKABSATZ UND KARREEFÖRMIGER ZEHENP
              </PurchasedItemName>
              <Text>EUR 115</Text>
              <DetailsContainer>
                <Text>SIZE</Text>
                <Text>L</Text>
              </DetailsContainer>
              <DetailsContainer>
                <Text>COLOR</Text>
                <Text>BLACK</Text>
              </DetailsContainer>
            </PurchasedTextContainer>
          </PurchasedItem>
        </PurchasedItems>
        <PurchaseForm>
          <OrderTitle>Total Order</OrderTitle>
          <OrderDetails>
            <Text>Order Sum</Text>
            <Text>$ 65</Text>
          </OrderDetails>
          <OrderDetails>
            <Text>Delivery sum</Text>
            <Text>EUR 65</Text>
          </OrderDetails>
          <OrderDetails>
            <Text>Total Sum</Text>
            <Text>$ 130</Text>
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
