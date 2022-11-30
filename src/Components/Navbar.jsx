/* 👇 This is Nav bar Component  	
 cretaed and styled with Styled Component 
 including all the necessary menu items 
*/

import React from "react";

import styled from "styled-components";

import { publicRequest, currentUser } from "../services";

// import useNavigate to redirect to pages
import { useNavigate } from "react-router-dom";

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

import { updateCart } from "../redux/cartRedux";

import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";

//import localStorage from "redux-persist/es/storage";

// all Components Container
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: flex-start;
`;

// Searchbar Component
const SearchInput = styled.input`
  border: none;
  font-size: 14px;
  color: #434343;
  padding-left: 0px;
  border-radius: 5px;
  width: 100%;
  ${mobile({ display: "none" })}
  &:focus {
    outline: 0.1px solid lightgrey;
    border-radius: 5px;
  }
`;
const SearchResultContainer = styled.li`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  margin-left: 20;
  position: fixed;
  margin-top: 20px;
  border-radius: 10px;
  // outline: 0.1px solid green;
  background-color: white;
`;

const SearchText = styled.p`
  transition: 0.1s ease-in;
  margin: 0px;
  max-width: 100%;
  font-size: 14px;
  font-size: 14px;
  height: 15px;
  cursor: pointer;
  color: #6b6b6b;
  padding: 5px;
  flex: 1;
  :hover {
    border-radius: 10px;
    background-color: #f3f3f3;
  }
`;

export const Navbar = () => {
  const dispatch = useDispatch();

  /*order quantity displayed on the Cart in Navbar */
  const cart = useSelector((state) => state.cart);

  const cartQuantity = useSelector((state) => state.cart.quantity);

  const productAdded = useSelector((state) => state.cart.productAdded);

  const productRemoved = useSelector((state) => state.cart.productremoved);

  const favorites = useSelector((state) => state.favorite.favorites.length);

  const favoritesQuantity = useSelector((state) => state.favorite.quantity);

  const [searchedProduct, setSearchedProducts] = useState("");

  /* useState hook to set products*/
  const [products, setProducts] = useState([]);

  const userId = currentUser?._id;

  const user = useSelector((state) => state.user.currentUser);

  const loggedIn = useSelector((state) => state.user.loggedIn);

  const componentDidMount = () => {
    const reloadCount = sessionStorage.getItem("reloadCount");
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  };

  /* useEffect hook to get products according to catrgory*/
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/allproducts");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  /*useNavigate to switch pages*/
  const navigate = useNavigate();

  /*NavigateDir depends on custome directory*/
  const NavigateDir = (directory) => {
    navigate(directory);
  };

  /*openProduct function to switch to Product page once pressed on product*/
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    if (user && productAdded) {
      dispatch(updateCart(cart));
    } else if (user && productRemoved) {
      dispatch(updateCart(cart));
    } else {
      console.log("nothing has changed");
    }
  }, []);

  const searchFilter = products
    .filter((product) => {
      return product.productTitle.toLowerCase().includes(searchedProduct);
    })
    .slice(0, 7);

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
            style={{ color: "#810c0cf5" }}
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
            <SearchContainer>
              <SearchInput
                onChange={(e) => {
                  setSearchedProducts(e.target.value);
                }}
                type="text"
                input={searchedProduct}
                placeholder="Search.."
              ></SearchInput>
              <SearchResultContainer>
                {searchedProduct &&
                  searchFilter.map((product, i) => (
                    <SearchText
                      key={i}
                      onClick={() => openProduct(product._id)}
                    >
                      {product.productTitle}
                    </SearchText>
                  ))}
              </SearchResultContainer>
            </SearchContainer>
          </IconsContainer>
        </CenterItems>
        <RightItems>
          {!loggedIn && (
            <MenuItem
              onClick={() => {
                NavigateDir("/login");
              }}
            >
              SIGN IN
            </MenuItem>
          )}
          {!loggedIn && (
            <MenuItem
              onClick={() => {
                NavigateDir("/register");
              }}
            >
              REGISTER
            </MenuItem>
          )}
          {loggedIn && (
            <MenuItem
              style={{ color: "#810c0cf5" }}
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("persist:root");
                //localStorage.removeItem("quantity");
                // dispatch(logOut());
                //dispatch(clearCart());
                NavigateDir("/");
                componentDidMount();
              }}
            >
              LOGOUT
            </MenuItem>
          )}
          <IconsContainer>
            <Badge
              onClick={() => {
                NavigateDir(`/favorites/:${userId}`);
              }}
              badgeContent={favorites}
              color="error"
            >
              <Favorite color="grey" />
            </Badge>
          </IconsContainer>
          {
            <IconsContainer>
              <Badge
                onClick={() => {
                  NavigateDir(`/cart/:${userId}`);
                }}
                badgeContent={loggedIn ? cartQuantity : cartQuantity}
                color="error"
              >
                <CartIcon color="red" />
              </Badge>
            </IconsContainer>
          }
        </RightItems>
      </Wrapper>
      <Announcement>FREE SHIPPING OVER € 50 ORDERS</Announcement>
    </Container>
  );
};
