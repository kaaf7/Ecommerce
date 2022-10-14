import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  width: 100px;
`;
const ButtonElement = styled.button`
  background-color: black;
  height: 40px;
  width: 100%;
  padding: 30px;
`;

const Button = () => {
  return (
      <ButtonElement></ButtonElement>
  );
};

export default Button;
