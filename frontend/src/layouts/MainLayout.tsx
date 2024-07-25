import React, { ReactNode } from "react";
import { Main,Container } from "./styled/styled";
import Hero from "../components/hero"; // Import the Hero component
interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Hero /> 
        <Main>{children}</Main>
    </Container>
  );
};
export default MainLayout;