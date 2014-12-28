/***
 * config/accounts_ui.js
 *
 * Configuration for mrt:accounts-ui. Documentation and further
 * information is at:
 *
 *	https://www.meteor.com/accounts
 *	http://docs.meteor.com/#/full/meteor_users
 *	http://docs.meteor.com/#/full/accounts_api
 */

if (Meteor.isClient) {
	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_AND_EMAIL'
	});
};
