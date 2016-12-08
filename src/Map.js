import React from 'react';
import NavBar from './NavBar'

var Map = React.createClass( {
    getInitialState: function () {
        return {}
    },

    render: function () {
        let rovers = this.props.channels.filter((channel) => { return channel.active });

        rovers.forEach((rover) => {

        });

        drawRover = function(x, y, name){
            var context = document.getElementById("roverMap").getContext("2d");
            context.beginPath();
            context.arc(x,y,10,0,2*Math.PI);
            context.stroke();

            context.font="20px sans-serif";
            context.fillText(name,x + 10,y + 10);

        };

        return (
           <div>
               <NavBar/>
               <canvas id="roverMap" width="400" height="400"></canvas>
           </div>
        )
    }
} );

export default Map;
