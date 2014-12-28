/***
 * client/main.js
 */

var loggedIn = !!Meteor.userId(); // Make Boolean.

/*
 * Runs when a user logs in our out.
 */
Tracker.autorun(function () {

	if (Meteor.userId() && !loggedIn) {
		// User has logged in.

	} else if (!Meteor.userId() && loggedIn) {
		// User has logged out.
		Router.go('/');
	}

	loggedIn = !!Meteor.userId();
});
