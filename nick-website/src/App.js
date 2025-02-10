import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Research from "./Research";
import Header from "./Header";
import Footer from "./Footer";
import ProjectDetails from "./ProjectDetails";
import './output.css';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/project-details" element={<ProjectDetails />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
