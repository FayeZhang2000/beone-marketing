"use client";
import * as React from "react";
import styled from "styled-components";
import { BrandLogo } from "./BrandLogo";
import { BsHeadset } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "../styles/NavigationBar.scss";
const NavigationBar = () => {
  const navigationItems = [
    { text: "Products", isActive: true },
    { text: "Services", isActive: false },
    { text: "Industries", isActive: false },
    { text: "Resources", isActive: false },
  ];

  return (
    <HeaderWrapper>
      <NavContainer className="nav-container">
        <LeftSection className="nav-left">
          <BrandLogo />
          <NavLinks>
            {navigationItems.map((item, index) => (
              <NavLink key={index} $isActive={item.isActive}>
                {item.text}
              </NavLink>
            ))}
          </NavLinks>
        </LeftSection>
        <RightSection className="nav-right">
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
  padding: 0.875rem 13.3125rem;
  height: 4rem;
`;

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  color: var(--navBar-text-color);
  font: 1rem/1.75rem var(--primary-font);

  @media (max-width: 1280px) {
    gap: 1.25rem;
  }
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
  width: 18.75rem;
  height: 2.25rem;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background-color: white;
  margin-left: 0.625rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 2.5rem;
  font-size: 0.875rem;
  border-radius: 4px;
  &:focus {
    border: 1px solid var(--primary-color);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  color: var(--blue-gray);
  left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChevronIcon = styled.div`
  position: absolute;
  color: var(--border);
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactButton = styled.button`
  margin-left: 0.625rem;
  width: 9.5625rem;
  height: 2.25rem;
  border-radius: 4px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white);
  padding: 0.25rem 0.5rem;
  border: none;
  cursor: pointer;
  font: 700 1rem/1.75rem var(--primary-font);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--black);
  }

  &:hover {
    background-color: var(--black);
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NavigationBar;
