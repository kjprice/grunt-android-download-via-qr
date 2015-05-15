/*
* grunt-android-download-via-qr
* https://github.com/kjprice/grunt-android-download-via-qr
*
* Copyright (c) 2015 KJ
* Licensed under the MIT license.
*/


var qrDownload = require('qr_download');
var fs = require('fs');

module.exports = function(grunt) {
'use strict';
	grunt.registerMultiTask('android_download_via_qr', 'Download your android app via a QR code', function() {
		var done = this.async();

		var androidDirectory = this.data.options.androidDirectory || 'android-test/';
		if (!androidDirectory.match(/\/$/)) {
			androidDirectory = androidDirectory + '/';
		}

		fs.exists(androidDirectory, function (exists) {
			if (exists) {
				qrDownload(androidDirectory, {dontOpen:false}, done);
			}
			else {
				var pathToAndroid = process.cwd() + '/' + androidDirectory;
				var errMessage = 'The directory "{{dir}}" specified does not appear to be a working android directory; where it would be located at {{path}}'
				.replace('{{dir}}', androidDirectory)
				.replace('{{path}}', pathToAndroid);
				grunt.log.error(errMessage);
				done();
			}
		}); 

	});

};
