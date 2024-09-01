import { Grid2, Paper } from "@mui/material";
import { Tank } from "../core/types";
import { TankOriginToCountryCode } from "../core/tanks";

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

function renderField(tank: Tank, field: keyof(Tank)) {
  // const kmPerHour = ((<span className="fraction"><span className="top">km</span><span className="bottom">h</span></span>))
  // const miPerHour = ((<span className="fraction"><span className="top">mi</span><span className="bottom">h</span></span>))
  switch (field) {
    case 'origin':
      return (
        <img
          src={`https://flagcdn.com/h40/${TankOriginToCountryCode[tank.origin]}.png`}
          height="40"
          alt={tank[field]}
        />
      );

    case 'range':
      return `${tank[field][1]} mi`;

    case 'speed':
      return `${tank[field][1]} mi/h`;

    default:
      return tank[field];
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
      return Math.abs(guess[field][0] - correct[field][0]) <= (correct[field][0] * 0.2);

    case 'speed':
      // within 20%
      return Math.abs(guess[field][0] - correct[field][0]) <= (correct[field][0] * 0.2);
  
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
        <p>{renderHeader(field)}</p>
        <h2 className="guess-tile-body">
          {renderField(guess, field)}
        </h2>
      </Paper>
    </Grid2>
  );
};

export default GuessTile;
