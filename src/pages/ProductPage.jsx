/* * 👇
 *This is ProductPage
 *Created and styled with Styled Component
 *It will display product images and details
 */

//import react, useState and useEffect hooks
import { React, useState, useEffect } from "react";

// import styled Components
import styled from "styled-components";

// import Navbar
import { Navbar } from "../Components/Navbar";

// import useLocation to get product id
import { useLocation } from "react-router-dom";

// import addProdt redcer from cart Slice
import { addProduct } from "../redux/cartRedux";

// import useDispatch to call reducers
import { useDispatch } from "react-redux";

// import public requests
import { publicRequest } from "../services";

// import unique id uuid
import { v4 as uuidv4 } from "uuid";

// all components container
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// items wrapper
const Wrapper = styled.div`
  height: 90%;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 10px;
`;

// product lookbook images wrapper
const LookBookWrapper = styled.div`
  display: flex;
  gap: 75px;
  flex: 1;
`;

// lookbook main image
const LookBook = styled.img`
  height: 80vh;
  width: 30vw;
  object-fit: scale-down;
`;

// look book images container
const LookBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 75px;
  gap: 2px;
`;

// lookbook small images
const LookBookImages = styled.img`
  width: 75px;
  height: 100px;
  object-fit: scale-down;
  transition: 0.1s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
// product details
const ProductInfo = styled.div`
  margin-left: 75px;
  height: 80vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  font-family: "Lexend", sans-serif;
`;

// product name
const Title = styled.h2`
  font-weight: 400;
  margin: 0%;
`;
// product price
const PriceTag = styled.p`
  //font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  font-family: "Lexend", sans-serif;
  margin-bottom: 20px;
`;
// colors
const Color = styled.select`
  height: 40px;
  width: 100%;
  border: 0.1px solid rgba(89, 89, 89, 0.1);
  font-family: "Lexend", sans-serif;
  font-weight: 300;
  font-size: 15px;
  &:focus {
    border-bottom: 2px solid black;
    box-shadow: none;
    border: none;
  }
`;
// add to cart button
const AddToCartBtn = styled.button`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  font-family: "Lexend", sans-serif;
  border: 0.1px solid black;
  background-color: #040404;
  color: #ffffff;
  &:hover {
    background-color: grey;
  }
`;

// product details
const ProductDescription = styled.p`
  font-family: "Lexend", sans-serif;
  font-weight: 200;
`;

const ProductPage = () => {
  // get location
  const location = useLocation();

  // get product id
  const productId = location.pathname.split("/")[2];
  // set product according to the response
  const [product, setProduct] = useState();
  // set product quantity 0 before adding it to cart
  const [quantity, setQuantity] = useState(0);
  // set product color
  const [color, setColor] = useState();
  // set main image as nothing
  const [mainImage, setMainImage] = useState("");
  // dispatch to call redux reducers
  const dispatch = useDispatch();

  // useEffect hook with getProduct function to get a single product with product id dependency
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

  // handle the main image of product based on imageSrc argument
  const handleMainImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  /* handleAddProductToCart function is responsible
   for calling addProduct reducer and dispatching product along with quantity, color and a unique id*/
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

  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <LookBookWrapper>
          <LookBookContainer>
            {/* on click set the main image as the image being clicked on */}
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
          {/*if not main image then show first image*/}
          <LookBook src={!mainImage ? product?.images[0] : mainImage} />
        </LookBookWrapper>

        <ProductInfo>
          {/*product title props */}
          <Title>{product?.productTitle}</Title>
          {/*product price props */}
          <PriceTag>€ {product?.price}</PriceTag>
          {/*product color props */}
          <Color
            defaultValue={"DEFAULT"}
            onChange={(e) => setColor(e.target.value)}
          >
            <option
              value="DEFAULT"
              style={{ fontFamily: "Lexend,sanSerif" }}
              disabled
            >
              SELECT COLOR
             </option>
            {product?.colors.map((color) => (
              <option key={color}>{color.toUpperCase()}</option>
            ))}
          </Color>
          {/*if color is added then call handleAddProductToCart function */}
          <AddToCartBtn onClick={color && handleAddProductToCart}>
            ADD
          </AddToCartBtn>
          {/*product description props */}
          <ProductDescription>{product?.description}</ProductDescription>
        </ProductInfo>
      </Wrapper>{" "}
    </Container>
  );
};

export default ProductPage;
