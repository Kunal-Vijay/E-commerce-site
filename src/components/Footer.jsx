import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { payment } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: '#eadddd',
  })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Payment = styled.img`
  width: 50%;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio
          reprehenderit sed nesciunt minima quo, magni quia deserunt similique
          hic.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          20 Cooper Square, New York, NY 10003, USA.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 5678
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          contact@lama.dev
        </ContactItem>
        <Payment src={payment.img} />
      </Right>
    </Container>
  );
};

export default Footer;
