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
