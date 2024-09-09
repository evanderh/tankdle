import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

import ImageDisplay from './ImageDisplay';
import TankInput from './TankInput';
import GuessesList from './GuessesList';
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
        <h1>Correct!</h1>
      }
      {status === 'loss' &&
        <h1>Better luck next time!</h1>
      }
      {status !== 'playing' &&
        <h4>
          The answer was:
          {' '}
          <a href={tankImage.tank.url}>{tankImage.tank.name}</a>
        </h4>
      }

      <TankInput
        onGuessSubmit={handleGuessSubmit}
        numGuesses={guesses.length}
        status={status}
      />

      <GuessesList
        guesses={guesses}
        tank={tankImage.tank}
      />
    </>
  );
};

export default Game;
