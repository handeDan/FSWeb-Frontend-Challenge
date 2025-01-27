import Header from "./components/Header";
import Main from "./components/Main";
import Options from "./components/Options";
import Skills from "./components/Skills";
import "./index.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Options />
      <Header />
      <Main />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
