import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

var NavBar = React.createClass( {
    getInitialState: function () {
        return {};
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
                    <li><a href="/channels">Channels</a></li>
		    <li><a href="/rovers">Rovers</a></li>
                    <li><a href="/map">Map</a></li>
                </ul>
            </Navbar>
        );
    }
} );

export default NavBar;
