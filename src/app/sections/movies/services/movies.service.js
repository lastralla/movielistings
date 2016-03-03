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
    let api = 'http://api.themoviedb.org/3/';

    // movies released in last month
    // sorry hardcoding the date for now!
    let path = 'discover/movie?primary_release_date.gte=2016-02-02&primary_release_date.lte=2016-03-02';

    let key = '<KEYHERE>';

    let url = api + path + '?api_key=' + key;

    // let URL = '/discover/movie?primary_release_date.gte=2016-02-02&primary_release_date.lte=2016-03-02'

    return $http.get(url);
  }

  function getMovie(movieId) {
    // TODO
  }

}
