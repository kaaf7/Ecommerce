import React from "react";
import { Navbar } from "../Components/Navbar";
import Highlights from "../Components/Highlights";
import Selector from "../Components/Selector";
import ProductCard from "../Components/ProductCard";
import SaleSlider from "../Components/SaleSlider";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Explore from "../Components/Explore";
import Board from "../Components/Board";
import HighlightCard from "../Components/HighlightCard";
import Slider from "../Components/Slider";

const Container = styled.div`
  background-color: #F9F9F9;
`;
const Wrapper = styled.div`
  margin-bottom: 10vh;
  height: 80%;
  margin-left: 150px;
  margin-right: 150px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  position: relative;
`;

const Products = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <SaleSlider></SaleSlider>
      <Slider></Slider>
      <Selector></Selector>
      <Wrapper>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </Wrapper>
      <Board></Board>
      <Explore></Explore>
      <Footer></Footer>
    </Container>
  );
};

export default Products;
