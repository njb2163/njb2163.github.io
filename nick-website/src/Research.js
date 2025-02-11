import React from 'react';


const Research = ({ inputData, title, showSeeAll }) => {
    const tagColors = {
        "Machine Learning": "bg-blue-500",
        "Artificial Intelligence": "bg-green-500",
        "Frontend": "bg-pink-500",
        "Backend": "bg-red-500",
        "AWS": "bg-yellow-500"
    };

    const sortedInputData = [...inputData].sort((a, b) => {
        if (a.end_date === "Present") return -1;
        if (b.end_date === "Present") return 1;
      
        return  new Date(b.end_date) - new Date(a.end_date);
      });

    return (
        <div className="w-full max-w-full md:max-w-med h-auto">
            <div className="mt-6 md:mt-12 px-4 md:px-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
                <hr className="w-full md:w-3/4 mt-2 border-t-2 border-gray-300 mx-auto" />
            </div>

            <div className="mt-4 md:mt-8 space-y-4 md:space-y-6 overflow-y-auto h-auto md:h-128">
                {sortedInputData.map((research, index) => (
                    <div
                        key={index}
                        className="relative mx-auto w-full md:w-3/4 p-4 md:p-6 bg-blue-100 text-gray-800 rounded-lg shadow-lg transition-all hover:scale-105"
                    >
                        <a
                            href={research.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${research.text_color}`}
                        >
                            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                                {typeof research.image === 'string' ? (
                                    <img src={research.image} alt={research.title} className='w-12 h-12 md:w-16 md:h-16' />
                                ) : (
                                    <research.image size={window.innerWidth < 768 ? 50 : 70} />
                                )}
                                <div className="text-center sm:text-left">
                                    <h2 className="text-md md:text-lg font-semibold text-gray-800">{research.title}</h2>
                                    <p className="text-sm text-gray-600">{research.description}</p>
                                    <p className="text-xs text-gray-600 mt-1">{research.start_date} - {research.end_date}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {research.tags && research.tags.map(tag => (
                                            <span key={tag} className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${tagColors[tag] || 'bg-gray-500'}`}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
