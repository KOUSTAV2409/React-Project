import React from 'react';

const Landing = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full text-center flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to Your Personal To-Do
        </h1>

        <div className="flex flex-col gap-6 md:flex-row justify-center items-center">
          <button
            className="w-56 h-14 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Create To-Do
          </button>
          <button
            className="w-56 h-14 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Recent To-Do
          </button>
          <button
            className="w-56 h-14 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Old To-Do
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
