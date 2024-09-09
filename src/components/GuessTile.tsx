import { Grid2, Paper, Typography, useMediaQuery } from "@mui/material";
import { Tank } from "../core/types";
import GuessTileBody from "./GuessTileBody";
import { countryCode } from "../core/tanks";

function getTileLabel(field: keyof(Tank)) {
  switch (field) {
    case 'count':
      return 'Produced:';
    case 'mass':
      return 'Mass:';
    case 'engine':
      return 'Engine:';
    case 'range':
      return 'Op. Range:';
    case 'speed':
      return 'Top Speed:';
    default:
      return '';
  }
}

function isCloseGuess(guess: Tank, correct: Tank, field: keyof(Tank)) {
  switch (field) {
    case 'year': // within 10 years
      return Math.abs(guess.year - correct.year) <= 10;
    case 'count': // within 20%
      return Math.abs(guess[field] - correct[field]) <= (correct[field] * 0.2);
    case 'mass': // within 20%
      return Math.abs(guess[field] - correct[field]) <= (correct[field] * 0.2);
    case 'engine': // within 20%
      return Math.abs(guess[field] - correct[field]) <= (correct[field] * 0.2);
    case 'range': // within 20%
      return Math.abs(guess[field].mi - correct[field].mi) <= (correct[field].mi * 0.2);
    case 'speed': // within 20%
      return Math.abs(guess[field].mi - correct[field].mi) <= (correct[field].mi * 0.2);
    default:
      return false;
  }
}

interface Props {
  field: keyof(Tank),
  guess: Tank,
  correct: Tank,
};

const GuessTile = ({ field, guess, correct }: Props) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let backgroundColor = 'default';
  if (guess[field] === correct[field]) {
    backgroundColor = '#385';
  } else if (isCloseGuess(guess, correct, field)) {
    backgroundColor = '#ba2';
  }

  return (
    <Grid2 size={{ xs: 6, sm: 3 }}>
      <Paper
        sx={{
          height: { xs: '56px', sm: '72px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: backgroundColor,
        }}
        elevation={12}
      >
        <Typography sx={{ fontWeight: 'bold' }}>
          {getTileLabel(field)}
        </Typography>
        {
          field === 'origin'
          ?
          <img
            src={`flags/${countryCode[guess[field]]}.png`}
            height="48"
            alt={guess[field]}
            style={{ border: `1px solid ${isDarkMode ? 'white' : 'black'}` }}
          />
          :
          <GuessTileBody
            field={field}
            guess={guess}
            correct={correct}
          />
        }
      </Paper>
    </Grid2>
  );
};

export default GuessTile;
