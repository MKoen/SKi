import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router'

import Channels from './Channels';
import Rovers from './Rovers';
import Map from './Map';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Channels}>
            <Route path="channels" component={Channels}/>
            <Route path="rovers" component={Rovers}/>
            <Route path="map" component={Map}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
