import React, { useState, useEffect } from 'react';
import EmojiGrid from './components/EmojiGrid';
import ScoreBoard from './components/ScoreBoard';
import GameOverModal from './components/GameOverModal';
import { emojiMap, getRandomEmoji } from './data/emojiMap';
import BedrockProvider from "./BedrockProvider";
import Header from "./components/Header";
import AuthCallback from "./pages/AuthCallback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentEmoji, setCurrentEmoji] = useState(getRandomEmoji());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('emojiChainHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }

    // Check system dark mode preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update dark mode class on document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleEmojiSelect = (selectedEmoji) => {
    if (emojiMap[currentEmoji].includes(selectedEmoji)) {
      // Correct selection
      setCurrentEmoji(selectedEmoji);
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      
      // Update high score if needed
      if (score + 1 > highScore) {
        setHighScore(score + 1);
        localStorage.setItem('emojiChainHighScore', (score + 1).toString());
      }
    } else {
      // Wrong selection
      setIsGameOver(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentEmoji(getRandomEmoji());
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <BedrockProvider>
      <Router>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/" element={
              <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
                <div className="container mx-auto px-4 py-8">
                  {/* Dark mode toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className="fixed top-4 right-4 p-2 rounded-lg bg-white dark:bg-gray-800 
                             shadow-md hover:shadow-lg transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? '🌞' : '🌙'}
                  </button>

                  <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Emoji Chain
                  </h1>

                  <ScoreBoard score={score} streak={streak} highScore={highScore} />

                  <div className="text-center mb-8">
                    <div className="text-8xl mb-4 animate-bounce">
                      {currentEmoji}
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      Choose a related emoji:
                    </p>
                  </div>

                  <EmojiGrid
                    options={emojiMap[currentEmoji]}
                    onSelect={handleEmojiSelect}
                  />

                  {isGameOver && (
                    <GameOverModal
                      score={score}
                      onPlayAgain={handlePlayAgain}
                    />
                  )}
                </div>
              </div>
            } />
          </Routes>
        </main>
      </Router>
    </BedrockProvider>
  );
}

export default App; 