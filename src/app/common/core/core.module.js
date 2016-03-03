import angular from 'angular';

// Bring in base stylesheets
require('../skin/_loader.js'); // up one level

require('./logger/_loader.js');
require('./exception/_loader.js');
require('./router/_loader.js');

require('../utils/helpers/_loader.js'); // up one level

angular
  .module('mlApp.core', [
    /*
     * Angular modules (via npm)
     */
    require('angular-sanitize'),
    require('angular-animate'),
    require('angular-cookies'),
    require('angular-messages'),

    /*
     * 3rd-Party modules (i.e. via npm)
     */
    require('angular-translate'),

    /*
     * reusable cross-application code modules
     */
    'mlApp.utils.helpers',
    'mlApp.core.logger',
    'mlApp.core.router',
    'mlApp.core.exception'
  ]);
