import { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import GuessInput from './GuessInput';
import Feedback from './Feedback';

import { TankImage } from "../core/tanks";
import { checkGuess } from '../core/logic';

interface Props {
  tankImage: TankImage,
}

const Game = ({ tankImage }: Props) => {
  const [feedback, setFeedback] = useState('');

  const handleGuessSubmit = (guess: string) => {
    const result = checkGuess(guess, tankImage.tank);
    setFeedback(result);
  };

  return (
    <>
      <ImageDisplay
        imageUrl={tankImage.url}
        attribution={tankImage.attribution}
      />
      <GuessInput onGuessSubmit={handleGuessSubmit} />
      <Feedback feedback={feedback} />
    </>
  );
};

export default Game;
