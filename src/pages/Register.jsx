import styled from "styled-components";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";
import { useState } from "react";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #555555;
  font-weight: bolder;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #640000;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, { email, username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input type="password" placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
