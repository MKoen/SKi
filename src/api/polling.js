import API from './communication';
import Promise from 'promise';

var Channels = (function () {
    const POLLING_TIME = 2000,
	  SENSORS = {
	      temperature: 't1',
	      water: 'w1'
	  };

    let hook = () => {},
	interval;

    var _getRoverInformation = function (channel) {
	    return API.getRoverInformation(channel)
		.then(rover => {
		    rover.id = channel;
		    return rover;
		});
	},

	_extendRoverWithSensorData = function (rover) {
	    return Promise.all([
		API.getSensorInformationForRover(rover.id, SENSORS.temperature),
		API.getSensorInformationForRover(rover.id, SENSORS.water)
	    ]).then((temperature, water) => {
		rover.temperature = temperature;
		rover.water = water;
		return rover;
	    });
	},

	_composeData = function () {
	    return API.getChannels()
		.then(channels => Promise.all(channels
					    .map(channel => _getRoverInformation(channel))
					    ))
		.then(rovers => Promise.all(rovers
					    .map(rover => _extendRoverWithSensorData(rover))))
		.then(rovers => hook(rovers));
	};

    var setHook = function (callback) {
	    if (typeof callback === 'function') {
		hook = callback;
	    }
	},

	start = function () {
	    console.log('starting polling...');
	    _composeData();
	    interval = setInterval(() => _composeData, POLLING_TIME);
	};

    return {
	setHook: setHook,
	start: start
    };
})();

export default Channels;
