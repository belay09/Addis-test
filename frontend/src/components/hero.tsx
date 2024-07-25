// Hero.tsx
import React from 'react';
import styled from "@emotion/styled";
import heroImage from "../assets/hero.jpg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align items to the left */
  background: url(${heroImage}) no-repeat center center; /* Center the background image */
  width: 100%; /* Ensure the container takes full width */
  height: 400px;
  background-size: cover; /* Ensure the image covers the container */
  color: white;
  text-align: left; /* Align text to the left */
  padding: 50px 20px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 10px 20px; /* Add left margin to shift to the left */
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-left: 20px; /* Add left margin to shift to the left */
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>Song Management App</HeroTitle>
      <HeroSubtitle>A Place to browse songs easily</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;