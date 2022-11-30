import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Explore from "../Components/Explore";
import Board from "../Components/Board";
import ProductList from "../Components/ProductList";


const Container = styled.div`
  background-color: #ffffff;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-left: 150px;
  margin-top: 9vh;
  position: relative;
  height: 50px;
`;

const Filter = styled.select`
  background-color: #ffffff;
  border: none;
  border: none;
  font-size: 15px;
  font-family: bolder;
  color: grey;
  font-family: Tahoma;
  &:focus {
    outline: none;
  }
`;

const Products = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("ascending");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const location = useLocation();
  const category = location.pathname.split("/")[2];

  return (
    <Container>
      <Navbar></Navbar>
      <FilterWrapper>
        <Filter name="colors" id="colors" onChange={handleFilters}>
          <option selected disabled>
            COLOR
          </option>
          <option>GREEN</option>
          <option>BLACK</option>
          <option>BLUE</option>
          <option>YELLOW</option>
          <option>WHITE</option>
        </Filter>
        <Filter name="category" id="style" onChange={handleFilters}>
          <option selected disabled>
            STYLE
          </option>
          <option>JACKETS</option>
          <option>SHIRTS</option>
          <option>T-SHIRTS</option>
          <option>TROUSERS</option>
        </Filter>
        <Filter name="category" onChange={handleFilters}>
          <option selected disabled>
            SIZE
          </option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </Filter>

        <Filter name="category" onChange={handleFilters}>
          <option selected disabled>
            CATEGORY
          </option>
          <option>WOMEN</option>
          <option>MEN</option>
        </Filter>
        <Filter onChange={handleSort}>
          <option selected disabled>
            PRICE
          </option>
          <option value="ascending">ASCENDING</option>
          <option value="descending">DESCENDING</option>
        </Filter>
      </FilterWrapper>
      <ProductList cat={category} filters={filters} sort={sort} />
      <Board></Board>
      <Explore></Explore>
      <Footer></Footer>
    </Container>
  );
};

export default Products;
