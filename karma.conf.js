// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [

      //'bower_components/angular-scenario/angular-scenario.js',

      //mesma ordem como está no index.html
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './app/scripts/app.js',
      './app/scripts/controllers/**/*.js',
      './app/scripts/services/**/*.js',
      // 'test/mock/**/*.js',
      './test/spec/**/*.js',
    ],
    proxies: {
      // required for component assests fetched by Angular's compiler
    },
    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: Math.floor(Math.ceil(Math.random() * (32000 - 9100))) + 9100,
    listenAddress: '127.0.0.1',
    hostname: 'localhost',

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    reporters: ['progress', 'coverage'],


    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    colors: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


// on disconnect, makes karma to launch another phantonJs window to restart the testcases
    browserDisconnectTolerance: 5,

// these settings help reduce the timeouts to begin with.
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 30000,
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
