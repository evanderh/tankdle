import React, { useState } from 'react';

interface GuessInputProps {
  onGuessSubmit: (guess: string) => void;
}

const GuessInput = ({ onGuessSubmit }: GuessInputProps) => {
  const [guess, setGuess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleSubmit = () => {
    onGuessSubmit(guess);
    setGuess('');
  };

  return (
    <div className="guess-input">
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GuessInput;