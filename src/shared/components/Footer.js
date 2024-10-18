import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #2c4755;
  color: white;
  text-align: center;
  padding: 30px 10px;
`;
const Footer = () => {
  return (
    <FooterContainer>
      © 2023
      <span style={{ color: "#10cab7" }}> Abdelrahman </span>
      All Right Reserved
    </FooterContainer>
  );
};

export default Footer;
