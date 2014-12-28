/***
 * lib/routes.js
 */

 Router.route('/', function () {
   this.render('index');
 });

 Router.route('/config', function () {
   this.render('config');
 });
