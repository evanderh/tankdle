import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation
import { Box, IconButton } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'underline' }}
          >
            Tankdle
          </Button>


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
    
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
