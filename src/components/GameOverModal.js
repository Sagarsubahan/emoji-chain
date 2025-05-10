import React from 'react';

const GameOverModal = ({ score, onPlayAgain }) => {
  const shareText = `I reached a chain of ${score} in Emoji Chain! Can you beat it? 🧠🔥 #EmojiChain`;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('Score copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Game Over!
        </h2>
        <p className="text-xl text-center mb-6 text-gray-600 dark:text-gray-300">
          Your score: {score}
        </p>
        <div className="space-y-4">
          <button
            onClick={onPlayAgain}
            className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 
                     text-white font-semibold rounded-lg shadow-md 
                     transition duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Play Again
          </button>
          <button
            onClick={handleShare}
            className="w-full py-3 px-6 bg-gray-200 hover:bg-gray-300 
                     dark:bg-gray-700 dark:hover:bg-gray-600
                     text-gray-800 dark:text-white font-semibold rounded-lg 
                     shadow-md transition duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Share My Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal; 