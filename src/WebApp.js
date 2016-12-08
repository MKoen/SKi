import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Channels from './Channels';
import Map from './Map';
import API from './api/index';


var Rovers = React.createClass( {
    getInitialState: function () {
        API.setHook((data) => {
            this.setState(() => {
                return {channels: data};
            });
        });
        API.start();
        return {
            channels: []
        }

    },

    getChannels: function(){
        return this.state.channels;
    },

    render: function () {
        return (
            <Router history={browserHistory}>
                <Route channels={this.getChannels} path="/" component={Channels}>
                    <Route channels={this.getChannels} path="list" component={Channels}/>
                    <Route channels={this.getChannels} path="map" component={Map}/>
                </Route>
            </Router>
        )
    }
} );

export default Rovers;
