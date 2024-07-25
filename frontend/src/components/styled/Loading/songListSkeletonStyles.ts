// src/styles/songListSkeletonStyles.ts
import { css } from "@emotion/react";

export const skeletonCardStyle = css`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  height: 300px; /* Match card image height */
  width: 280px; /* Match card width */
  border-radius: 7px;
  margin: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

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
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;
