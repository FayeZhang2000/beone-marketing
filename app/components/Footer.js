"use client";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2025 BeOne Marketing. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #222;
  color: #fff;
`;

export default Footer;
