import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Box, Grid2, IconButton, Modal, Paper, Stack, SxProps, Typography } from '@mui/material';
import { useState } from 'react';
import { getDayStreak, getGamesPlayed, getGamesWon, getWinStreak } from '../core/game';

const modalSx: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

const statsTileSx: SxProps = {
  height: '64px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

interface Props {
  clearGuesses?: () => void;
};

const Header = ({ clearGuesses }: Props) => {
  const [statsIsOpen, setStatsOpen] = useState(false);
  const [helpIsOpen, setHelpOpen] = useState(false);
  const statsOpen = () => setStatsOpen(true);
  const statsClose = () => setStatsOpen(false);
  const helpOpen = () => setHelpOpen(true);
  const helpClose = () => setHelpOpen(false);
  const clearStorage = () => {
    clearGuesses && clearGuesses();
    localStorage.clear();
  }
  const played = getGamesPlayed();
  const wins = getGamesWon();

  return (
    <Stack
      direction="row"
      sx={{
        borderBottom: '4px solid #38f',
        marginBottom: '0.5em',
        padding: '0',
      }}
    >
      <Button
        color="inherit"
        component={Link}
        to="/"
        sx={{
          fontSize: '2em',
          lineHeight: '1em',
          letterSpacing: '-0.05em',
          fontWeight: 'bold',
          padding: '0 0.25em',
          marginBottom: '-0.25em',
        }}
      >
        Tankdle
      </Button>

      <div style={{ flexGrow: 1 }}></div>

      <IconButton color="inherit" component={Link} to="/">
        <HomeIcon />
      </IconButton>

      <IconButton color="inherit" component={Link} to="/archive">
        <CalendarTodayIcon />
      </IconButton>

      <IconButton color="inherit" onClick={statsOpen}>
        <BarChartIcon />
      </IconButton>
      <Modal
        open={statsIsOpen}
        onClose={statsClose}
      >
        <Box sx={modalSx}>
          <Typography variant="h4" component="h2">
            Your Stats
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Paper elevation={12} sx={statsTileSx}>
                <div style={{ fontWeight: 'bold' }}>Wins</div>
                <div>{wins}</div>
              </Paper>
            </Grid2>
            <Grid2 size={4}>
              <Paper elevation={12} sx={statsTileSx}>
                <div style={{ fontWeight: 'bold' }}>Losses</div>
                <div>{played - wins}</div>
              </Paper>
            </Grid2>
            <Grid2 size={4}>
              <Paper elevation={12} sx={statsTileSx}>
                <div style={{ fontWeight: 'bold' }}>Win Rate</div>
                <div>{(wins / played)
                  ? `${(wins / played * 100).toFixed(0)}%`
                  : '-'
                }</div>
              </Paper>
            </Grid2>
            <Grid2 size={6}>
              <Paper elevation={12} sx={statsTileSx}>
                <div style={{ fontWeight: 'bold' }}>Day Streak</div>
                <div>{ getDayStreak() }</div>
              </Paper>
            </Grid2>
            <Grid2 size={6}>
              <Paper elevation={12} sx={statsTileSx}>
                <div style={{ fontWeight: 'bold' }}>Win Streak</div>
                <div>{ getWinStreak() }</div>
              </Paper>
            </Grid2>
          </Grid2>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      <IconButton color="inherit" onClick={helpOpen}>
        <HelpOutlineIcon />
      </IconButton>
      <Modal
        open={helpIsOpen}
        onClose={helpClose}
      >
        <Box sx={modalSx}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            How to play
          </Typography>
          <ul style={{ textAlign: 'left' }}>
            <li>
              Use the image to guess the name of the tank.
              <img
                src='./img/guess.png'
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
                alt='Guess image'
              />
            </li>
            <li>
              After incorrect guesses, the tiles will change color to show how close you are,
              and arrows will indicate whether your guess is too high or too low for each attribute.
            </li>
            <li>
              Keep going until you guess the tank. You have 6 guesses!
            </li>
          </ul>

          <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
             About
          </Typography>
          <ul style={{ textAlign: 'left' }}>
            <li>
              New tanks daily at midnight, check the <Link to="/archive">archive</Link> to play previous tanks/days.
            </li>
            <li>
              I know, I know... not everything in Tankdle is technically a tank.
              Some are actually armored vehicles or self-propelled guns, but it's
              more fun and challenging to use a variety of vehicles.
            </li>
          </ul>

          <Button
            variant='contained'
            onClick={clearStorage}
            sx={{ margin: '1em' }}
          >
            Clear storage
          </Button>
        </Box>
      </Modal>

    </Stack>
  );
};

export default Header;
