import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
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
        };

    },

    getChannels: function(){
        return this.state.channels;
    },

    // Move to seperate file -> routing.js
    getUrlRouting: function () {
	return location.toString().replace(/http(s)?:\/\/(\w+)?(\.)?(\w+)(\.\w+|:\d+)?/, '').split('/')
	    .filter(str => str.length > 0);
    },

    getPageToRender: function () {
	let route = this.getUrlRouting().shift();

	// use a route config object in config.js
	switch (route) {
	    case 'list':
		return (
			<Channels getChannels={this.getChannels} />
		);
	    case 'map':
		return (
			<Map getChannels={this.getChannels} />
		);
	    default:
		return (
			<Channels getChannels={this.getChannels} />
		);
	}
    },

    render: function () {
	let page = this.getPageToRender();
        return (
	    <div>
		{page}
	    </div>
        );
    }
} );

export default Rovers;
