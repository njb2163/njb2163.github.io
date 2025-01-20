import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

const About = () => <h1>About Page</h1>;
const Projects = () => <h1>Projects Page</h1>;

export default App;
