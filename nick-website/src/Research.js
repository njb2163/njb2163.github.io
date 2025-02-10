import React from 'react';
import { useNavigate } from 'react-router-dom';


const Research = ({ inputData, title, showSeeAll }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-med h-auto">
            <div className="mt-12 px-6">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <hr className="w-3/4 mt-2 border-t-2 border-gray-300 mx-auto" />
            </div>

            <div className="mt-8 space-y-6 overflow-y-auto h-128">
                {inputData.map((research, index) => (
                    <div
                        key={index}
                        className="relative mx-auto w-3/4 p-6 bg-blue-100 text-gray-800 rounded-lg shadow-lg transition-all hover:scale-105"
                    >
                        <a
                            href={research.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${research.text_color}`}
                        >
                            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                                <research.image
                                size={70}
                                />
                                <div className="text-center sm:text-left">
                                    <h2 className="text-lg font-semibold text-gray-800">{research.title}</h2>
                                    <p className="text-gray-600">{research.description}</p>

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
                            <h2 className="text-lg font-semibold text-gray-800">See all research</h2>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Research;
