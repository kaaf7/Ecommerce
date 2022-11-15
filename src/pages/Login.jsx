import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { mobile } from "../responsive";

import { useState, useEffect, useRef } from "react";

import { loginStart } from "../redux/userRedux";

import { publicRequest } from "../services";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #881212ab;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("theadmin");
  const [password, setPassword] = useState("newpassworsd123");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.post(`/login`, {
          username: username,
          password: password,
        });
        setUser(res.data);
      } catch (err) {
        console.log("something went wrong");
      }
    };
    getUser();
  }, [username, password]);

  console.log(user);
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   loginStart(dispatch, { userName, passWord });
  // };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
