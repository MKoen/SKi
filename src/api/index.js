import API from './communication';
import Promise from 'promise';
import Rover from '../models/rover';

var Channels = (function () {
    const POLLING_TIME = 2000,
	  SENSORS = {
	      temperature: 't1',
	      water: 'w1'
	  },
	  STORAGE_KEY = 'storage_rover_data';

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
	    if (!rover.active) {
		return Promise.resolve(rover);
	    }
	    return Promise.all([
		API.getSensorInformationForRover(rover.id, SENSORS.temperature),
		API.getSensorInformationForRover(rover.id, SENSORS.water)
	    ]).then(sensorData => {
		rover.temperature = sensorData[0];
		rover.water = sensorData[1];
		return new Rover(rover);
	    });
	},

	_getStorage = function () {
	    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
	},

	_readableDate = function (date = new Date()) {
	    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
	},

	_saveRoverDataToObject = function (dst, key, data) {
	    if (!dst.hasOwnProperty(key)) {
		dst[key] = {};
	    }
	    dst[key][Date.now().toString()] = data;
	},

	_saveRovers = function (rovers) {
	    let storage = _getStorage();

	    rovers.forEach(rover => _saveRoverDataToObject(storage, rover.id, rover));

	    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
	},

	_composeData = function () {
	    return API.getChannels()
		.then(channels => Promise.all(channels
					    .map(channel => _getRoverInformation(channel))
					    ))
		.then(rovers => Promise.all(rovers
					    .map(rover => _extendRoverWithSensorData(rover))))
		.then(rovers => {
		    _saveRovers(rovers);
		    return rovers;
		})
		.then(rovers => hook(rovers));
	};

    var setHook = function (callback) {
	    if (typeof callback === 'function') {
		hook = callback;
	    }
	},

	start = function () {
	    _composeData();
	    interval = setInterval(_composeData, POLLING_TIME);
	};

    return {
	setHook: setHook,
	start: start
    };
})();

export default Channels;
