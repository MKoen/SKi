import React from 'react';
import NavBar from './NavBar'
import { Table, Glyphicon, Button } from 'react-bootstrap'

var Channels = React.createClass( {
    getInitialState: function () {
        return {};
    },

    renderActiveChannels: function(){
        let arrayOfRenderedActiveChannels = [];
        this.props.getChannels().filter((channel) => channel.active).forEach((channel) => {
            let channelListItem;
            let water = (channel.water > 0) ? (<Glyphicon glyph="tint"/>) : (<span></span>);

            let glyphicon = null;
            let onClick = null;

            if (this.props.getFavouriteChannelIDs().indexOf(channel.id) != -1) {
                glyphicon = "star";
                onClick = this.props.removeIdFromFavourite;
            } else {
                glyphicon = "star-empty";
                onClick = this.props.addIdToFavourite;
            }

            channelListItem = (
                <tr key={channel.id}>
                    <td>{channel.id}</td>
                    <td>{channel.name}</td>
                    <td>{channel.position.x} </td>
                    <td>{channel.position.y} </td>
                    <td>{channel.getDistance()}</td>
                    <td><Button onClick={ () => onClick(channel.id)}>
                        <Glyphicon className="pointer" glyph={glyphicon}/>
                    </Button></td>
                </tr>);

            arrayOfRenderedActiveChannels.push(channelListItem);
            });

        return arrayOfRenderedActiveChannels;
        },

    renderInactiveChannels: function(){
        let arrayOfRenderedInactiveChannels = [];
        this.props.getChannels().filter((channel) => channel.active).forEach((channel) => {
            let channelListItem;

            channelListItem = (
                <tr key={channel.id}>
                    <td>{channel.id}</td>
                    <td colSpan="8">No data received from this channel...</td>
                </tr>
            );

            arrayOfRenderedInactiveChannels.push(channelListItem);
        });

        return arrayOfRenderedInactiveChannels;
    },

    renderFavouriteChannels: function(){
        let arrayOfRenderedFavouriteChannels = [];
        this.props.getChannels().filter((channel) => this.props.getFavouriteChannelIDs().indexOf(channel.id) != -1).forEach((channel) => {
            let channelListItem;
            let water = (channel.water > 0) ? (<Glyphicon glyph="tint"/>) : (<span></span>);

            channelListItem = (
                <tr key={channel.id + "fav"}>
                    <td>{channel.name}</td>
                    <td>{channel.position.x}</td>
                    <td>{channel.position.y}</td>
                    <td>{channel.getDistance()}</td>
                    <td>{channel.direction}</td>
                    <td>{channel.speed}</td>
                    <td>{channel.temperature}°C</td>
                    <td>{water}</td>
                </tr>);

            arrayOfRenderedFavouriteChannels.push(channelListItem);
        });

        return arrayOfRenderedFavouriteChannels;
    },

    render: function () {
        return (
            <div>
                <NavBar/>
                <Table className="channelList">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>X <Glyphicon onClick={() => this.props.sortChannelNumericalBy("x")}  className="pointer" glyph="sort-by-order"/></th>
                        <th>Y <Glyphicon onClick={() => this.props.sortChannelNumericalBy("y")}  className="pointer" glyph="sort-by-order"/></th>
                        <th>Distance <Glyphicon onClick={() => this.props.sortChannelNumericalBy("distance")} className="pointer" glyph="sort-by-order"/></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderActiveChannels()}
                        {this.renderInactiveChannels()}
                    </tbody>
                </Table>
                <Table className="favouritesList">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Distance</th>
                        <th>Direction</th>
                        <th>Speed</th>
                        <th>Temperature</th>
                        <th>Water</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderFavouriteChannels()}
                    </tbody>
                </Table>
            </div>
        )
    }
} );

export default Channels;
