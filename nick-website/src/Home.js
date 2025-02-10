import React from 'react';
import { FcAreaChart, FcTodoList } from "react-icons/fc";
import { FaSpotify, FaShoppingBasket } from "react-icons/fa";
import { TbBrandMinecraft } from "react-icons/tb";
import { RiTreasureMapFill } from "react-icons/ri";
import Research from './Research';
import '@fortawesome/fontawesome-free/css/all.min.css';

const aboutMe = "Hi, I'm Nicholas Bindela, a Software and Machine Learning Engineer passionate about building scalable solutions at the intersection of AI, cloud infrastructure, and product development. I have experience leading engineering teams, designing AWS-based architectures, and deploying machine learning models to production. Currently, I'm a Software Engineer II at Chewy, where I design and implement cloud-based ML pipelines for supply chain optimization. I'm also the Co-founder and Engineering Lead of a Stealth Startup, shaping the product vision and managing a team to deliver a functional MVP. Explore my projects below, and feel free to download my resume to learn more about my journey!"

const mlData = [
  {
      image: FcAreaChart,
      title: 'Commerical Credit Risk Modeling',
      github_link: 'https://github.com/njb2163/Commercial-Credit-Risk',
      description: 'Trained models to predict commercial loan defaults',
      text_color: 'text-blue-500'
  },
  {
      image: FaSpotify,
      title: 'Spotify Popularity Predictor',
      github_link: 'https://github.com/njb2163/Spotify-Popularity-Predictor',
      description: 'Trained models to predict commercial loan defaults',
      text_color: 'text-[#1ED760]'
  },
  {
      image: TbBrandMinecraft,
      title: 'Human Computational Models',
      github_link: 'https://github.com/njb2163/Human-Computational-Models?tab=readme-ov-file',
      description: 'Developed cognitive agents to simulate human behavior',
      text_color: 'text-black'
  },
];

const sweData = [
  {
      image: FcTodoList,
      title: 'Todo List App',
      github_link: 'https://github.com/njb2163/Todo-List',
      description: 'Functional To-do list built using native Javascript, HTML, and CSS',
      text_color: 'text-blue-500'
  },
  {
      image: RiTreasureMapFill,
      title: 'Quest Friender',
      github_link: 'https://github.com/njb2163/Quest-Friender-App',
      description: 'Fullstack Social Media React App',
      text_color: 'text-[#C2B280]'
  },
  {
      image: FaShoppingBasket,
      title: 'Mock Marketplace',
      github_link: 'https://github.com/njb2163/Mock-Marketplace',
      description: 'Mock marketplace webapp built using React, HTML, and CSS',
      text_color: 'text-russian-violet-600'
  },
];

const Home = () => {

  const handleResumeDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="flex flex-col flex-grow text-gray-800">
      <main className="flex flex-grow">
        {/* Left Column */}
        <div className="w-1/3 p-6 flex flex-col items-center space-y-6 border-r border-gray-300">
          <img
            src="/Nickb.png"
            alt="Headshot"
            className="w-full max-w-sm h-auto rounded-full shadow-lg border border-gray-300"
          />
          <button
            onClick={handleResumeDownload}
            className="text-white hover:text-blue-700 text-lg font-bold bg-russian-violet-600 border border-blue-500 w-full px-6 py-2 rounded-lg transition-transform transform hover:scale-105 text-center"
            >
            <i className="fa-regular fa-file-pdf"></i> Resume
          </button>
          <a
            href="https://www.linkedin.com/in/nicholasbindela/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 text-lg font-bold bg-blue-500 border border-blue-500 w-full px-6 py-2 rounded-lg transition-transform transform hover:scale-105 text-center"
          >
            <i className="fab fa-linkedin mr-2"></i>LinkedIn
          </a>
          <a
            href="https://github.com/njb2163"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600 text-lg font-bold w-full px-6 py-2 bg-[#2dba4e] rounded-lg transition-transform transform hover:scale-105 text-center"
          >
            <i className="fab fa-github mr-2"></i>GitHub
          </a>
        </div>

        {/* Right Column */}
        <div className="w-2/3 p-6 mx-auto text-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
            <hr className="w-3/4 mt-2 border-t-2 border-gray-300 mx-auto" />
            <p className="w-3/4 mt-4 text-lg mx-auto text-left">
              {aboutMe}
            </p>
          </div>
          <div className="flex flex-grow space-x-6">
            <div className="w-1/2">
              <Research inputData={sweData} title={"Software Engineering"} showSeeAll={false} />
            </div>
            <div className="w-1/2">
              <Research inputData={mlData} title={"Machine Learning and AI"} showSeeAll={false} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
