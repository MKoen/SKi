import React from 'react';
import NavBar from './NavBar'
import { ListGroup, ListGroupItem} from 'react-bootstrap'

var Channels = React.createClass( {
    getInitialState: function () {
        return {}
    },

    render: function () {
        let channels = this.props.channels;
        let channelList = [];

        channels.forEach((channel) => {
            let channelListItem;

            if (channel.active) {
                channelListItem = (
                    <ListGroupItem header={channel.id} active>{channel.name}</ListGroupItem>
                )
            } else {
                channelListItem = (
                    <ListGroupItem header={channel.id} disabled>Not in use</ListGroupItem>
                )
            }

            channelList.push(channelListItem);
        });

        return (
           <div>
               <NavBar/>
               <ListGroup>
                   {channelList}
               </ListGroup>
           </div>
        )
    }
} );

export default Channels;
