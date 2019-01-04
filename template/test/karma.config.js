const webpackConfig = require('./webpack.test');
webpackConfig.mode = 'production';

module.exports = function(config) {
  config.set({
    singleRun: true,

    browsers: ['Chrome'],

    frameworks: ['jasmine'],

    files: [
      // RxJs
      // { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      // { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
      'test.js'
    ],

    preprocessors: {
      'test.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack')
    ]
  });
};
