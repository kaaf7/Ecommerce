import React from "react";

import styled from "styled-components";

import { Navbar } from "../Components/Navbar";

import Banner from "../Components/Banner";

import Sale from "../Components/Sale";

import Highlights from "../Components/Highlights";

import Footer from "../Components/Footer";

import Explore from "../Components/Explore";

import Board from "../Components/Board";

const Container = styled.div`
  overflow: hidden;
`;
const Wrapper = styled.div`
  overflow: hidden;
`;
const Home = () => {
  const componentDidMount = () => {
    const reloadCount = sessionStorage.getItem("reloadCount");
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  };

  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <Banner></Banner>
        <Highlights></Highlights>
        <Board></Board>
        <Sale></Sale>
        <Explore></Explore>
        <Footer></Footer>
      </Wrapper>
    </Container>
  );
};

export default Home;
