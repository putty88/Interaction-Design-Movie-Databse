
(() => {
  const setupEventListeners = () => {
    const searchButton = $('#search-button')
    const searchTerm = $('#search-term')
    const topRatedMoviesButton = $('#topRatedMovies-button')

    topRatedMoviesButton.click(
      () =>
        window.ApiService.getTopRatedMovies().then(result => displayTopRatedMovies(result.results))
          .catch(() => $('.image-result-container').empty().append(
            $('<div></div>')
              .addClass('col alert alert-danger')
              .text('Sorry, but something went wrong.')
          ))
    )

    searchTerm.bind('input', () => searchButton.prop('disabled', !searchTerm.val()))
  }

  const imageTopRatedMovies = movie => $('<div></div>').addClass('col-xs-2').append(
    $('<img/>').attr({
      src: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      alt: movie.original_title
    })
  ).click(() => {
    window.open(`popUp.html#${movie.id}`, 'movieInfo', 'resizeable,height=500px,width=400px') // h=260 w=370
  })

  const displayTopRatedMovies = images => $('.image-result-container').empty().append(
    images.map(imageTopRatedMovies)
  )

  const init = () => {
    window.ApiService.apiHost('https://api.themoviedb.org')
    setupEventListeners()
    // This page is meant to display the top rated movies immediately.
    window.ApiService.getTopRatedMovies().then(result => displayTopRatedMovies(result.results))
      .catch(() => $('.image-result-container').empty().append(
        $('<div></div>')
          .addClass('col alert alert-danger')
          .text('Sorry, but something went wrong.')
      ))

  }

  window.GiphySearchController = {
    init
  }
})()
