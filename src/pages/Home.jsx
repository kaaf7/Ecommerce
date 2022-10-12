import React from "react";
import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import SaleSlider from "../Components/SaleSlider";
import Slider from "../Components/Slider";
import Highlights from "../Components/Highlights";
import Footer from "../Components/Footer";
import Explore from "../Components/Explore";
import Board from "../Components/Board";

const Container = styled.div`
  overflow: hidden;
`;
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <SaleSlider></SaleSlider>
        <Slider></Slider>
        <Highlights></Highlights>
        <Board></Board>
        <Explore></Explore>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Home;
