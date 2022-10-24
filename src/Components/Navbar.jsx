import React from "react";
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
  background-color: #c7c7c71d;
`;
const Announcement = styled.div`
  height: 2vh;
  background-color: #810c0cf5;
  //background-color: #272727f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid grey;
  color: white;
  font-size: 14px;
  ${mobile({
    height: "1vh",
    fontSize: "10px",
  })}
`;
const Wrapper = styled.div`
  background-color: #f9f9f9;
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
    backgroundColor: "yelow",
  })}
`;
const Logo = styled.h2`
  font-size: 40px;
  flex: 2;
  color: #272727f5;
  ${mobile({ fontSize: "20 px", marginLeft: "10px" })}
`;
const LeftItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  flex: 1;
  height: 100%;
  ${mobile({
    marginLeft: "5px",
    display: "flex",
    JustifyContent: "center",
    width: "100%",
  })}
`;
const CenterItems = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const RightItems = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 150px;
  flex: 1;
  height: 100%;
  ${mobile({ display: "none" })}
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
  width: 100px;
  border: none;
  font-size: 14px;
  color: grey;
  ${mobile({ display: "none" })}
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftItems>
          <Logo>AKT</Logo>
          <MenuItem style={{ color: "red" }}>NEW IN SHOP</MenuItem>
          <MenuItem>MEN</MenuItem>
          <MenuItem>WOMEN</MenuItem>
        </LeftItems>
        <CenterItems></CenterItems>
        <RightItems>
          <IconsContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search.."></SearchInput>
          </IconsContainer>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <IconsContainer>
            <Favorite />
          </IconsContainer>
          <IconsContainer>
            <Badge badgeContent={10} color="error">
              <CartIcon color="red" />
            </Badge>
          </IconsContainer>
        </RightItems>
      </Wrapper>
      <Announcement>FREE SHIPPING OVER 50$ ORDERS</Announcement>
    </Container>
  );
};
