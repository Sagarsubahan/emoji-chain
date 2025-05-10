import React from 'react';

const EmojiGrid = ({ options, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {options.map((emoji, index) => (
        <button
          key={index}
          onClick={() => onSelect(emoji)}
          className="text-4xl md:text-5xl p-4 rounded-lg bg-white dark:bg-gray-800 
                   shadow-lg hover:shadow-xl transform hover:scale-110 
                   transition-all duration-200 ease-in-out
                   dark:hover:bg-gray-700 hover:bg-gray-50
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Select ${emoji}`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiGrid; 