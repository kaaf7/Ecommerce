import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 3vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: 12;
  position: relative;
`;

const Announcement = () => {
  return (
    <div>
      <Container>
        <Text>New</Text>
      </Container>
    </div>
  );
};

export default Announcement;
