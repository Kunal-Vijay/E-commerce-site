import React, { useState } from "react";
import styled from "styled-components";
import { reg_bg } from "../data";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${reg_bg.img1});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
  cursor: pointer;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  &:disabled {
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
  width: 100%;
`;

const Error = styled.span`
  margin-top: 5px;
  color: red;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const createAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    if (
      username === "" ||
      password === "" ||
      name === "" ||
      lastName === "" ||
      email === ""
    ) {
      setError("Please fill all the fields");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    try {
      const res = await publicRequest.post(`/auth/register`, {
        username: username,
        email: email,
        password: password,
      });
      if (res) {
        login(dispatch, { username, password });
      }
    } catch (error) {
      setError("Something went wrong...");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <Error>{error}</Error>}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={createAccount} disabled={isFetching}>CREATE</Button>
          <Link href="/login">Already have account? LOGIN</Link>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
