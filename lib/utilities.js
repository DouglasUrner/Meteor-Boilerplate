/***
 * lib/utilities.js
 */
UI.registerHelper('clog', function (whatever) {
	if (whatever === undefined) {
		whatever = this;
	}
	console.log(whatever);
});
