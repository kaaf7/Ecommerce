import React from "react";
import styled from "styled-components";
import ArrowLeft from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRight from "@mui/icons-material/ArrowRightOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: #f9f9f9;
`;
const SlideWrapper = styled.div`
  overflow: hidden;
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: start;
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 90%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  ${mobile({
    height: "90%",
    width: "90%",
  })}
`;
const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: scale-down;
  object-position: 0% 120%;
  cursor: pointer;
  ${mobile({
    height: "90%",
    width: "90%",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  align-items: start;
  color: #272727f5;
`;
const Title = styled.h1`
  flex: 1;
  font-size: 50px;
  margin: 0;
`;
const Description = styled.p`
  flex: 1;
  margin: 0;
  font-size: 16px;
  letter-spacing: 3px;
  width: 600px;
  color: #272727f5;
`;
const Button = styled.button`
  flex: 1;
  width: 200px;
  padding: 20px 20px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid lightgray;
  cursor: pointer;
  color: #272727f5;
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e3e3e3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: auto;
  bottom: auto;
  left: ${(props) => props.direction === "left" && "100px"};
  right: ${(props) => props.direction === "right" && "100px"};
  cursor: pointer;
  opacity: 0.3;
  z-index: 2;
`;

const Slider = () => {
  return (
    <Container>
      <ArrowContainer direction="left">
        <ArrowLeft />
      </ArrowContainer>
      <SlideWrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://lp.cosstores.com/app001prod?set=source[/81/4a/814a8c2ca9e04595b664296767e6b3ab83f512bd.jpg],origin[dam],type[ENVIRONMENT],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. AENEAN
              COMMODO LIGULA EGET DOLOR. AENEAN MASSA. CUM SOCIIS NATOQUE
              PENATIBUS ET MAGNIS DIS PARTURIENT MONTES, NASCETUR RIDICULUS MUS.
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </SlideWrapper>
      <ArrowContainer direction="right">
        <ArrowRight />
      </ArrowContainer>
    </Container>
  );
};

export default Slider;
