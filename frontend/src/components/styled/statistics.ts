/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const AnalyticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Increased gap for better spacing */
  justify-content: space-around; /* Improved distribution */
`;

const AnalyticsTableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px; /* Increased margin for better separation */
  justify-content: space-around; /* Improved distribution */
  gap: 16px; /* Increased gap for better spacing */
`;

const AnalyticsCard = styled.div`
  padding: 5px; /* Increased padding for a more spacious look */
  border: 1px solid #ddd;
  border-radius: 10px; /* Slightly rounded corners for a softer look */
  width: calc(20% - 16px); /* Responsive width with gap consideration */
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(145deg, #f5f5f5, #ffffff); /* Subtle gradient background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out; /* Smooth transition for hover effect and background color */
  &:hover {
    transform: translateY(-5px); /* Slight lift effect on hover */
    background-color: #eaeaea; /* Change background color on hover */
  }
`;
const AnalyticsTitle = styled.h2`
  font-size: 1.5rem; /* Increased font size for better visibility */
  font-weight: 600; /* Medium weight for emphasis */
  color: #333; /* Darker color for better contrast */
  margin-bottom: 0px; /* Space below the title */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1); /* Subtle text shadow for depth */
`;
const AnalyticsText = styled.p`
  font-size: 1rem; /* Standard font size for content */
  color: #666; /* Slightly lighter color for regular text */
  line-height: 1.5; /* Increased line height for readability */
  text-align: center; /* Center align text for aesthetics in card layout */
`;


export { AnalyticsContainer, AnalyticsCard, AnalyticsTitle, AnalyticsTableContainer,AnalyticsText };