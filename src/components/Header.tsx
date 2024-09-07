import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import { Box, IconButton, Stack } from '@mui/material';

const Header = () => {
  return (
    <Stack direction="row">
      <Button
        color="inherit"
        component={Link}
        to="/"
        sx={{ textDecoration: 'underline' }}
      >
        Tankdle
      </Button>

      <div style={{ flexGrow: 1 }}></div>

      <Box>
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
      </Box>
    </Stack>
  );
};

export default Header;
