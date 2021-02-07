import './App.css';
import { Router } from "@reach/router";
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import TechSkills from "./components/TechSkills/TechSkills"
import NavBar from "./components/App-Children/NavBar"
import Contact from "./components/App-Children/Contact"
import Home from "./components/App-Children/Home"

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Router>
        <Home path="/"/>
        <About path="/about" />
        <Experience path="/experience" />
        <TechSkills path= "/technical_skills/*"/>
      </Router>
      <div>
      <Contact />
      </div>
    </div>
  );
}

export default App;
