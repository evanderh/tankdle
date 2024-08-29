import React, { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import GuessInput from './GuessInput';
import Feedback from './Feedback';

const checkGuess = (userGuess: string, correctAnswer: string): string => {
  if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
    return 'Correct!';
  }
  return 'Try again!';
};

const App: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const tankImageUrl = './tank.jpg'; // Replace with actual image logic
  const correctAnswer = 'M1 Abrams'; // Example correct answer

  const handleGuessSubmit = (guess: string) => {
    const result = checkGuess(guess, correctAnswer);
    setFeedback(result);
  };

  return (
    <div className="App">
      <h1>Tankdle</h1>
      <ImageDisplay imageUrl={tankImageUrl} />
      <GuessInput onGuessSubmit={handleGuessSubmit} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;