// ChartStyles.ts
import { css } from "@emotion/react";

export const chartContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; /* Center charts */
  margin-bottom: 16px;
`;

export const chartItem = css`
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
