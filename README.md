[![Stories in Ready](https://badge.waffle.io/DouglasUrner/Meteor-Boilerplate.png?label=ready&title=Ready)](https://waffle.io/DouglasUrner/Meteor-Boilerplate)
Meteor-Boilerplate
==================

A simple skeleton for Meteor applications.

## Usage

1. Grab a copy with `git clone` or create your own fork.
1. Remove .git (`rm -rf .git` in the root of your version) – assuming you didn't fork.
1. `git init` – again, assuming you didn't fork.
1. Tweak to your heart's content, or start building your app.

Feedback, pull requests, issues are all welcome.

## Packages Used

* [iron:router]() –
* [nemo64:bootstrap](https://github.com/Nemo64/meteor-bootstrap) –
	* [less]() – Bootstrap (as of 3.3.1_1) needs less, but does not include it.
* [accounts-password]() –
* [mrt:accounts-ui-bootstrap-3]() –
* [aldeed:collection2](https://github.com/aldeed/meteor-collection2) –
	* [aldeed:simple-schema](https://github.com/aldeed/meteor-simple-schema#example) – included by collection2
* [aldeed:autoform](https://github.com/aldeed/meteor-autoform) –


## Packages To Think About Using

* [meteorhacks:subs-manager](https://github.com/meteorhacks/subs-manager/issues/15´) – subscription caching for use with Iron Router. Helps to eliminate thrashing of subscriptions when switching between pages.
* [alanning:roles](https://github.com/alanning/meteor-roles) –
* [useraccounts:bootstrap](https://github.com/meteor-useraccounts/bootstrap) – an alternative to mrt:accounts-ui-bootstrap-3, at first blush it looks like a nice package, but it wasn't easy to get it working.
* [differential:event-hooks](https://github.com/Differential/meteor-event-hooks) – alternative to using Tracker.autorun() to catch login/out events. Does it catch everything it should? This one is a fork of the original, appears to be slightly more active.
* Select2 with autoform
* [universe:modules](https://github.com/vazco/universe-modules) - support for ES6/ES2015 modules. Module support can help to clean up load order issues. Uses [Babel](https://babeljs.io) to transpile to ES5. The official [Babel repository](https://github.com/babel/babel) is on GitHub. Babel in turn depends on [SystemJS](https://github.com/systemjs/systemjs). The level of ES6 support available in various tools and platforms can be seen in [this table](http://kangax.github.io/compat-table/es6/).
