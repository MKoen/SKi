import React from 'react';
import NavBar from './NavBar'
import { Table, Glyphicon } from 'react-bootstrap'

var Channels = React.createClass( {
    getInitialState: function () {
        return {}
    },

    render: function () {
        let channelList = [];

        this.props.route.channels().sort((x, y) => {
            return y.active - x.active;
        }).forEach((channel) => {
            let channelListItem;

            if (channel.active) {
                channelListItem = (
                    <tr key={channel.id}>
                        <td>{channel.id}</td>
                        <td>{channel.name}</td>
                        <td>{channel.position.x}</td>
                        <td>{channel.position.y}</td>
                        <td>5</td>
                        <td>{channel.direction}</td>
                        <td>{channel.speed}</td>
                        <td>{channel.temperature}°C</td>
                        <td>{channel.water}</td>
                        <td><Glyphicon bsStyle="glyphicon glyphicon-star"/></td>
                    </tr>
                )
            } else {
                channelListItem = (
                    <tr key={channel.id}>
                        <td>{channel.id}</td>
                        <td colSpan="8">No data received from this channel...</td>
                    </tr>
                )
            }

            channelList.push(channelListItem);
        });

        return (
            <div>
                <NavBar/>
                <Table responsive className="channelList">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Distance</th>
                        <th>Direction</th>
                        <th>Speed</th>
                        <th>Temperature</th>
                        <th>Water</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {channelList}
                    </tbody>
                </Table>
            </div>
        )
    }
} );

export default Channels;
