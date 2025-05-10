import React from 'react';

const ScoreBoard = ({ score, streak, highScore }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">{score}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">Streak</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">{streak}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">High Score</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">{highScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard; 