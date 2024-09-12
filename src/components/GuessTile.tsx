import { Grid2, Paper, Typography, useMediaQuery } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Tank } from "../core/types";
import { continentCode, countryCode } from "../core/tanks";

function getFieldValue(tank: Tank, field: keyof(Tank)) {
  switch (field) {
    case 'range':
    case 'speed':
      return tank[field].mi;
    default:
      return tank[field];
  }
}

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

function getFieldUnits(field: keyof Tank) {
  switch (field) {
    case 'mass':
      return ' t';
    case 'engine':
      return ' hp';
    case 'range':
      return ' mi';
    case 'speed':
      return ' mph';
    default:
      return '';
  }
}

function getIndicator<T>(guessValue: T, correctValue: T) {
  if (guessValue > correctValue) {
    return <KeyboardArrowDownIcon sx={{ verticalAlign: 'middle' }} />;
  } else if (guessValue < correctValue) {
    return <KeyboardArrowUpIcon sx={{ verticalAlign: 'middle' }} />;
  }
}

function isCloseGuess(guess: Tank, correct: Tank, field: keyof(Tank)) {
  switch (field) {
    case 'year': // within 10 years
      return Math.abs(guess.year - correct.year) <= 10;
    case 'origin': // same continent
      return continentCode[guess[field]] == continentCode[correct[field]];
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
  const guessValue = getFieldValue(guess, field);
  const correctValue = getFieldValue(correct, field);

  let backgroundColor = 'default';
  if (guessValue === correctValue) {
    backgroundColor = '#385';
  } else if (isCloseGuess(guess, correct, field)) {
    backgroundColor = '#ba2';
  }

  return (
    <Grid2 size={{ xs: 6, sm: 3 }}>
      <Paper
        sx={{
          height: { xs: '64px', sm: '72px' },
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
            src={`flags/${countryCode[guess['origin']]}.png`}
            height="48"
            alt={guess['origin']}
            style={{ border: `1px solid ${isDarkMode ? 'white' : 'black'}` }}
          />
          :
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              lineHeight: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 'bold',
            }}
          >
            {guessValue}
            {getFieldUnits(field)}
            {['year', 'count', 'mass', 'engine', 'range', 'speed'].includes(field) &&
              getIndicator(guessValue, correctValue)
            }
          </Typography>
        }
      </Paper>
    </Grid2>
  );
};

export default GuessTile;
