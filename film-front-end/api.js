// When starting a front end, it is usual to first separate out the functions which will be implemented by
// a web service. This module demonstrates how such a “mock” service can look. Note how the external interface
// of the final ApiService object matches the one in api.js. That’s because, in reality, this file is actually
// how api.js _starts_, and it morphs into the final api.js when you connect to the web service for real.
(() => {
  let APIhost = 'https://api.themoviedb.org/'
  let APIkey = '3143b76b62ee7ee541998aee6a5da39f'


  // https://developers.themoviedb.org/3/search/search-movies
  // https://api.themoviedb.org/3/movie/now_playing?api_key=3143b76b62ee7ee541998aee6a5da39f&language=en-US&page=1

  const searchMovies = params => {
    const query = params.q

    return fetch(`${APIhost}3/search/movie?api_key=${APIkey}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(response => response.json())
  }

  const getMoviesPlayingNow = () => {
    return fetch(`${APIhost}3/movie/now_playing?api_key=3143b76b62ee7ee541998aee6a5da39f&language=en-US&page=1`)
      .then(response => response.json())
  }

  const getTopRatedMovies = () => {
    return fetch(`${APIhost}3/movie/top_rated?api_key=3143b76b62ee7ee541998aee6a5da39f&language=en-US&page=1`)
      .then(response => response.json())
  }

  const getTopRatedTV = () => {
    return fetch(`${APIhost}3/tv/top_rated?api_key=3143b76b62ee7ee541998aee6a5da39f&language=en-US&page=1`)
      .then(response => response.json())
  }

  const getMovieInfo = () => {
    let id = location.hash.substring(1)

    return fetch(`${APIhost}3/movie/${id}?api_key=${APIkey}&language=en-US`)
      .then(response => response.json())
  }

  const getTVInfo = () => {
    let id = location.hash.substring(1)

    return fetch(`${APIhost}3/tv/${id}?api_key=${APIkey}&language=en-US`)
      .then(response => response.json())
  }

  window.ApiService = {
    apiHost: () => {}, // No-op in our mock version.
    searchMovies,
    getTopRatedMovies,
    getTopRatedTV,
    getMoviesPlayingNow,
    getMovieInfo,
    getTVInfo
  }
})()
