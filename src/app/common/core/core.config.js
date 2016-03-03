import angular from 'angular';

angular
  .module('mlApp.core')
  .config(configExceptionHandlerProvider)
  .config(configTranslateProvider)
  .config(configRouteHelperProvider);

////////// Functions //////////

/* @ngInject */
function configExceptionHandlerProvider(exceptionHandlerProvider) {
  exceptionHandlerProvider.configure('[Error] ');
}

/* @ngInject */
function configTranslateProvider($translateProvider) {

  $translateProvider.translations('en', {
    i18n: {
      general: {
        COLON_SEP: ':'
      },
      errors: {
        'general.error': 'An error has occurred.',
        'server.error': 'We are experiencing some problems right now.'
      }
    }
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitize');
}

/* @ngInject */
function configRouteHelperProvider(routerHelperProvider) {
  routerHelperProvider.configure({
    docTitle: 'Movie Listings App'
  });
}
