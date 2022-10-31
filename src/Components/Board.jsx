import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

// dummy products data
const productArray = [
  {
    title: "prouct",
    price: "15",
    id: "890312312sassdas21838031",
    images: [
      "https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },{
    title: "prouct",
    price: "15",
    id: "890312312sassdas21838031",
    images: [
      "https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: "890312321qw838031",
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
    id: "890312312sassdas21838031",
    images: [
      "https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: "890312321qw838031",
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
    id: "890312312sassdas21838031",
    images: [
      "https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: "890312321qw838031",
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
    id: "890312312sassdas21838031",
    images: [
      "https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
  {
    title: "prouct",
    price: "95",
    id: "890312321qw838031",
    images: [
      "https://iili.io/DXRnKG.jpg",
      "https://iili.io/DXRIHl.jpg",
      "https://iili.io/DXRolf.jpg",
    ],
    colors: ["yellow", "green", "black"],
    category: ["men", "women"],
  },
];

// dummy quotes data

const dummyQuotes = [
  "YOU CAN HAVE ANYTHING YOU WANT IN LIFE IF YOU DRESS FOR IT",
  "The joy of dressing is an art ",
  "When in doubt, wear red.",
  "I make clothes. Women make fashion.",
  "We must never confuse elegance with snobbery.",
];

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;
const Wrapper = styled.div`
  display: flex;
  height: 90%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  ${mobile({
    height: "100vh",
  })}
`;
const Image = styled.img`
  flex: 1;
  height: 90%;
  object-fit: cover;
  filter: grayscale(1);
  transition: 0.1s ease-out;
  z-index: 0;
  opacity: 0.9;
  border: 0.1px solid lightgrey;
  cursor: pointer;
  &:hover {
    opacity: 1;
    filter: none;
    transition: 0.1s ease-in;
  }
  ${mobile({
    width: "90vw",
  })}
`;
const Quote = styled.p`
  position: absolute;
  margin-top: 0%;
  margin-left: 0%;
  font-size: 50px;
  color: #e13913;
  font-weight: 600;
  z-index: 1;
  ${mobile({
    fontSize: "20px",
    position: "absolute",
  })}
`;



const Board = () => {
  return (
    <Container>
      <Wrapper>
        <Quote>
          {dummyQuotes
            .sort(() => 0.5 - Math.random())
            .slice(0, 1)
            .map((quote) => quote.toUpperCase())}
        </Quote>
        {productArray
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((product) => (
            <Image src={product.images[1]}></Image>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Board;
