import React from 'react';
import NavBar from './NavBar'
import { ListGroup, ListGroupItem} from 'react-bootstrap'

var Channels = React.createClass( {
    getInitialState: function () {
        return {}
    },

    render: function () {
        let data = this.props.getData();
        let channelList = [];

        channelArray.forEach((channel) => {
            let channelListItem = (
                <ListGroupItem header={channel.name}>{channel.id}</ListGroupItem>
            );
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
