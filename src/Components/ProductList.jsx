import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
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
  console.log(filters, cat, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3005/api/products/allproducts?category=${cat}`
            : "http://localhost:3005/api/products/allproducts"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

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
    <Wrapper>
      {filters
        ? filteredProducts.map((product) => (
            <ProductCard  key={product._id} product={product} />
          ))
        : setFilteredProducts(products)}
    </Wrapper>
  );
};

export default ProductList;
