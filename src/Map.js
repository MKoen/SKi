import React from 'react';
import NavBar from './NavBar'
import { Table} from 'react-bootstrap'

var Map = React.createClass( {
    getInitialState: function () {
        return {}
    },

    render: function () {
        let data = this.props.getData();

        data.forEach((rover) => {

        });

        return (
           <div>
               <NavBar/>
               <canvas id="roverMap" width="200" height="100"></canvas>
           </div>
        )
    }
} );

export default Map;
