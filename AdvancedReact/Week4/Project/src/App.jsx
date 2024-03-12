import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
