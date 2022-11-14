/* 👇 This is a Selector Component  	
cretaed and styled with Styled Component 
will filter and sort products based on type, color, size
*/

import React from "react";

import styled from "styled-components";

// all Components Container
const Container = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

// Wrapper
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-left: 150px;
  position: relative;
`;

// Options to select from
const SelectOptions = styled.select`
  background-color: #f9f9f9;
  border: none;
  border: none;
  font-size: 13px;
  font-family: bolder;
  color: grey;
  font-family: Tahoma;
`;

const Selector = () => {
  return (
    <Container>
      <Wrapper>
        <SelectOptions>
          <option>COLOR:</option>
          <option>BLACK</option>
          <option>YELLOW</option>
        </SelectOptions>
        <SelectOptions>
          <option>SIZE:</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>X</option>
        </SelectOptions>
        <SelectOptions>
          <option>Category:</option>
          <option>Men</option>
          <option>Women</option>
        </SelectOptions>
        <SelectOptions>
          <option>Price:</option>
          <option>Ascending</option>
          <option>Descending</option>
        </SelectOptions>
      </Wrapper>
    </Container>
  );
};

export default Selector;
