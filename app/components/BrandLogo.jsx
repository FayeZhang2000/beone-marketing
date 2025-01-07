import * as React from "react";
import styled from "styled-components";

export function BrandLogo() {
  return (
    <LogoWrapper>
      <LogoText>BE</LogoText>
      <LogoTextHighlight>ONE</LogoTextHighlight>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  color: #000;
  width: 141px;
  font: 24px Inter, sans-serif;
`;

const LogoText = styled.span`
  font-family: Plus Jakarta Sans, sans-serif;
  line-height: 30px;
`;

const LogoTextHighlight = styled.span`
  font-family: Plus Jakarta Sans, sans-serif;
  font-weight: 800;
  line-height: 30px;
  color: rgba(40, 135, 231, 1);
`;
