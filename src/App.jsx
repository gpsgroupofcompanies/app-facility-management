import React, { Component } from 'react';
import AppRoute from './AppRoute';

import './App.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import './style.scss';
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F4D03F'
    },
    secondary: {
      main: '#23fsdf'
    }
  }
});
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="App" >
          <AppRoute></AppRoute>
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
