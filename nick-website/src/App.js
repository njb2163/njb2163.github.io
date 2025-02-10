import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import './output.css';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
