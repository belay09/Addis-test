// src/styles/skeletonStyles.ts
import { css } from "@emotion/react";

export const skeletonBarStyle = css`
background: linear-gradient(90deg, #d0d0d0 25%, #b0b0b0 50%, #d0d0d0 75%);  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  height: 300px;
  width: 400px; /* Fixed width */
  border-radius: 8px;
  margin: 10px;
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
     width: 400px; /* Fixed width */
  box-sizing: border-box;
  /* Ensure charts don’t overflow container */
  max-width: 100%;

  @media (max-width: 1200px) {
    width: 350px; /* Adjust for medium screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width for small screens */
    max-width: none;
  }
`;

export const skeletonPieStyle = css`
background: linear-gradient(90deg, #d0d0d0 25%, #b0b0b0 50%, #d0d0d0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  margin: 0 auto;
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const skeletonContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const skeletonChartContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
