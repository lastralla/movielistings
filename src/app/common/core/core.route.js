import angular from 'angular';

angular
  .module('mlApp.core')
  .run(coreModuleRun);

////////// Functions //////////

/* @ngInject */
function coreModuleRun(routerHelper) {
  let four0four = '/404';

  routerHelper.configureStates(getURLMappings(), four0four);

  ////////// Functions //////////

  function getURLMappings() {

    return [{
      state: '404',
      config: {
        url: '/404',
        layout: 'access-layout',
        templateUrl: require('./routes/404.html'),
        title: '404',
        data: {
          navContext: [
            'any'
          ]
        }
      }
    }, {
      state: 'error',
      config: {
        url: '/error',
        layout: 'access-layout',
        templateUrl: require('./routes/error.html'),
        title: 'Error',
        data: {
          navContext: [
            'any'
          ]
        }
      }
    }];
  }

}
