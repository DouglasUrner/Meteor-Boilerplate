/***
 * lib/routes.js
 */

 Router.route('/', {
   template: 'index',
   waitOn: function() {
    return [
      Meteor.subscribe('items'),
      // This subscription only exists to test the display of the
      // loadingTemplate – it should not be used in production.
      Meteor.subscribe('forceLoading'), // XXX don't use in production.
    ];
   },
   loadingTemplate: 'loading',
 });

 Router.route('/config', {
   template: 'config',
 });
