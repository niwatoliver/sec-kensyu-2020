import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: process.env.PRIMARY_COLOR.replace('\\', ''),
    },
    secondary: {
      main: process.env.SECONDARY_COLOR.replace('\\', ''),
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
