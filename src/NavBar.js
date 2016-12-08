import React from 'react';
import { Link } from 'react-router'
import { Navbar, NavItem, Nav} from 'react-bootstrap'

var NavBar = React.createClass( {
    getInitialState: function () {
        return {}
    },


    render: function () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Rogue Rovers</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <ul>
                    <li><Link to={`/channels`}>Channels</Link></li>
                    <li><Link to={`/`}>Rovers</Link></li>
                    <li><Link to={`/`}>Map</Link></li>
                </ul>
            </Navbar>
        )
    }
} );

export default NavBar;
