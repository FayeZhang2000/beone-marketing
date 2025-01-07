"use client";
import * as React from "react";
import styled from "styled-components";
import { BrandLogo } from "./BrandLogo";
import { BsHeadset } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NavigationBar = () => {
  const navigationItems = [
    { text: "Products", isActive: true },
    { text: "Services", isActive: false },
    { text: "Industries", isActive: false },
    { text: "Resources", isActive: false },
  ];

  return (
    <HeaderWrapper>
      <NavContainer>
        <LeftSection>
          <BrandLogo />
          <NavLinks>
            {navigationItems.map((item, index) => (
              <NavLink key={index} $isActive={item.isActive}>
                {item.text}
              </NavLink>
            ))}
          </NavLinks>
        </LeftSection>
        <RightSection>
          <SearchWrapper>
            <SearchInput />
            <SearchIcon>
              <CiSearch size={20} />
            </SearchIcon>
            <ChevronIcon>
              <MdOutlineKeyboardArrowRight size={24} />
            </ChevronIcon>
          </SearchWrapper>
          <ContactButton>
            <ContactIcon>
              <BsHeadset size={20} />
            </ContactIcon>
            <span>Contact Sales</span>
          </ContactButton>
        </RightSection>
      </NavContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
  display: flex;
  width: 100%;
  padding: 14px 213px;
  height: 64px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1497px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  color: var(--navBar-text-color);
  font: 16px/28px var(--primary-font);
`;

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? "#2887e7" : "inherit")};
  font-weight: ${(props) => (props.$isActive ? "700" : "500")};
`;

const SearchWrapper = styled.div`
  width: 300px;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: white;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 40px 0 40px;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border: 1px solid var(--primary-color);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  color: var(--blue-gray);
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChevronIcon = styled.div`
  position: absolute;
  color: var(--border);
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactButton = styled.button`
  width: 153px;
  height: 36px;
  border-radius: 4px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  padding: 4px 8px;
  border: none;
  cursor: pointer;
  font: 700 16px/28px var(--primary-font);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--black);
  }
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NavigationBar;
