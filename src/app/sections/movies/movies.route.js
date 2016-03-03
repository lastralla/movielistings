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
          },
          'subNavigation': {
            // templateUrl: require('./goals-list.html')
          },
          'primaryFilters': {
            // templateUrl: require('../../common/layout/app-layout/primary-filters.html')
          }
        },
        title: 'Movies',
        data: {
          topLevelNav: {
            order: 4,
            label: 'Movies',
            linkContent: '<i class="fa fa-dot-circle-o"></i>'
          }
        }
      }
    }];

  }

}
