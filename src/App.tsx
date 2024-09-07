import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container  } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Home from './pages/Home';
import Tanks from './pages/Tanks';
import { useEffect, useState } from 'react';
import Header from './components/Header';

const getTheme = (mode: 'dark' | 'light') =>
  createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: 'Monaco, "Courier New", monospace',
    },
  });

const getInitialTheme = () => {
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return userPrefersDark ? 'dark' : 'light';
};

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      const userPrefersDark = event.matches;
      setMode(userPrefersDark ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  });

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed maxWidth='sm'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tanks" element={<Tanks />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
