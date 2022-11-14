/* 👇 This is Nav bar Component  	
 cretaed and styled with Styled Component 
 including all the necessary menu items 
*/

import React from "react";

import styled from "styled-components";

// import useNavigate to redirect to pages
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

// import search Icon from material UI
import SearchIcon from "@mui/icons-material/Search";

// import Cart Icon from material UI
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";

// import Favorite Icon from material UI
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";

// import Cart Badge from material UI
import Badge from "@mui/material/Badge";

// import responsive Settings from responsive.js
import { mobile } from "../responsive";

// all Components Container
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: fixed;
  z-index: 9999;
  overflow: hidden;
  background-color: white;
  top: 0;
`;

// Announcement section for purchase over 50 euros*/
const Announcement = styled.div`
  height: 2vh;
  background-color: #810c0cf5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid grey;
  font-size: 12px;
  ${mobile({
    height: "2vh",
    fontSize: "10px",
  })}
`;

// Components Wrapper div
const Wrapper = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    JustifyContent: "center",
    width: "100%",
  })}
`;

// Shop Logo Text
const Logo = styled.h2`
  font-size: 40px;
  flex: 2;
  color: #272727f5;
  cursor: pointer;
  ${mobile({ fontSize: "20 px", marginLeft: "1vw" })}
`;

// Navbar left Items together*/
const LeftItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  flex: 1;
  height: 100%;
  ${mobile({
    display: "none",
  })}
`;

// Navbar Center Items together
const CenterItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 2;
  ${mobile({ display: "hidden" })}
`;

// Navbar Right Items together*/
const RightItems = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-right: 150px;
  height: 100%;
  ${mobile({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  })}
`;

// Container for each separate item in Navbar
const MenuItem = styled.div`
  width: 120px;
  position: relative;
  color: #272727f5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  ${mobile({ fontSize: "10px" })}
`;

// Container for each separate item in Navbar
const IconsContainer = styled.div`
  width: 50px;
  color: #a0a0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
`;

// Searchbar Component
const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  color: #b2b2b2;
  ${mobile({ display: "none" })}
  &:focus {
    outline: 0.1px solid lightgrey;
    border-radius: 5px;
  }
`;

export const Navbar = () => {
  /*order quantity displayed on the Cart in Navbar */
  const quantity = useSelector((state) => state.cart.quantity);

  /*useNavigate to switch pages*/
  const navigate = useNavigate();

  /*NavigateDir depends on custome directory*/
  const NavigateDir = (directory) => {
    navigate(directory);
  };

  return (
    <Container>
      <Wrapper>
        <LeftItems>
          <Logo
            onClick={() => {
              NavigateDir("/");
            }}
          >
            AKT
          </Logo>
          <MenuItem
            style={{ color: "red" }}
            onClick={() => {
              NavigateDir("/products/new");
            }}
          >
            NEW IN SHOP
          </MenuItem>
          <MenuItem
            onClick={() => {
              NavigateDir("/products/men");
            }}
          >
            MEN
          </MenuItem>
          <MenuItem
            onClick={() => {
              NavigateDir("/products/women");
            }}
          >
            WOMEN
          </MenuItem>
        </LeftItems>
        <CenterItems>
          {" "}
          <IconsContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search.."></SearchInput>
          </IconsContainer>
        </CenterItems>
        <RightItems>
          <MenuItem
            onClick={() => {
              NavigateDir("/login");
            }}
          >
            SIGN IN
          </MenuItem>
          <MenuItem
            onClick={() => {
              NavigateDir("/register");
            }}
          >
            REGISTER
          </MenuItem>
          <IconsContainer>
            <Favorite
              onClick={() => {
                NavigateDir("/products/favorites");
              }}
            />
          </IconsContainer>
          <IconsContainer>
            <Badge
              onClick={() => {
                NavigateDir("/cart");
              }}
              badgeContent={quantity}
              color="error"
            >
              <CartIcon color="red" />
            </Badge>
          </IconsContainer>
        </RightItems>
      </Wrapper>
      <Announcement>FREE SHIPPING OVER 50$ ORDERS</Announcement>
    </Container>
  );
};
