"use client";
import NavigationBar from "./components/NavigationBar";
import "./styles/globals.css";
import styled from "styled-components";
import { FaRegCalendarAlt } from "react-icons/fa";
const Index = () => {
  return (
    <>
      <NavigationBar />
      <IndexWrapper>
        <MainContent>
          <MainTitle>
            Empower Your Business,
            <br />
            All in
            <span>ONE</span>
            <CircleImg src="/images/yellow_circle.png" alt="circle"></CircleImg>
          </MainTitle>
          <MainSubTitle>
            Simplify, optimize, and elevate your operations with BeOne’s
            solutions
          </MainSubTitle>
          <DemoButton>
            <DemoIcon>
              <FaRegCalendarAlt size={20} />
            </DemoIcon>
            <span>Get FREE Demo</span>
          </DemoButton>
          <Shape>
            <Image src="/images/shapes.png" alt="shapes"></Image>
          </Shape>
        </MainContent>
        <Partners>
          <span>Trusted Partner</span>
          <LogoContainer>
            <img src="/images/Light_logo.png" alt="Light_logo" />
            <img src="/images/Apega_logo.png" alt="Apega_logo" />
            <img src="/images/PhoneBox_logo.png" alt="PhoneBox_logo" />
          </LogoContainer>
        </Partners>
      </IndexWrapper>
    </>
  );
};
const IndexWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 1.25rem 13.375rem;
  @media (max-width: 1024px) {
    padding: 1.25rem 6.875rem;
  }
`;
const MainContent = styled.div`
  /* border: 1px solid green; */
  position: relative;
  z-index: 0;
  height: calc(100vh - 4rem);
  max-width: 100%;
`;
const MainTitle = styled.div`
  color: var(--text);
  font-family: var(--primary-font);
  font-size: 8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.56px;

  span {
    color: var(--primary-color);
    position: relative;
    display: inline-block;
    z-index: 1;
  }

  @media (max-width: 1536px) {
    font-size: 7.75rem;
  }
`;
const CircleImg = styled.img`
  position: absolute;
  top: 9rem;
  left: 15rem;
  width: 22rem;
  height: 12.5rem;
  pointer-events: none;
  z-index: -1;
  @media (max-width: 1890px) {
    top: 19rem;
  }
  @media (max-width: 1260px) {
    top: 28rem;
  }
`;
const MainSubTitle = styled.div`
  color: var(--text);
  font-family: var(--primary-font);
  font-size: 3rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 58.69rem;
  margin-top: 10px;
  @media (max-width: 990px) {
    font-size: 2rem;
    width: 40rem;
  }
`;

const Shape = styled.div`
  position: absolute;
  bottom: -3.5rem;
  left: -13.75rem;
  z-index: 10;
  width: 100vw;
`;
const Image = styled.img`
  z-index: 2;
  max-width: 100%;
  height: auto;
  display: block;
`;
const DemoButton = styled.button`
  width: 19rem;
  height: 5rem;
  border-radius: 8px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--white);
  padding: 1rem;
  border: none;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin-top: 3.125rem;
  cursor: pointer;
  position: relative;
  z-index: 100;
`;
const DemoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Partners = styled.div`
  span {
    padding: 3.25rem 0;
    display: flex;
    height: 12.2rem;
    flex-shrink: 0;
    align-self: stretch;

    color: #383838;

    text-align: right;
    font-family: var(--primary-font);
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 5.625rem;
  }
`;
const LogoContainer = styled.div`
  height: 3.25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
`;
export default Index;
