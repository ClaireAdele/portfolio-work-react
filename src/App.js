import './App.css';
import { Router } from "@reach/router";
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import TechSkills from "./components/TechSkills/TechSkills"
import NavBar from "./components/App-Children/NavBar"
import Contact from "./components/App-Children/Contact"

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Contact />
      </header>
      <Router>
        <About path="/about" />
        <Experience path="/experience" />
        <TechSkills path= "/technical_skills"/>
      </Router>
    </div>
  );
}

export default App;
