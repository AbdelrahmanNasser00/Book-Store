import React from "react";
import styled from "styled-components";
import SocialLinks from "./Navbar/SocialLinks";

const FooterContainer = styled.div`
  background-color: #2c4755;
  color: white;
  text-align: center;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightAndName = styled.div``;
const Footer = () => {
  return (
    <FooterContainer>
      <RightAndName>
        © 2023
        <span style={{ color: "#10cab7" }}> Abdelrahman </span>
        All Right Reserved
      </RightAndName>

      <SocialLinks />
    </FooterContainer>
  );
};

export default Footer;
