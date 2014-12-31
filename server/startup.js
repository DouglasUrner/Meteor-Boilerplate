/***
 * server/startup.js
 */

Meteor.startup(function () {

	// Initialize database.

	var collection = Collection1;

	function insertIfEmpty(e, i, a) {
		collection.insert(e);
	}

	if (Collection1.find().count() === 0) {
		initialValues.forEach(insertIfEmpty);
	}
});

var initialValues = [];
