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

function App() {
  return (
    <div>
      <LanguageProvider>
        <ThemeProvider>
          <Switcher />
          <Header />
          <Main />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
