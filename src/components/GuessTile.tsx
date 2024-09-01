import { Grid2, Paper } from "@mui/material";
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
  // const kmPerHour = ((<span className="fraction"><span className="top">km</span><span className="bottom">h</span></span>))
  // const miPerHour = ((<span className="fraction"><span className="top">mi</span><span className="bottom">h</span></span>))
  switch (field) {
    case 'origin':
      return <img
        src={`https://flagcdn.com/h40/${countryCode[guess[field]]}.png`}
        height="40"
        alt={guess[field]}
      />;

    case 'range':
      return `${guess[field][1]} mi`;

    case 'speed':
      return `${guess[field][1]} mi/h`;

    default:
      return guess[field];
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
        return <KeyboardArrowUpIcon sx={sx} />
      } else if (guess[field] < correct[field]) {
        return <KeyboardArrowDownIcon sx={sx} />
      }
      break;

    case 'range':
    case 'speed':
      if (guess[field][1] > correct[field][1]) {
        return <KeyboardArrowUpIcon sx={sx} />
      } else if (guess[field][1] < correct[field][1]) {
        return <KeyboardArrowDownIcon sx={sx} />
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
  const classNames = ['guess-tile'];
  if (guess[field] === correct[field]) {
    classNames.push('guess-tile-correct');
  } else if (isCloseGuess(guess, correct, field)) {
    classNames.push('guess-tile-close');
  }

  return (
    <Grid2 size={3}>
      <Paper
        elevation={8}
        className={classNames.join(' ')}
      >
        <h3>{renderHeader(field)}</h3>
        <h2>
          {renderField(guess, field)}
          {renderIndicator(guess, correct, field)}
        </h2>
      </Paper>
    </Grid2>
  );
};

export default GuessTile;
