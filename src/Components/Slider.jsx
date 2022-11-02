import React from "react";
import styled from "styled-components";
import ArrowLeft from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRight from "@mui/icons-material/ArrowRightOutlined";
import { useState, useEffect } from "react";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;
const SlideWrapper = styled.div`
  overflow: hidden;
  display: flex;
  height: 100%;
  margin-right: 150px;
  justify-content: center;
  text-align: start;
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
  })}
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
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
  })}
`;
const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: scale-down;
  object-position: 0% 120%;
  cursor: pointer;
  ${mobile({
    height: "100%",
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
  ${mobile({
    display: "none",
  })}
`;
const Title = styled.h1`
  flex: 1;
  font-size: 50px;
  margin: 0;
  ${mobile({
    position: "absolute",
    fontSize: "40px",
    marginBottom: "90%",
  })}
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
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
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
  cursor: pointer;
  opacity: 0.3;
  z-index: 2;
  ${mobile({
    display: "none",
  })}
`;

const Slider = () => {
  const navigate = useNavigate();

  const handleOpenProduct = (productId, e) => {
    navigate(`/products/${productId}`);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
             "http://localhost:3005/api/products/allproducts"
        );
        setProducts(res.data.sort(() => Math.random() - 0.5).slice(0, 1));
      } catch (err) {}
    };
    getProduct();
  }, []);

  console.log("this " + products);
  return (
    <Container>
      <SlideWrapper>
        <Slide>
          <ImageContainer>
            {products.map((product) => (
              <Image
                key={product._id}
                src={product?.images[2]}
                onClick={() => handleOpenProduct(product._id)}
              />
            ))}
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. AENEAN
              COMMODO LIGULA EGET DOLOR. AENEAN MASSA. CUM SOCIIS NATOQUE
              PENATIBUS ET MAGNIS DIS PARTURIENT MONTES, NASCETUR RIDICULUS MUS.
            </Description>
            {products.map((product) => (
              <Button
                key={product._id}
                onClick={() => handleOpenProduct(product._id)}
              >
                SHOP NOW
              </Button>
            ))}{" "}
          </InfoContainer>
        </Slide>
      </SlideWrapper>
    </Container>
  );
};

export default Slider;
