import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  position: fixed;
  z-index: 9999;
  overflow: hidden;
  background-color: white;
  top:0;
`;
const Announcement = styled.div`
  height: 2vh;
  background-color: #810c0cf5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid grey;
  color: white;
  font-size: 12px;
  ${mobile({
    height: "2vh",
    fontSize: "10px",
  })}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  width: 100%;
  ${mobile({
    display: "flex",
    JustifyContent: "center",
    width: "100%",
  })}
`;
const Logo = styled.h2`
  font-size: 40px;
  flex: 2;
  color: #272727f5;
  cursor: pointer;
  ${mobile({ fontSize: "20 px", marginLeft: "1vw" })}
`;
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
const CenterItems = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  ${mobile({ display: "hidden" })}
`;
const RightItems = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 150px;
  flex: 1;
  height: 100%;
  ${mobile({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  })}
`;

const MenuItem = styled.div`
  display: flex;
  position: relative;
  font-size: 12px;
  width: 120px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #272727f5;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  ${mobile({ fontSize: "10px" })}
`;
const IconsContainer = styled.div`
  font-size: 14px;
  width: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #a0a0a0;
  cursor: pointer;
  flex: 1;
`;
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
  const navigate = useNavigate();
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
              badgeContent={10}
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
