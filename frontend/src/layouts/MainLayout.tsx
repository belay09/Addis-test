import React, { ReactNode } from "react";
import { Main,Container,Header } from "./styled/styled";
import Hero from "../components/hero"; // Import the Hero component
interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <div>
      <Hero /> {/* Use the Hero component instead of the Header */}

        <Main>{children}</Main>
      </div>
    </Container>
  );
};

export default MainLayout;
