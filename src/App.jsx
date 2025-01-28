import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import "./index.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Switcher from "./components/Switcher";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import "flowbite";

function App() {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
          <Switcher />
          <Header />
          <Main />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
