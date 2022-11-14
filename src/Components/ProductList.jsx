/* 👇 This is a Product List  Component 
      it will show a grid of all products that are displyed 
      inside of Product Cards 
      and it will be displayed in products page
*/

import React from "react";

import styled from "styled-components";

// import product Card for product image and infos
import ProductCard from "./ProductCard";

import { useState, useEffect } from "react";

// import responsive Settings from responsive.js
import { mobile } from "../responsive";

// import axios request services
import { publicRequest } from "../services";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 10vh;
  margin-left: 150px;
  margin-right: 150px;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: relative;
`;
const ProductList = ({ filters, cat, sort }) => {
  /* useState hook to set products*/
  const [products, setProducts] = useState([]);

  /* useState hook to filter products*/
  const [filteredProducts, setFilteredProducts] = useState([]);

  /* useEffect hook to get products according to catrgory*/
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
  }, [cat]);

  /* useEffect to filter  products according to products, catrgory, filters*/
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
  }, [products, cat, filters]);

  /* useEffect to sort Products according Ascending and Descending price*/
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
      {
        /* if products are filtered show only filtered Products else show all Products*/
        filters
          ? filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          : setFilteredProducts(products)
      }
    </Container>
  );
};

export default ProductList;
