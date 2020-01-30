(() => {
  const setupEventListeners = () => {
    const searchButton = $('#search-button')
    const searchTerm = $('#search-term')
    const moviesPlayingNowButton = $('#moviesPlayingNow-button')

    moviesPlayingNowButton.click(
      () =>
        window.ApiService.getMoviesPlayingNow().then(result => displayMoviesPlayingNow(result.results))
          .catch(() => $('.image-result-container').empty().append(
            $('<div></div>')
              .addClass('col alert alert-danger')
              .text('Sorry, but something went wrong.')
          ))
    )

    searchTerm.bind('input', () => searchButton.prop('disabled', !searchTerm.val()))
  }

  const imageMoviesPlayingNow = movie => $('<div></div>').addClass('col-xs-2').append(
    $('<img/>').attr({
      src: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      alt: movie.original_title
    })
  ).click(() => {
    window.open(`popUp.html#${movie.id}`, 'movieInfo', 'resizeable,height=500px,width=400px') // h=260 w=370
  })

  const displayMoviesPlayingNow = images => $('.image-result-container').empty().append(
    images.map(imageMoviesPlayingNow)
  )

  const init = () => {
    window.ApiService.apiHost('https://api.themoviedb.org')
    setupEventListeners()
    // This page is meant to display movies playing now immediately.
    window.ApiService.getMoviesPlayingNow().then(result => displayMoviesPlayingNow(result.results))
      .catch(() => $('.image-result-container').empty().append(
        $('<div></div>')
          .addClass('col alert alert-danger')
          .text('Sorry, but something went wrong.')
      )
      )

  }

  window.GiphySearchController = {
    init
  }
})()
