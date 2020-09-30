import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles({
  root: {
  },
});

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: 'dark',
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      },
      background: {
        default: '#232323',
        dark: '#181818',
        paper: '#232323'
      }
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
