import { createMuiTheme } from '@material-ui/core/styles'

export const headingFontFamily = 'Noto Sans TC, sans-serif'
export const bodyFontFamily = 'Noto Sans TC, sans-serif'

export const fontFamily = [
  'Noto Sans TC',
  'sans-serif',
  '-apple-system',
  '"Helvetica Neue"',
  'Arial',
]

export const typography = {
  useNextVariants: true,
  fontSize: 16,
  fontFamily: fontFamily.join(','),
  h1: {
    fontFamily: headingFontFamily,
  },
  h2: {
    fontFamily: headingFontFamily,
    fontSize: 24,
    fontWeight: 500,
  },
  h3: {
    fontFamily: headingFontFamily,
    fontSize: 22,
    fontWeight: 500,
  },
  h4: {
    fontFamily: fontFamily,
    fontSize: 18,
    fontWeight: 500,
  },
  h5: {
    fontFamily: headingFontFamily,
    fontSize: 16,
    fontWeight: 500,
  },
  h6: {
    fontFamily: headingFontFamily,
    fontSize: 14,
    fontWeight: 500,
  },
  body1: {
    fontFamily: bodyFontFamily,
    fontSize: 14,
  },
  body2: {
    fontFamily: bodyFontFamily,
    fontSize: 12,
  },
}

export default createMuiTheme({
  typography,
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    secondary: {
      main: '#3e474f',
      contrastText: '#fff',
    },
    button: {
      primary: '#ffd731',
      secondary: '#ffd731',
    },
  },
})

export const styledComponentTheme = {
  main: {
    backgroundColor: 'white',
    color: 'black',
  },
  dark: {
    backgroundColor: '#3e474f',
    color: 'white',
  },
  secondaryBackgroundColor: '#f2f2f3', // grey
  subtextColor: '#ffb500', // organe
}