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
                <Nav>
                    <NavItem><Link to={`/channels`}>Channels</Link></NavItem>
                    <NavItem><Link to={`/`}>Rovers</Link></NavItem>
                    <NavItem><Link to={`/`}>Map</Link></NavItem>
                </Nav>
            </Navbar>
        )
    }
} );

export default NavBar;
