import { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import GuessInput from './GuessInput';
import Feedback from './Feedback';
import { TankImage } from "../core/tanks";

export type GameStatus = 'playing' | 'win' | 'loss';

interface Props {
  tankImage: TankImage,
}

const Game = ({ tankImage }: Props) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [status, setStatus] = useState<GameStatus>('playing');

  const handleGuessSubmit = (guess: string) => {
    if (guess === tankImage.tank.name) {
      setStatus('win');
    } else if (guesses.length >= 5) {
      setStatus('loss');
    }
    setGuesses([...guesses, guess])
  };

  return (
    <>
      <ImageDisplay
        imageUrl={tankImage.url}
        attribution={tankImage.attribution}
        status={status}
      />
      <br />

      <GuessInput
        onGuessSubmit={handleGuessSubmit}
        guessesRemaining={6-guesses.length}
        status={status}
      />
      <br />

      <Feedback
        guesses={guesses}
        status={status}
        tank={tankImage.tank}
      />
    </>
  );
};

export default Game;
