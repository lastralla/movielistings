import angular from 'angular';
import { HomeController } from './routes/HomeController.js';

angular
  .module('mlApp.home')
  .run(homeModuleRun);

////////// Functions //////////

/* @ngInject */
function homeModuleRun(routerHelper) {

  routerHelper.configureStates(getURLMappings());

  ////////// Functions //////////

  function getURLMappings() {

    return [{
      state: 'home',
      config: {
        url: '/',
        layout: 'app-layout',
        views: {
          '': {
            controller: HomeController,
            controllerAs: 'vm',
            templateUrl: require('./routes/home.html')
          }
        },
        title: 'Movie Listings - Home'
      }
    }];

  }

}
