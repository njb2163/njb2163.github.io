import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return <div className="p-4">Project details not available.</div>;
  }

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <p className="mt-4 text-gray-600">{project.description}</p>
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-purple-600 hover:text-purple-800"
          >
            View on GitHub
          </a>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src={project.video_link}
              title={project.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
