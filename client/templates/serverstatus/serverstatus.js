 /***
	* client/templates/serverstatus.js
	*/

Template.registerHelper('serverStatusIcon', function () {
	var status = Meteor.status();
	if (status.connected) {
		return 'glyphicon-cloud green';
	} else {
		if (status.status === 'connecting') {
			return 'glyphicon-cloud green';
		} else if (status.status === 'waiting') {
			return 'glyphicon-cloud orange';
		} else {
			return 'glyphicon-cloud red';
		}
	}
});

Template.registerHelper('serverStatusMessage', function () {
	var status = Meteor.status();
	if (status.connected) {
		return 'Connected';
	} else {
		if (status.status === 'connecting') {
			return 'Attempting to connect';
		} else if (status.status === 'waiting') {
			return 'Waiting to retry connection';
		} else {
			return 'Connection failed';
		}
	}
});
