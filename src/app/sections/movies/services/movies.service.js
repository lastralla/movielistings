import angular from 'angular';

angular
  .module('mlApp.movies')
  .factory('moviesService', moviesService);

////////// Functions //////////

/* @ngInject */
function moviesService($http, API_PATH, DEFAULT_IMAGES_FOLDER) {

  let service = {
    getMovies: getMovies,
    getMovie: getMovie
  };

  return service;

  ////////// Functions //////////

  function getMovies() {
    // return $http.get(API_PATH + 'posts/list/');
  }

  function getMovie(postObj) {
    // return $http.post(API_PATH + 'posts/add/', postObj);
  }

}
