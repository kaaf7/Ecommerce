import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f9f9f9;

`;
const Wrapper = styled.div`
  height: 90%;
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  // background-color: lightgrey;
`;

const LookBookWrapper = styled.div`
  display: flex;
  gap: 75px;
  flex: 1;
`;
const LookBook = styled.img`
  height: 80vh;
  width: 30vw;
  object-fit: scale-down;


`;
const LookBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 75px;
  gap: 2px;
`;
const LookBookImages = styled.img`
  width: 75px;
  height: 100px;
  object-fit: scale-down;

`;

const ProductInfo = styled.div`
  margin-left: 75px;
  height: 90vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;
const Title = styled.h2`
  margin: 0%;
`;
const PriceTag = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin: 0%;
  font-family: Verdana;
  margin-bottom: 20px;
`;

const Color = styled.select`
  height: 40px;
  width: 100%;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  font-family: Tahoma;
  font-weight: bold;
  font-size: 15px;
  &:focus {
    border-bottom: 2px solid black;
    box-shadow: none;
    border: none;
  }
`;
const SizeText = styled.p`
  font-weight: 400;
  font-size: 13px;
`;
const SizeBlocks = styled.button`
  height: 35px;
  width: 35px;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  text-align: center;
  display: flex;
  background-color: white;
  justify-content: center;
  cursor: pointer;
  &:focus {
    border-bottom: 2px solid black;
  }
`;
const SizesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
const AddToCartBtn = styled.button`
  margin-top: 40px;
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  &:hover {
    background-color: grey;
  }
`;
const ProductDescription = styled.p``;

const ProductPage = () => {
  return (
    <Container>
      <Wrapper>
        <LookBookWrapper>
          <LookBookContainer>
            <LookBookImages src ="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></LookBookImages>
            <LookBookImages src ="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></LookBookImages>
            <LookBookImages src="https://lp.cosstores.com/app001prod?set=source[/47/7f/477fea231328a285e246741d1dac4b51f3650edd.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></LookBookImages>
            <LookBookImages src="https://lp.cosstores.com/app001prod?set=source[/93/af/93af209bbcbac0c437f3580a37f0084ed0182c89.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></LookBookImages>
          </LookBookContainer>
          <LookBook src="https://lp.cosstores.com/app001prod?set=source[/f0/e0/f0e025140cf9d00d92548fc87f64ff7c11565c06.jpg],origin[dam],type[LOOKBOOK],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]"></LookBook>
        </LookBookWrapper>
        <ProductInfo>
          <Title>SANDALEN MIT BLOCKABSATZ UND KARREEFÖRMIGER ZEHENP</Title>
          <PriceTag>$ 65</PriceTag>
          <Color>
            <option>BLACK</option>
            <option>YELLOW</option>
            <option>BLUE</option>
          </Color>
          <SizeText>SIZES</SizeText>
          <SizesContainer>
            <SizeBlocks>1</SizeBlocks>
            <SizeBlocks>2</SizeBlocks>
            <SizeBlocks>3</SizeBlocks>
            <SizeBlocks>1</SizeBlocks>
            <SizeBlocks>2</SizeBlocks>
            <SizeBlocks>3</SizeBlocks>
          </SizesContainer>
          <AddToCartBtn>Add</AddToCartBtn>
          <ProductDescription>
            Diese schwarzen Sandalen aus weichem Leder mit glänzendem
            Lack-Finish haben einen geschwungenen quadratischen Absatz und
            werden in einem umweltfreundlichen, chromfreien Gerbeverfahren
            hergestellt. Sie haben eine moderne Silhouette mit einer
            abgerundeten offenen Zehenpartie und einen verstellbaren,
            komfortablen Knöchelriemen.Diese schwarzen Sandalen aus weichem
            Leder mit glänzendem Lack-Finish haben einen geschwungenen
            quadratischen Absatz und werden in einem umweltfreundlichen,
            chromfreien Gerbeverfahren hergestellt. Sie haben eine moderne
            Silhouette mit einer abgerundeten offenen Zehenpartie und einen
            verstellbaren, komfortablen Knöchelriemen.
          </ProductDescription>
        </ProductInfo>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
