import React from 'react';
import NavBar from './NavBar'
import { Table} from 'react-bootstrap'

var Rovers = React.createClass( {
    getInitialState: function () {
        return {}
    },

    render: function () {
        let data = this.props.getData();
        let roverList = [];

        data.forEach((rover) => {
            let roverListItem = (
                <tr>
                    <td>{rover.id}</td>
                    <td>{rover.name}</td>
                    <td>{rover.position.x},{rover.position.y}</td>
                    <td>{rover.direction}</td>
                    <td>{rover.temperature}°C</td>
                    <If test={rover.water > 0}>
                        <td>Present</td>
                    </If>
                    <If test={rover.water == 0}>
                        <td>Absent</td>
                    </If>
                </tr>
            );
            roverList.push(roverListItem);
        });

        return (
           <div>
               <NavBar/>
               <Table striped bordered condensed hover>
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Position</th>
                       <th>Direction</th>
                       <th>Speed</th>
                       <th>Temperature</th>
                       <th>Water</th>
                   </tr>
                   </thead>
                   <tbody>
                    {roverList}
                   </tbody>
               </Table>
           </div>
        )
    }
} );

export default Rovers;
