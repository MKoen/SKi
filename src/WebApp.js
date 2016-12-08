import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Channels from './Channels';
import Map from './Map';
import API from './api/index';


var Rovers = React.createClass( {
    getInitialState: function () {
        API.setHook((data) => this.setState({channels: data}));
        API.start();
        return {
            channels : {}
        }
    },

    render: function () {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Channels}>
                    <Route channels={this.state.channels} path="channels" component={Channels}/>
                    <Route channels={this.state.channels} path="rovers" component={Rovers}/>
                    <Route channels={this.state.channels} path="map" component={Map}/>
                </Route>
            </Router>
        )
    }
} );

export default Rovers;
