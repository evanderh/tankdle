import { Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Tank } from "../core/types";

function getFieldValue(tank: Tank, field: keyof(Tank)) {
  switch (field) {
    case 'range':
    case 'speed':
      return tank[field].mi;
      
    default:
      return tank[field];
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

interface Props {
  field: keyof(Tank),
  guess: Tank,
  correct: Tank,
}

const GuessTileBody = ({ field, guess, correct }: Props) => {
  const guessValue = getFieldValue(guess, field);
  const correctValue = getFieldValue(correct, field);

  return (
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
  );
}

export default GuessTileBody;
