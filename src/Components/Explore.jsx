import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25vh;
  width: 100%;
  background-color: #f9f9f9;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  max-height: 80%;
  overflow: hidden;
`;
const Title = styled.h1`
  margin-bottom: 100px;
  margin-top: 10px;
  font-size: 35px;
  margin-bottom: 0px;
  color: #272727f5;
  font-weight: bolder;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: top;
  flex: 1;
  max-width: 50%;
`;
const Button = styled.button`
  margin-top: 20px;
  width: 12vw;
  height: 4vh;
  background-color: transparent;
  border: 0.1px solid lightgrey;
  font-size: 14px;
  color: #272727f5;
`;

const Explore = () => {
  return (
    <Container>
      <Wrapper>
        <Title>EXPLORE MORE</Title>
        <Buttons>
          <Button>MEN</Button>
          <Button>WOMEN</Button>
          <Button>MAGAZINE</Button>
          <Button>FAVORITES</Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Explore;
