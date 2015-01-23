/***
 * lib/collections/forceLoading.js
 *
 * The "collection" only exists to test the display of a loading page by
 * Iron Router, it should not be used in production.
 */

if (Meteor.isServer) {
	Meteor.publish('forceLoading', function(){
		var self = this;	// Protect our value of this.
		Meteor.setTimeout(function() {
			self.ready();
		}, 1000);
	});
} else {
	// Subscriptions
}
