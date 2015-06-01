# grunt-android-download-via-qr

> Provides a QR code that, when scanned, will allow for your android device to test the latest build of your android project.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-android-download-via-qr --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-android-download-via-qr');
```

## Documentation

In your project's Gruntfile, add a section named `android_download_via_qr` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  android_download_via_qr: {
    default_options: {
      options: {
        androidDirectory: 'cordova'
      },
    }
  },
});
```

Note here that the only parameter that needs to be passed is the android directory *relative to Gruntfile*. If your android directory is located the same place in your filesystem as Gruntfile, then simply the directory name will suffice.

When complete, Chrome should open with a QR code. Scan that code with your android device and the app should automatically download on your phone. The QR code will look similar to https://github.com/kjprice/grunt-android-download-via-qr/blob/master/download.svg and will represent a link to an express server running on your local that will serve the android package.
