import styled from "@emotion/styled";



const Container = styled.div`
  width: 100%;
  background-color: #f5eded;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Center the content horizontally */
  margin: 0 auto;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Main = styled.main`
  padding: 20px;
`;


export { Container, Header, Main };