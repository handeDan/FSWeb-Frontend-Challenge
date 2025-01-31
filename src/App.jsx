import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import "./index.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Switcher from "./components/Switcher";
import { LanguageContext } from "./context/LanguageContext";
import "flowbite";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const { translations } = useContext(LanguageContext);

  return (
    <div>
      {!translations && <div className="loading">Loading...</div>}
      <Switcher />
      <Header />
      <Main />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
