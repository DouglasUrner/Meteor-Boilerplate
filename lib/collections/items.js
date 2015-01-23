/***
 * lib/collections/items.js
 *
 * Collection schema and declarations.
 */

Schemas = {};
SimpleSchema.debug = true;

Collections = {};

Schemas.Item = new SimpleSchema ({
	itemName: {
		type: String,
	},
});

Items = Collections.Items = new Mongo.Collection('Items');
Items.attachSchema(Schemas.Item);

/***
 * Helpers
 *
 */

if (Meteor.isClient) {

	// Template is only defined on the client. This file is loaded on both the
	// client and the server.

 /*
	* Helper: items – return all items in the collection for #each loops and the
	* like. May need to be modified to check access rights.
	*
	* Define one of these for each collection.
	*/

	Template.registerHelper('items', function () {
		return Items.find();
	});

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


if (Meteor.isServer) {
	Meteor.publish('items', function () {
		return Items.find();
	});
} else {
	// Subscriptions
}

Items.allow({
	insert: function () {
		return true;
	},
	remove: function () {
		return true;
	},
});
