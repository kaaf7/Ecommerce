/* *👇
 *This is a Product List  Component
 *Styled with Styled Components
 *It will show a grid of all products that are displyed Inside of Product Cards
 *It will be displayed in products page based on categories like women's cloths or men's
 */

// import React
import React from "react";

// import Styled Components
import styled from "styled-components";

// import useState and useEffect Hook from React
import { useState, useEffect } from "react";

// import useSelector to get state from redux slices
import { useSelector } from "react-redux";

// import product Card for product image and infos
import ProductCard from "./ProductCard";

// import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import axios request services
import { publicRequest } from "../services";

// container of all components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 10vh;
  margin-left: 7.882vw;
  margin-right: 7.882vw;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: relative;
  ${mobile({
    gridTemplateColumns: "repeat(2, 1fr);",
  })}
`;
const ProductList = ({ filters, cat, sort }) => {
  /* useState hook to set products*/
  const [products, setProducts] = useState([]);

  // favorites state from favorite slice
  const favorites = useSelector((state) => state.favorite.favorites);

  // filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  /* useEffect hook calling getProducts function to 
  get product through a public request from DB if there is no category then show all products */

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/products/allproducts?category=${cat}`
            : `/products/allproducts`
        );
        setProducts(res.data);
      } catch (err) {}
    };

    getProducts();
  }, [cat, favorites]);

  // useEffect to filter products according to products, catrgory, filters
  useEffect(() => {
    if (filters) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value.toLowerCase())
          )
        )
      );
    }
  }, [products, filters]);

  // useEffect to sort Products according Ascending and Descending price
  useEffect(() => {
    if (sort === "ascending") {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {/* if products are filtered show only filtered Products else show all Products*/}
      {filters &&
        filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} category="products" />
        ))}
    </Container>
  );
};

export default ProductList;
