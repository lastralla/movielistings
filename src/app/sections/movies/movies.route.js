import angular from 'angular';
import { MoviesController } from './routes/MoviesController.js';

angular
  .module('mlApp.movies')
  .run(moviesModuleRun);

////////// Functions //////////

/* @ngInject */
function moviesModuleRun(routerHelper) {

  routerHelper.configureStates(getURLMappings());

  ////////// Functions //////////

  function getURLMappings() {

    return [{
      state: 'movies',
      config: {
        url: '/movies',
        layout: 'app-layout',
        views: {
          '': {
            controller: MoviesController,
            controllerAs: 'vm',
            templateUrl: require('./routes/movies.html')
          }
        },
        title: 'Movies'
      }
    }];

  }

}
