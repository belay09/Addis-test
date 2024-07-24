// Hero.tsx
import React from 'react';
import styled from "@emotion/styled";
import ThirdImage from "../assets/hero.jpg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${ThirdImage}) no-repeat center center;
  height: 400px;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;
const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: auto;
  align-self: center;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>Addis Software Test Project</HeroTitle>
      <HeroSubtitle>Building the future, one line of code at a time.</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;