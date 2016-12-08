import React from 'react';
import NavBar from './NavBar';

var Map = React.createClass({
    getInitialState: function () {
        return {};
    },

    drawRover: function (x, y, name, color = "red") {
        const context = this.refs.map.getContext("2d");

        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'black';
        context.stroke();

        context.font = "15px sans-serif";
        context.fillText(name, x + 5, y - 5);

    },

    drawBackground: function (callback) {
        const context = this.refs.map.getContext("2d");
        var background = new Image();
        background.onload = function() {
            context.drawImage(background, 0, 0);
            callback();
        };
        background.src = 'https://i.imgur.com/CA0Pe1y.jpg';
    },

    componentDidMount() {
        setInterval(() => {
            this.drawBackground(() => {
                this.drawRover(200,200, "", "blue");
                this.props.getChannels().filter((channel) => channel.active).forEach((rover) => {
                this.drawRover(rover.position.x, rover.position.y, rover.name);
            })});

        }, 2000);
    },

    render: function () {
        return (
            <div>
                <NavBar/>
                <canvas ref="map" width={400} height={400}/>
            </div>
        );
    }
});

export default Map;

