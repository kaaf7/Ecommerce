import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:  #F9F9F9;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;
const Wrapper = styled.div`
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;

`;
const Image = styled.img`
  flex: 1;
  height: 90%;
  object-fit: cover;
  filter: grayscale(1);
  transition: 0.1s ease-out;
  z-index: 0;
  opacity: 0.9;
  border: 0.1px solid lightgrey;
  cursor: pointer;
  &:hover {
    opacity: 1;
    filter: none;
    transition: 0.1s ease-in;
  }
`;
const Quote = styled.p`
  position: absolute;
  margin-top: 0%;
  margin-left: 0%;
  font-size: 40px;
  color: #e13913;
  font-weight: 600;
  z-index: 1;
`;
//src="https://lp.cosstores.com/app001prod?set=source[/0e/be/0ebe8f04bb0b0c1be4a380b2aae2e6a62745df32.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"
const Board = () => {
  return (
    <Container>
      <Wrapper>
        <Quote>
          YOU CAN HAVE ANYTHING YOU WANT IN LIFE IF YOU DRESS FOR IT
        </Quote>
        <Image src="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></Image>
        <Image src="https://lp.cosstores.com/app001prod?set=source[/47/7f/477fea231328a285e246741d1dac4b51f3650edd.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></Image>
        <Image src="https://lp.cosstores.com/app001prod?set=source[/93/af/93af209bbcbac0c437f3580a37f0084ed0182c89.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></Image>
      </Wrapper>
    </Container>
  );
};

export default Board;
