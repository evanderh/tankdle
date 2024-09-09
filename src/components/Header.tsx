import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton, Stack } from '@mui/material';

const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        borderBottom: '4px solid #38f',
        marginBottom: '0.5em',
        padding: '0'
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
        }}
      >
        Tankdle
      </Button>

      <div style={{ flexGrow: 1 }}></div>

      <IconButton color="inherit" component={Link} to="/calendar">
        <CalendarTodayIcon />
      </IconButton>
      <IconButton color="inherit" component={Link} to="/home">
        <HomeIcon />
      </IconButton>
      <IconButton color="inherit" component={Link} to="/stats">
        <BarChartIcon />
      </IconButton>
      <IconButton color="inherit" component={Link} to="/help">
        <HelpOutlineIcon />
      </IconButton>
    </Stack>
  );
};

export default Header;
