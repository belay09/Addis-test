/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ThirdImage from "../../assets/second.jpg";
<<<<<<< HEAD
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
=======

const songCardStyles = css`
  position: relative;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 300px;
  overflow: hidden;
  height: 300px;
  border-radius: 10px;
  background: url(${ThirdImage}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  transition: background-color 0.3s ease; /* Color transition on hover */

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); /* Darken the background color on hover */
  }

  h1 {
    margin: 0;
    width: 100%;
    font-weight: 1000;
    font-size: 1.8rem;
  }

  p {
    margin: 3px 0;
    font-size: 1.2rem;
  }
  .card-buttons {
    display: flex;
    justify-content: right;
    margin-top: 10px;

    button {
      padding: 5px 10px;
      margin: 0 5px;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .delete {
      background-color: #E9463F;
      color: #fff;
    }
    
    .delete:hover {
      background-color: #d2362b; /* Slightly darker on hover */
      color: #fff;
    }
    
    .edit {
      background-color: #007bff;
      color: #fff;
    }
    
    .edit:hover {
      background-color: #0056b3;
      color: #fff;
    }
    
  }
>>>>>>> 4d892c6 (front done)
`;

const cardParent = css`
display: flex;
flex-wrap: wrap;
<<<<<<< HEAD
justify-content: center;
gap: 20px;
=======
>>>>>>> 4d892c6 (front done)
`;


export { songCardStyles, cardParent };