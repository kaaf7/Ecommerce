/* * 👇
 *This is Cart Item Component
 *Created and styled with Styled Components,
 *It will contain all the info of the a single item purchased and added in the cart
 *This component will be displayed in the cart page before checkout
 */

// import React
import React from "react";

// import Styled Components
import styled from "styled-components";

//import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import removeProduct reducer rom CartSlice to remove product from cart
import { removeProduct } from "../redux/cartRedux";

// import useDispatch to activate redux reducers
import { useDispatch } from "react-redux";

// import Navigate to redirect to pages
import { useNavigate } from "react-router-dom";

//purchased item container
const PurchasedItem = styled.div`
  width: 30vw;
  height: 20vh;
  display: flex;
  flex: 1;
  font-family: "Lexend", sans-serif;
  font-weight: 300;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 1vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

//photo of purchased single item added in cart
const PurchasedItemPhoto = styled.img`
  width: 100px;
  height: 150px;
  object-fit: scale-down;
  cursor: pointer;
`;

// Container of info for purchased single item added in cart
const PurchasedTextContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

// Text for purchased item name
const PurchasedItemName = styled.h4`
  font-family: "Lexend", sans-serif;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1px;
  ${mobile({
    fontSize: "10px",
  })}
`;

// remove product Button
const RemoveButton = styled.button`
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: center;
  font-family: "Lexend", sans-serif;
  font-weight: 400;
  align-items: center;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  padding: auto;
  border: none;
  background-color: rgb(0, 0, 0);
  cursor: pointer;

  :hover {
    background-color: rgba(86, 1, 1, 0.943);
  }
`;

// Text for purchased item details
const DetailsContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

// Text for indication of product color and price
const Indication = styled.p`
  font-weight: 400;
  margin-top: 1px;
  font-family: "Lexend", sans-serif;

  ${mobile({
    fontSize: "10px",
    flexDirection: "column",
  })}
`;

// passing purchsedProduct in CartItem component to change its props in Cart Page
const CartItem = ({ purchasedProduct }) => {
  // activate useDispatch
  const dispatch = useDispatch();
  // useNavigate to navigate pages
  const navigate = useNavigate();

  /* * handleRemoveProduct function is used to activate the 
  removeProduct reducer in cartSlice to remove product from Cart 
  as the product will be sent as an action payload
  */
  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  /* *  OpenProduct function that navigates to product when
   clicked page based on product id as an argument */
  const openProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      {" "}
      <PurchasedItem>
        {/*open Product page with openProduct fucntion*/}
        <PurchasedItemPhoto
          onClick={() => openProduct(purchasedProduct._id)}
          src={purchasedProduct?.images[0]}
        ></PurchasedItemPhoto>
        <PurchasedTextContainer>
          {/*Product Title props*/}
          <PurchasedItemName>
            {purchasedProduct?.productTitle.toUpperCase()}
          </PurchasedItemName>
          {/*Product Price props*/}
          <DetailsContainer>
            <Indication>EUR</Indication>
            <Indication>{purchasedProduct?.price}</Indication>
          </DetailsContainer>
          {/*Product Color props*/}
          <DetailsContainer>
            <Indication>COLOR</Indication>
            <Indication>{purchasedProduct.color}</Indication>
          </DetailsContainer>
          {/*remove product from Cart with onClick*/}
          <RemoveButton onClick={() => handleRemoveProduct(purchasedProduct)}>
            REMOVE
          </RemoveButton>
        </PurchasedTextContainer>
      </PurchasedItem>
    </div>
  );
};

export default CartItem;
