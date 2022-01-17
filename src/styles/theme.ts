import { createTheme } from '@mui/material/styles'

const font = "'Montserrat', sans-serif"

const theme = createTheme({
  typography: {
    fontFamily: font
  },
  palette: {
    primary: {
      main: '#00bcd4',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff9800'
    }
  }
})

export default theme
