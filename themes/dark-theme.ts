import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { Kite_One, Kotta_One, Nova_Square } from 'next/font/google';

export const novaSq = Nova_Square({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const darkTheme = createTheme({
  palette: {
      mode: 'dark',
      secondary: {
          main: '#19857b'
      },
      error: {
          main: red.A400
      },
      },

      components: {
          MuiAppBar: {
              defaultProps: {
                  elevation: 0
              },
              styleOverrides: {
                  root: {
                      backgroundColor: '#4a148c'
                  }
              }
          }
      },
      typography: {
            fontFamily: novaSq.style.fontFamily,
             // fontFamily: kiteOne.style.fontFamily,
             // fontFamily: kiteOne.style.fontFamily,
             // fontFamily: 'Farsan',
             // fontFamily: 'Coda',
             // fontFamily: 'Truculenta',
            // fontFamily: 'Courgette',
      },
});