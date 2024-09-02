import { useState } from 'react';
import { Autocomplete, TextField, Button, Grid2 } from '@mui/material';

import { tanks } from '../core/tanks';
import { GameStatus, maxGuesses } from './Game';

const suggestions = tanks.map(tank => tank.name).sort()

interface Props {
  onGuessSubmit: (guess: string) => void;
  numGuesses: number;
  status: GameStatus;
}

const GuessInput = ({
  onGuessSubmit,
  numGuesses,
  status,
}: Props) => {
  const [guess, setGuess] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (_: any, value: string) => {
    setGuess(value);
  };

  const handleSubmit = () => {
    onGuessSubmit(guess);
    setGuess('');
  };

  return (
    <>
      <h4 style={{ textAlign: 'end' }}>
        Guess {1+numGuesses} of {maxGuesses}
      </h4>
      <Grid2 container spacing={1}>
        <Grid2 size="grow">
          <Autocomplete
            freeSolo
            disabled={status !== 'playing'}
            autoHighlight
            options={suggestions}
            inputValue={guess}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Guess the tank"
                variant="outlined"
              />
            )}
          />
        </Grid2>
        <Grid2 size="auto">
          <Button
            onClick={handleSubmit}
            disabled={status !== 'playing'}
            variant="contained"
            color="primary"
            style={{ height: '100%' }}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default GuessInput;
