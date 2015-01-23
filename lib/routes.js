/***
 * lib/routes.js
 */

 // Router.route('/', function () {
 //   this.render('index');
 // });

 Router.route('/', {
   template: 'index',
   waitOn: function() {
    return [
      Meteor.subscribe('items'),
      Meteor.subscribe('forceLoading'),
    ];
   },
   loadingTemplate: 'loading',
 });

 Router.route('/config', function () {
   this.render('config');
 });
