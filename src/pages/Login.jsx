import React, { useState } from "react";
import styled from "styled-components";
import { login_bg } from "../data";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${login_bg.img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: '70%',
  })}
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
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  margin: 10px 0px;
  width: 40%;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  &:disabled{
    cursor: not-allowed;
    opacity: 0.5;
    color: teal;
  }
`;

const Link = styled.a`
  font-size: 12px;
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);


  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          {/* <Link>FORGOT PASSWORD?</Link> */}
          <Link href="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
