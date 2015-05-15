/*
 * grunt-android-download-via-qr
 * https://github.com/kjprice/grunt-android-download-via-qr
 *
 * Copyright (c) 2015 KJ
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
	// Configuration to be run (and then tested).
		android_download_via_qr: {
			default_options: {
				options: {
					androidDirectory: 'android-test'//assumes a directory named 'android-test' exists at your current directory
				}
			}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['android_download_via_qr']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['test']);

};
