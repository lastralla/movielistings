import angular from 'angular';

angular
  .module('mlApp.core.router')
  .provider('routerHelper', routerHelperProvider);

////////// Functions //////////

/* @ngInject */
function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
  /* jshint validthis:true */

  let config = {
    docTitle: undefined,
    resolveAlways: {}
  };

  $locationProvider.html5Mode(true);

  this.configure = (cfg) => {
    angular.extend(config, cfg);
  };

  this.$get = RouterHelper;

  ////////// Functions //////////

  /* @ngInject */
  function RouterHelper($location, $rootScope, $state) {
    let handlingStateChangeError = false;
    let hasOtherwise = false;
    let stateCounts = {
      errors: 0,
      changes: 0
    };

    let service = {
      configureStates: configureStates,
      getStates: getStates,
      stateCounts: stateCounts
    };

    init();

    return service;

    ////////// Functions //////////

    function configureStates(states, otherwisePath) {
      states.forEach((state) => {
        state.config.resolve =
          angular.extend(state.config.resolve || {}, config.resolveAlways);
        $stateProvider.state(state.state, state.config);
      });
      if (otherwisePath && !hasOtherwise) {
        hasOtherwise = true;
        $urlRouterProvider.otherwise(otherwisePath);
      }
    }

    function handleRoutingErrors() {
      // Route cancellation:
      // On routing error, go to the dashboard.
      // Provide an exit clause if it tries to do it twice.
      /* jshint maxparams:6 */
      $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
          if (handlingStateChangeError) {
            return;
          }
          stateCounts.errors++;
          handlingStateChangeError = true;

          let destination = defineDestination();

          let msg = defineMsg();
          // logger.warning(msg, [toState]);
          $location.path('/');

          ////////// Functions //////////

          function defineDestination() {
            return (toState && (toState.title || toState.name ||
              toState.loadedTemplateUrl)) || 'unknown target';
          }

          function defineMsg() {
            return 'Error routing to ' + destination + '. ' +
              (error.data || '') + '. <br/>' + (error.statusText || '') +
              ': ' + (error.status || '');
          }
        }
      );
    }

    function init() {
      handleRoutingErrors();
      updateDocTitle();
      updatePageLayout();
    }

    function getStates() {
      return $state.get();
    }

    function updateDocTitle() {
      $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams) => {
          stateCounts.changes++;
          handlingStateChangeError = false;

          let title;

          if (toState.title) {
            title = toState.title + ' :: ' + config.docTitle;
          } else {
            title = config.docTitle;
          }

          $rootScope.title = title;
        }
      );
    }

    function updatePageLayout() {
      $rootScope.$on('$stateChangeSuccess',
        (event, toState) => {
          let layout = toState.layout || 'app-layout';

          $rootScope.layout = layout;
        }
      );
    }
  }
}
