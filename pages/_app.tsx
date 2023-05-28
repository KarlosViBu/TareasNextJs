import { EntriesProvider } from '@/context/entries';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UiProvider } from '@/context/ui';
import '@/styles/globals.css';
import { lightTheme, darkTheme } from '@/themes';
import { SnackbarProvider } from 'notistack';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <EntriesProvider>
        <UiProvider>
          <ThemeProvider theme={darkTheme}>
          {/* <ThemeProvider theme={ lightTheme }> */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )

}
