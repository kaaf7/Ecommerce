import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const uniqueId = uuidv4();


//dummy data
const productArray = [
  {
    title: "prouct",
    price: "15",
    id: uniqueId,
    images: [ 
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    id: uniqueId,
    price: "35",
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "52",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    id: uniqueId,
    price: "35",
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "52",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "15",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    id:uniqueId,
    price: "35",
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "52",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    id: uniqueId,
    price: "35",
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "52",
    id: uniqueId,
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
];
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
const ProductList = () => {
  return (
    <Wrapper>
      {productArray.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default ProductList;
