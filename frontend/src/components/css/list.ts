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
  height: 240px;
  background: url(${ThirdImage}) no-repeat center center;
  background-size: cover;
  border-radius: 7px 7px 0 0;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    margin: 0;
    padding: 0 5px;
    width: 100%;
    font-weight: 600;
    font-size: 1.6rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 5px 0;
    padding: 0 5px;
    font-size: 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}

.card-buttons {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 7px 7px;

  button {
    flex: 1;
    padding: 10px 0;
    margin: 0 5px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-weight: 600;
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
    background-color: #17a2b8;
  }

  .edit:hover {
    background-color: #138496;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
`;

const cardParent = css`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`;


export { songCardStyles, cardParent };