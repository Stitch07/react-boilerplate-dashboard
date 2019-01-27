/* eslint-disable no-underscore-dangle */
// taken from https://github.com/mui-org/material-ui's gatsby example
// DO NOT TOUCH. this is needed to make material UI props work

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[50],
      main: purple[400],
      dark: purple[700],

    },
    text: {
      primary: '#FFFFFF'
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
  },
  typography: {
    useNextVariants: true
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}