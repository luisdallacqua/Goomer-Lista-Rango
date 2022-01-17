import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/dist/shared/lib/router/router'
import theme from '../styles/theme'

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
