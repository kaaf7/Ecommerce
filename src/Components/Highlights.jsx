import React from "react";
import styled from "styled-components";
import HighlightCard from "./HighlightCard";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c7c7c71d;
`;
const Wrapper = styled.div`
  height: 100%;
  gap:25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  
`;
const Highlights = () => {
  return (
    <Container>
      <Wrapper>
        <HighlightCard
          color="red"
          link="https://lp.cosstores.com/app001prod?set=source[/52/06/52066288e5d14f8ef1182c77de0e88a0ddd50f5a.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"
        ></HighlightCard>
        <HighlightCard link="https://lp.cosstores.com/app001prod?set=source[/2a/d8/2ad8b54b100ea1274c8ac14ff53939745ca5569f.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></HighlightCard>
        <HighlightCard link="https://lp.cosstores.com/app001prod?set=source[/67/a9/67a9a76a301509f2a140eb82e9fd3cb2442a7fe6.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[2]&call=url[file:/product/main]"></HighlightCard>
        <HighlightCard link="https://lp.cosstores.com/app001prod?set=source[/7e/a7/7ea78bf746257b6db2878e1d8ff56d7f37f15a28.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></HighlightCard>
      </Wrapper>
    </Container>
  );
};

export default Highlights;
