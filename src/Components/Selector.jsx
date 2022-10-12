import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-left: 150px;
  position: relative;
  
`;

const Colors = styled.select`
  background-color: #f9f9f9;
  border: none;
  font-size: 13px;
  font-family: bolder;
  color: grey;
  font-family: Tahoma;
  option {
  }
`;
const Sizes = styled.select`
  background-color: #f9f9f9;
  border: none;
  border: none;
  font-size: 13px;
  font-family: bolder;
  color: grey;
  font-family: Tahoma;

  option {
  }
`;
const Material = styled.select`
  background-color: #f9f9f9;
  border: none;
  border: none;
  font-size: 13px;
  font-family: bolder;
  color: grey;
  font-family: Tahoma;

  option {
  }
`;

const Selector = () => {
  return (
    <Container>
      <Wrapper>
        <Colors>
          <option>COLOR:</option>
          <option>BLACK</option>
          <option>YELLOW</option>
        </Colors>
        <Sizes>
          <option>SIZE:</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>X</option>
        </Sizes>
        <Material>
          <option>MATERIAL:</option>
          <option>Cotton</option>
          <option>Leather</option>
          <option>Polyester</option>
        </Material>
      </Wrapper>
    </Container>
  );
};

export default Selector;
