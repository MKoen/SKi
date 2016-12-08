import jQuery from 'jquery';
import Promise from 'promise';

var API = (function ($) {
    const BASE_URL = 'https://roguerovers-api-develop.azurewebsites.net',
	  ENDPOINTS = {
	      channels: `${BASE_URL}/api/channel`,
	      rover_information: `${BASE_URL}/api/channel/{channelId}`,
	      sensor_information: `${BASE_URL}/api/channel/{channelId}/sensor/{sensorId}`
	  };

    var _fillInParameters = function (endpoint, data) {
	    for (var prop in data) {
		if (data.hasOwnProperty(prop)) {
		    endpoint = endpoint.replace(`{${prop}}`, data[prop]);
		}
	    }

	    return endpoint;
	},

	_getDeadChannelObject = function () {
	    return {
		active: false
	    };
	};

    var getChannels = function () {
	    return new Promise((resolve, reject) => {
		$.ajax({
		    url: ENDPOINTS.channels,
		    dataType: 'json'
		}).then(response => resolve(response));
	    });
	},

	getRoverInformation = function (roverId) {
	    let url = _fillInParameters(ENDPOINTS.rover_information, { channelId: roverId });

	    return new Promise((resolve, reject) => {
		$.ajax({
		    url: url,
		    dataType: 'json'
		}).then(response => {
		    response.active = true;
		    resolve(response);
		}, err => resolve(_getDeadChannelObject()));
	    });
	},

	getSensorInformationForRover = function (roverId, sensorId) {
	    let url = _fillInParameters(ENDPOINTS.sensor_information, { channelId: roverId, sensorId: sensorId });

	    return new Promise((resolve, reject) => {
		$.ajax({
		    url: url,
		    dataType: 'json'
		}).then(response => resolve(response), err => resolve(null));
	    });
	};
    
    return {
	getChannels: getChannels,
	getRoverInformation: getRoverInformation,
	getSensorInformationForRover: getSensorInformationForRover
    };
})( jQuery );

export default API;
