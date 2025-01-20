import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleResumeDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleGoToProjects = () => {
    navigate("/projects");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Portfolio!</h1>
      <p>
        Hi, I'm Nicholas Bindela, a passionate Software Engineer
        with a focus on Machine Learning and Cloud Infrastructure. 
        Explore my projects and get to know more about my journey!
      </p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleResumeDownload}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download Resume
        </button>
        <button
          onClick={handleGoToProjects}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
