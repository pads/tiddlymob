[![Build Status](https://secure.travis-ci.org/pads/tiddlymob.png)](http://travis-ci
.org/pads/tiddlymob)

About
=====

This is a [Tiddlyspace](http://tiddlyspace.com) mobile site.
More details coming soon.

Development
===========

Source files are located in the tiddlymobapp folder.

Testing
=======

The tests are written using [Jasmine](http://pivotal.github.com/jasmine).
They run either in a browser or via [PhantomJS](http://phantomjs.org).

* Run `make jslibs phantomjs` to get the required files to run the tests.
* Run `make test` to run the tests in headless mode.
* Open test/SpecRunner.html to run tests in a browser.

Serving The Website
===================

This project makes use of [tsapp](https://github.com/cdent/tsapp).
You will need to [install](https://github.com/cdent/tsapp#install) tsapp then run: `tsapp auth` to authenticate.

Run `make serve` to run the app.  Navigate to http://localhost:8080/index.html to view.

This server interacts with tiddlyspace.com so you can use it with real data.

Acknowledgements
================

Thanks to @cdent for making `tsapp` an easy way to serve Tiddlyspace apps.
Thanks to @jcarver989 for providing code to let Jasmine tests run via PhantomJS.