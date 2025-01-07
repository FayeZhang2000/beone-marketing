"use client";
import NavigationBar from "./components/NavigationBar";
import "./styles/globals.css";
import styled from "styled-components";
import { FaRegCalendarAlt } from "react-icons/fa";
const Index = () => {
  return (
    <IndexWrapper>
      <NavigationBar />
      <MainContent>
        <MainTitle>
          Empower Your Business,
          <br />
          All in <span>ONE</span>
        </MainTitle>
        <MainSubTitle>
          Simplify, optimize, and elevate your operations with BeOne’s solutions
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
    </IndexWrapper>
  );
};
const IndexWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
const MainContent = styled.div`
  /* border: 1px solid green; */
  position: relative;
  padding: 20px 214px;
  height: calc(100vh - 64px);
  max-width: 100%;
`;
const MainTitle = styled.div`
  color: var(--text);
  font-family: var(--primary-font);
  font-size: 128px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.56px;

  span {
    color: var(--primary-color);
  }
`;
const MainSubTitle = styled.div`
  color: var(--text);
  font-family: var(--primary-font);
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 939px;
  margin-top: 10px;
`;

const Shape = styled.div`
  position: absolute;
  bottom: -70px;
  left: -10px;
  z-index: 10;
`;
const Image = styled.img`
  z-index: 2;
  max-width: 100%;
  height: auto;
  display: block;
`;
const DemoButton = styled.button`
  width: 304px;
  height: 81px;
  border-radius: 8px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--white);
  padding: 16px;
  border: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 50px;
  cursor: pointer;
  position: relative;
  z-index: 100;
`;
const DemoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Index;
