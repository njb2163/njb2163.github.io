import React from 'react';
import { useNavigate } from 'react-router-dom';

const projectData = [
  {
    image: './logo.svg',
    title: 'Mock Marketplace',
    github_link: 'https://github.com/njb2163/Mock-Marketplace',
    video_link: 'https://www.youtube.com/embed/ue8pXSCVKyU?si=DAnlnPGBnzdNsvbu',
    description: 'Test',
  },
  {
    image: './logo.svg',
    title: 'Mock Marketplace',
    github_link: 'https://github.com/njb2163/Mock-Marketplace',
    video_link: 'https://www.youtube.com/embed/ue8pXSCVKyU?si=DAnlnPGBnzdNsvbu',
    description: 'Test',
  },
  {
    image: './logo.svg',
    title: 'Mock Marketplace',
    github_link: 'https://github.com/njb2163/Mock-Marketplace',
    video_link: 'https://www.youtube.com/embed/ue8pXSCVKyU?si=DAnlnPGBnzdNsvbu',
    description: 'Test',
  },
  {
    image: './logo.svg',
    title: 'Mock Marketplace',
    github_link: 'https://github.com/njb2163/Mock-Marketplace',
    video_link: 'https://www.youtube.com/embed/ue8pXSCVKyU?si=DAnlnPGBnzdNsvbu',
    description: 'Test',
  },
  {
    image: './logo.svg',
    title: 'Mock Marketplace',
    github_link: 'https://github.com/njb2163/Mock-Marketplace',
    video_link: 'https://www.youtube.com/embed/ue8pXSCVKyU?si=DAnlnPGBnzdNsvbu',
    description: 'Test',
  },
];

const Projects = ({ maxItems, showSeeAll }) => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate('/project-details', { state: { project } });
  };


  const displayedProjects = maxItems
    ? projectData.slice(0, maxItems)
    : projectData;

  return (
    <div className="w-full max-w-med">
      <div className="mt-12 px-6">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <hr className="w-3/4 mt-2 border-t-2 border-gray-300 mx-auto" />
      </div>

      <div className="mt-8 space-y-6 overflow-y-auto h-128">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="relative mx-auto w-3/4 p-6 bg-blue-100 text-gray-800 rounded-lg shadow-lg transition-all hover:scale-105"
          >
            <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <img
                className="h-24 w-24 rounded-full border border-gray-300"
                src={require(`${project.image}`)}
                alt="Project Thumbnail"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                
              </div>
            </div>
            </a>
          </div>
        ))}
        {showSeeAll && (
          <div
            className="relative mx-auto w-3/4 p-6 bg-blue-100 text-gray-800 rounded-lg shadow-lg transition-all hover:scale-110"
            onClick={() => navigate('/projects')}
          >
            <div className="flex justify-between text-center sm:text-left text-2xl">
              <h2 className="text-lg font-semibold text-gray-800">See all projects</h2>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;