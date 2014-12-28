/***
 * lib/collections.js
 *
 * Collection schema and declarations.
 */

Schemas = {};
SimpleSchema.debug = true;

Schemas.Collection1 = new SimpleSchema ({
	elementName: {
		type: String,
	},
});

/***
 * Helpers
 *
 */

if (Meteor.isClient) {

	// Template is only defined on the client. This file is loaded on both the
	// client and the server.

//  /*
// 	* Helper: currentFieldValue(cn, fn)
// 	*  cn: name of collection
// 	*  fn: name of field
// 	*/
//
// 	Template.registerHelper('currentFieldValue', function (cn, fn) {
// 		return AutoForm.getFieldValue(cn, fn) || 'not selected';
// 	});

}

/***
* Collections
*/

var Collections = {};

Collection1 = Collections.Collection1 = new Mongo.Collection('Collection1');
Collection1.attachSchema(Schemas.Collection1);

if (Meteor.isServer) {
	Meteor.publish(null, function () {
		return Collection1.find();
	});
} else {
	// Subscriptions
}

Collection1.allow({
	insert: function () {
		return true;
	},
	remove: function () {
		return true;
	},
});
