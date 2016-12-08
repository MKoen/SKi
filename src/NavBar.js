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
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to={`/list`}>List of Rovers</Link></li>
                    <li className="nav-item"><Link to={`/map`}>Map</Link></li>
                </ul>
            </Navbar>
        )
    }
} );

export default NavBar;
