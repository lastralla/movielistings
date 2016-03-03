class MoviesController {

  /* @ngInject */
  constructor(moviesService) {
    this.message = 'Movies';

    this.movies = moviesService.getMovies();
  }

}

export { MoviesController };
