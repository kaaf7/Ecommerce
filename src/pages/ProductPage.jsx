import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { publicRequest } from "../services";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  height: 90%;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 10px;
  // background-color: lightgrey;
`;

const LookBookWrapper = styled.div`
  display: flex;
  gap: 75px;
  flex: 1;
`;
const LookBook = styled.img`
  height: 80vh;
  width: 30vw;
  object-fit: scale-down;
  border-color: yellow;
`;
const LookBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 75px;
  gap: 2px;
`;
const LookBookImages = styled.img`
  width: 75px;
  height: 100px;
  object-fit: scale-down;
  transition: 0.1s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2.1px 4.2px 4.2px hsl(0deg 0% 0% / 0.44);
    outline: 0.1px solid lightgray;

  }
`;

const ProductInfo = styled.div`
  margin-left: 75px;
  height: 80vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;
const Title = styled.h2`
  margin: 0%;
`;
const PriceTag = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  font-family: Verdana;
  margin-bottom: 20px;
`;

const Color = styled.select`
  height: 40px;
  width: 100%;
  border: 0.1px solid rgba(231, 77, 77, 0.1);
  font-family: Tahoma;
  font-weight: bold;
  font-size: 15px;
  &:focus {
    border-bottom: 2px solid black;
    box-shadow: none;
    border: none;
  }
`;
const SizeText = styled.p`
  font-weight: 400;
  font-size: 13px;
`;
const SizeBlocks = styled.button`
  height: 35px;
  width: 35px;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  text-align: center;
  display: flex;
  background-color: white;
  justify-content: center;
  cursor: pointer;
  &:focus {
    border-bottom: 2px solid black;
  }
`;
const SizesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
const AddToCartBtn = styled.button`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  &:hover {
    background-color: grey;
  }
`;
const ProductDescription = styled.p``;

const ProductPage = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState();
  const [mainImage, setMainImage] = useState("");
  const dispatch = useDispatch();

  const handleMainImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleAddProductToCart = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        uniqueId: uuidv4(),
      })
    );
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          `/products/allproducts/product?id=${productId}`
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [productId]);
  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <LookBookWrapper>
          <LookBookContainer>
            {product?.images.map((image, i) => (
              <LookBookImages
                onClick={() => {
                  handleMainImage(image);
                }}
                key={i}
                src={image}
              />
            ))}
          </LookBookContainer>
          <LookBook src={!mainImage ? product?.images[0] : mainImage} />
        </LookBookWrapper>
        <ProductInfo>
          <Title>{product?.productTitle}</Title>
          <PriceTag>€ {product?.price}</PriceTag>
          <Color onChange={(e) => setColor(e.target.value)}>
            <option selected disabled>
              SELECT COLOR{" "}
            </option>
            {product?.colors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </Color>

          {/*  
          <SizeText>SIZES</SizeText>
         <SizesContainer>
            <SizeBlocks>1</SizeBlocks>
            <SizeBlocks>2</SizeBlocks>
            <SizeBlocks>3</SizeBlocks>
          </SizesContainer> */}
          <AddToCartBtn onClick={color && handleAddProductToCart}>
            Add
          </AddToCartBtn>
          <ProductDescription>{product?.description}</ProductDescription>
        </ProductInfo>
      </Wrapper>{" "}
    </Container>
  );
};

export default ProductPage;
