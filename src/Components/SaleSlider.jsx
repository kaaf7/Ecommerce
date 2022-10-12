import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 30vh;
  width: 100%;
  background-color: #F9F9F9;
  border-bottom: 1px solid lightgray;
  position: sticky;

`;
const Wrapper = styled.div`
  overflow: hidden;
  margin-top: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 150px;
`;
const RightItems = styled.div`
 display: flex;
  flex-direction: column;
  height: 100%;
  width: 40vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-right: 150px;
`;
const MenuText = styled.div`
  font-size: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #272727f5;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    opacity: 0.8;
    font-weight: 600;
  }
`;

const Signature = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 100px;
  color: #272727f5;
  font-weight: bolder;
  cursor: pointer;
`;

const SaleSlider = () => {
  return (
    <Container>
      <Wrapper>
        <LeftItems>
          <MenuText>ATELIER</MenuText>
        </LeftItems>
        <Signature>AKT</Signature>
        <RightItems>
          <MenuText>MEN</MenuText>
          <MenuText>WOMEN</MenuText>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default SaleSlider;
