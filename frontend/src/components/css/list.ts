/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ThirdImage from "../../assets/second.jpg";

const songCardStyles = css`
  position: relative;
  border: 1px solid #eee;
  margin: 15px;
  width: 280px;
  overflow: hidden;
  border-radius: 7px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .card-image {
    height: 300px;
    background: url(${ThirdImage}) no-repeat center center;
    background-size: cover;
    border-radius: 7px 7px 0 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    box-shadow: inset 0 -50px 50px rgba(0, 0, 0, 0.5);
  }

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1, p {
      margin: 0;
      padding: 0 5px;
      width: 100%;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    h1 {
      font-weight: 600;
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .card-buttons {
    display: none;
    justify-content: space-between;
    padding: 10px;
    border-radius: 0 0 7px 7px;
    position: absolute;
    top: 44%;
    left: 0;
    right: 0;

    button {
      flex: 1;
      padding: 6px 0;
      margin: 0 5px;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      font-weight: 500;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    .delete {
      background-color: #ff5c57;
    }

    .delete:hover {
      background-color: #e8413b;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .edit {
      background-color: #694666;
    }

    .edit:hover {
      background-color: #4b3450;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  &:hover .card-buttons {
    display: flex;
  }
  &:hover .card-image {
    opacity: 0.4;
  }
`;

const cardParent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export { songCardStyles, cardParent };