import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25vh;
  width: 100%;
  ${mobile({
    height: "15vh",
  })}
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
  ${mobile({
    gap: "20px",
  })}
`;
const Button = styled.button`
  margin-top: 20px;
  width: 20vw;
  height: 4vh;
  background-color: transparent;
  border: 0.1px solid lightgrey;
  font-size: 14px;
  color: #272727f5;
  cursor: pointer;
  ${mobile({
    fontSize: "10px",
    width: "30vw",
  })}
`;

const Explore = () => {
  const navigate = useNavigate();
  const NavigateDir = (directory) => {
    navigate(directory);
  };
  return (
    <Container>
      <Wrapper>
        <Title>EXPLORE MORE</Title>
        <Buttons>
          <Button
            onClick={() => {
              NavigateDir("/products/men");
            }}
          >
            MEN
          </Button>
          <Button
            onClick={() => {
              NavigateDir("/products/women");
            }}
          >
            WOMEN
          </Button>
          <Button
            onClick={() => {
              NavigateDir("/products");
            }}
          >
            MAGAZINE
          </Button>
          <Button
            onClick={() => {
              NavigateDir("/favorites");
            }}
          >
            FAVORITES
          </Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Explore;
