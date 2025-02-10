import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-800 text-white">
            <div className="flex justify-center space-x-8">
                <a
                    href="https://github.com/njb2163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-transform transform hover:scale-105"
                >
                    <i className="fab fa-github text-3xl"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/nicholasbindela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-transform transform hover:scale-105"
                >
                    <i className="fab fa-linkedin text-3xl"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;