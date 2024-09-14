import { useState } from 'react';
import { Autocomplete, TextField, Button, Grid2 } from '@mui/material';

import { tankNames } from '../core/tanks';
import { maxGuesses } from '../core/game';

interface Props {
  onGuessSubmit: (guess: string) => void;
  numGuesses: number;
  isPlaying: boolean,
}

const TankInput = ({
  onGuessSubmit,
  numGuesses,
  isPlaying,
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
      {isPlaying &&
        <h4 style={{ textAlign: 'end' }}>
          Guess {1 + numGuesses} of {maxGuesses}
        </h4>
      }
      <Grid2 container spacing={1}>
        <Grid2 size="grow">
          <Autocomplete
            freeSolo
            disabled={!isPlaying}
            autoHighlight
            options={tankNames}
            inputValue={guess}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Guess the tank"
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input': { fontWeight: 'bold' },
                  '& .MuiFormLabel-root': { fontWeight: 'bold' },
                  '& .MuiOutlinedInput-notchedOutline': { borderWidth: 2 },
                }}
              />
            )}
          />
        </Grid2>
        <Grid2 size="auto">
          <Button
            onClick={handleSubmit}
            disabled={!isPlaying}
            variant="contained"
            color="primary"
            sx={{ height: '100%', fontWeight: 'bold' }}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default TankInput;
