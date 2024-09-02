import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

import ImageDisplay from './ImageDisplay';
import GuessInput from './GuessInput';
import Feedback from './Feedback';
import { TankImage } from "../core/types";

export type GameStatus = 'playing' | 'win' | 'loss';
export const maxGuesses = 6;

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
      {status === 'win' &&
        <p>Correct!</p>
      }
      {status === 'loss' &&
        <p>Better luck next time!</p>
      }
      {status !== 'playing' &&
        <>
          <p>The answer was: {tankImage.tank.name}</p>
          <MuiLink to="/tanks" component={RouterLink}>Play any tank</MuiLink>
        </>
      }

      <GuessInput
        onGuessSubmit={handleGuessSubmit}
        numGuesses={guesses.length}
        status={status}
      />

      <Feedback
        guesses={guesses}
        tank={tankImage.tank}
      />
    </>
  );
};

export default Game;
