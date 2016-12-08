import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

import WebApp from './WebApp';

ReactDOM.render(
    <MuiThemeProvider>
        <WebApp/>
    </MuiThemeProvider>,
  document.getElementById('root')
);
