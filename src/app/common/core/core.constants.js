import angular from 'angular';

angular
  .module('mlApp.core')
  .constant('API_PATH', '/api/v1/')
  .constant('APP_PATH', 'app/')
  .constant('DEFAULT_IMAGES_FOLDER', '/app/common/skin/images/')
  /*
   * Setup references to important routes
   */
  .constant('CORE_ROUTING_CONF', Object.freeze({
    homeState: 'home',
    loginState: 'login',
    errorState: 'error'
  }));
