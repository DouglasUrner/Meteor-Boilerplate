/***
 * server/startup.js
 */

Meteor.startup(function () {

	// Initialize database.

	var collection = Items;

	function insertIfEmpty(e, i, a) {
		collection.insert(e);
	}

	if (Items.find().count() === 0) {
		initialValues.forEach(insertIfEmpty);
	}
});

var initialValues = [];
