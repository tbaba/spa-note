import React from "react";
import ReactDOM from "react-dom";

import injectTapEventPlugin from 'react-tap-event-plugin';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <RaisedButton label="Yes" primary={true} fullWidth={true} />
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
