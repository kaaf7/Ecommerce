import React from "react";
import styled from "styled-components";
import HighlightCard from "./HighlightCard";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c7c7c71d;
  ${mobile({
    height: "100vh",
    marginBottom: "10vh",
  })}
`;
const Wrapper = styled.div`
  height: 100%;
  gap: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  ${mobile({
    marginLeft: "1vw",
    marginRight: "1vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  })}
`;
const Highlights = () => {
  return (
    <Container>
      <Wrapper>
        <HighlightCard
          color="red"
          link="https://lp.cosstores.com/app001prod?set=source[/52/06/52066288e5d14f8ef1182c77de0e88a0ddd50f5a.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"
        ></HighlightCard>{" "}
        <HighlightCard
          color="red"
          link="https://lp.cosstores.com/app001prod?set=source[/52/06/52066288e5d14f8ef1182c77de0e88a0ddd50f5a.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"
        ></HighlightCard>{" "}
      </Wrapper>
    </Container>
  );
};

export default Highlights;
