import React, { useState } from 'react';
import { Autocomplete, TextField, Button } from '@mui/material';

import { tanks } from '../core/tanks';

const suggestions = tanks.map(tank => tank.name)

interface GuessInputProps {
  onGuessSubmit: (guess: string) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuessSubmit }) => {
  const [guess, setGuess] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (_: any, value: string) => {
    setGuess(value);
  };

  const handleSubmit = () => {
    onGuessSubmit(guess);
    setGuess('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="guess-input">
      <Autocomplete
        freeSolo
        options={suggestions}
        inputValue={guess}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter your guess"
            variant="outlined"
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        style={{ marginTop: '8px' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default GuessInput;
