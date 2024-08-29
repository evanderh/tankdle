import React, { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import GuessInput from './GuessInput';
import Feedback from './Feedback';
import { checkGuess } from '../core/logic';
import { getTankImage } from '../core/images';

const tank = getTankImage();

const App: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleGuessSubmit = (guess: string) => {
    const result = checkGuess(guess, tank.name);
    setFeedback(result);
  };

  return (
    <div className="App">
      <h1>Tankdle</h1>
      <ImageDisplay
        imageUrl={tank.url}
        attribution={tank.attribution}
      />
      <GuessInput onGuessSubmit={handleGuessSubmit} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;