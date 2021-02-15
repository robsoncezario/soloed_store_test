import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {    
      maps?: {
        url?: {
          dark?: string;
          light?: string;
          world?: string;
        }
      }

      avatar?: {
        shadow?: {
          light?: string;
          dark?: string;
        },

        outline?: {
          light?: string;
          dark?: string;
        }
      }
  }
}

export default createMuiTheme({
  palette: {
    primary: {
      light:  '#ffff00',
      main:  '#ffff00'
    }
  },

  typography: {
    fontFamily: "'Montserrat'"
  }
});