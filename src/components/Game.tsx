import { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import GuessInput from './GuessInput';
import Feedback from './Feedback';

import { Tank } from "../core/tanks";
import { checkGuess } from '../core/logic';

interface Props {
  tank: Tank,
}

const Game = ({ tank }: Props) => {
  const [feedback, setFeedback] = useState('');

  const handleGuessSubmit = (guess: string) => {
    const result = checkGuess(guess, tank);
    setFeedback(result);
  };

  return (
    <>
      <ImageDisplay
        imageUrl={tank.url}
        attribution={tank.attribution}
      />
      <GuessInput onGuessSubmit={handleGuessSubmit} />
      <Feedback feedback={feedback} />
    </>
  );
};

export default Game;
