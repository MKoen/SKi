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
                        <a href="/list">Rogue Rovers</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <ul className="nav navbar-nav">
                    <li className="nav-item"><a href="/list">List of Rovers</a></li>
		            <li className="nav-item"><a href="/map">Map</a></li>
                </ul>
            </Navbar>
        );
    }
} );

export default NavBar;
