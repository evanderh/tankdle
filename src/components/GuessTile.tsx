import { Grid2, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Tank } from "../core/types";
import { countryCode } from "../core/tanks";

function renderHeader(field: keyof(Tank)) {
  switch (field) {
    case 'count':
      return 'Produced:';

    case 'mass':
      return 'Tons:';

    case 'engine':
      return 'Horsepower:';

    case 'range':
      return 'Op. Range:'

    case 'speed':
      return 'Top Speed:'

    default:
      return '';
  }
}

function renderField(guess: Tank, field: keyof(Tank)) {
  const sx = {
    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
    fontWeight: 'bold',
  };
  const lh = { lineHeight: { xs: '1.5rem', md: '2rem' } };

  switch (field) {
    case 'type':
      return <Typography sx={{ ...sx, ...lh }}>{guess[field]}</Typography>;

    case 'origin':
      return <img
        src={`flags/${countryCode[guess[field]]}.png`}
        height="48"
        alt={guess[field]}
        style={{ border: '1px solid grey' }}
      />;

    case 'range':
      return <Typography sx={sx}>{guess[field][1]} mi</Typography>;

    case 'speed':
      return <Typography sx={sx}>{guess[field][1]} mi/h</Typography>;

    default:
      return <Typography sx={sx}>{guess[field]}</Typography>;
  }
}

function renderIndicator(guess: Tank, correct: Tank, field: keyof(Tank)) {
  const sx = { marginLeft: '8px' };

  switch (field) {
    case 'year':
    case 'count':
    case 'mass':
    case 'engine':
      if (guess[field] > correct[field]) {
        return <KeyboardArrowDownIcon sx={sx} />
      } else if (guess[field] < correct[field]) {
        return <KeyboardArrowUpIcon sx={sx} />
      }
      break;

    case 'range':
    case 'speed':
      if (guess[field][1] > correct[field][1]) {
        return <KeyboardArrowDownIcon sx={sx} />
      } else if (guess[field][1] < correct[field][1]) {
        return <KeyboardArrowUpIcon sx={sx} />
      }
      break;

    default:
      break;
  }
}

function isCloseGuess(guess: Tank, correct: Tank, field: keyof(Tank)) {
  switch (field) {
    case 'year':
      // within 10 years
      return Math.abs(guess.year - correct.year) <= 10;

    case 'count':
      // within 20%
      return Math.abs(guess[field] - correct[field]) <= (correct[field] * 0.2);

    case 'mass':
      // within 20%
      return Math.abs(guess[field] - correct[field]) <= (correct[field] * 0.2);

    case 'engine':
      // within 20%
      return Math.abs(guess[field] - correct[field]) <= (correct[field] * 0.2);

    case 'range':
      // within 20%
      return Math.abs(guess[field][1] - correct[field][1]) <= (correct[field][1] * 0.2);

    case 'speed':
      // within 20%
      return Math.abs(guess[field][1] - correct[field][1]) <= (correct[field][1] * 0.2);
  
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
  let backgroundColor = 'default';
  if (guess[field] === correct[field]) {
    backgroundColor = '#385';
  } else if (isCloseGuess(guess, correct, field)) {
    backgroundColor = '#ba2';
  }

  return (
    <Grid2 size={{ xs: 6, md: 3 }}>
      <Paper
        sx={{
          height: { xs: '64px', sm: '64px', md: '80px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: backgroundColor,
        }}
        elevation={12}
      >
        <Stack>
          <Typography sx={{ fontWeight: 'bold' }}>
            {renderHeader(field)}
          </Typography>
          <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {renderField(guess, field)}
            {renderIndicator(guess, correct, field)}
          </Stack>
        </Stack>
      </Paper>
    </Grid2>
  );
};

export default GuessTile;
