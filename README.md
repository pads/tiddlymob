[![Build Status](https://secure.travis-ci.org/pads/tiddlymob.png)](http://travis-ci.org/pads/tiddlymob)

About
=====

This is a [Tiddlyspace](http://tiddlyspace.com) mobile site.
More details coming soon.

Development
===========

For developing tiddlymob you will need:

* [node](nodejs.org)
* [grunt](http://gruntjs.com/)
* phantomjs  - `npm install -g phantomjs`

Run `npm install` for first time use as well, this will fetch the required node modules that will help development.

Run `grunt` by itself to run all the required tasks to build and deploy the website.

Testing
=======

Just run `grunt test`

To run tests in a browser run `grunt jasmine-server`.

Serving The Website
===================

There is an example application used to host the website that makes use of [tsapp](https://github.com/cdent/tsapp).
You will need to [install](https://github.com/cdent/tsapp#install) tsapp then run: `tsapp auth` to authenticate.

Run `tsapp serve` to run the app.

To keep it up-to-date run `grunt concat update-tsapp`.
This combines all the source files into one file and copies it to the assets folder in the tsapp (tiddlymobapp folder).

This server interacts with tiddlyspace.com so you can use it with real data or place tiddlers in the assets folder.

Acknowledgements
================

Thanks to @cdent for making `tsapp` an easy way to serve Tiddlyspace apps.