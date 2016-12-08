import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Channels from './Channels';
import Map from './Map';
import API from './api/index';


var Rovers = React.createClass( {
    getInitialState: function () {
        API.setHook((data) => {

            data.forEach((channel) => {
                if (channel.temperature >= 10)
                    alert(channel.name + "has a temperature of " + channel.temperature + " !");
            });

            this.setState(() => {
                return {channels: data};
            });

            localStorage.setItem("favouriteChannelIDs", JSON.stringify(this.state.favouriteChannelIDs));

            if (this.state.sortBy.length > 0){
                this.sortChannelNumericalBy(this.state.sortBy);
            }
        });
        API.start();
        return {
            channels: [],
            favouriteChannelIDs: JSON.parse(localStorage.getItem("favouriteChannelIDs")) || [],
            sortBy: ""
        };

    },

    getFavouriteChannelIDs: function(){
        return this.state.favouriteChannelIDs;
    },

    addIdToFavourite: function(id){
        let tmpFavouriteChannelIds = this.state.favouriteChannelIDs;
        tmpFavouriteChannelIds.push(id);
        this.setState(() => {
            return {favouriteChannelIDs: tmpFavouriteChannelIds};
        });
    },

    removeIdFromFavourite: function(id){
        let tmpFavouriteChannelIds = this.state.favouriteChannelIDs;
        tmpFavouriteChannelIds.splice(tmpFavouriteChannelIds.indexOf(id),1);
        this.setState(() => {
            return {favouriteChannelIDs: tmpFavouriteChannelIds};
        });
    },

    getChannels: function(){
        return this.state.channels;
    },

    sortChannelNumericalBy: function(property){

        this.setState(() => {
            return {
                channels: this.state.channels.filter((channel) => channel.active).sort((a,b) => {
                    if (property == "x" || property == "y") return a.position[property]-b.position[property];
                    return a[property]-b[property];
                }).concat(this.state.channels.filter((channel) => !channel.active)),
                sortBy: property
            }
        });
    },

    // Move to seperate file -> routing.js
    getUrlRouting: function () {
	return location.toString().replace(/http(s)?:\/\/(\w+)?(\.)?(\w+)(\.\w+|:\d+)?/, '').split('/')
	    .filter(str => str.length > 0);
    },

    getPageToRender: function () {
	let route = this.getUrlRouting().shift();

	switch (route) {
	    case 'list':
		return (
			<Channels getChannels={this.getChannels}
                      getFavouriteChannelIDs={this.getFavouriteChannelIDs}
                      addIdToFavourite={this.addIdToFavourite}
                      removeIdFromFavourite={this.removeIdFromFavourite}
                      sortChannelNumericalBy={this.sortChannelNumericalBy}
            />
		);
	    case 'map':
		return (
			<Map getChannels={this.getChannels} />
		);
	    default:
		return (
            <Channels getChannels={this.getChannels}
                      getFavouriteChannelIDs={this.getFavouriteChannelIDs}
                      addIdToFavourite={this.addIdToFavourite}
                      removeIdFromFavourite={this.removeIdFromFavourite}
                      sortChannelNumericalBy={this.sortChannelNumericalBy}
            />
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
