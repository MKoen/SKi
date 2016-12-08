var Rover = (function () {
    const SPACE_BASE_LOCATION = {
	x: 200,
	y: 200
    };

    var Rover = function ({ active, id, name, position: { x, y }, direction, speed, temperature, water }) {
	this.active = active;
	this.id = id;
	this.name = name;
	this.position = { x, y };
	this.direction = direction;
	this.speed = speed;
	this.temperature = temperature;
	this.water = water;
    };

    Rover.prototype.getDistance = function ({ x, y} = SPACE_BASE_LOCATION) {
	return Math.sqrt(Math.pow(this.position.x - x, 2) + Math.pow(this.position.y - y, 2)).toFixed(2);
    };

    return Rover;
})();

export default Rover;
