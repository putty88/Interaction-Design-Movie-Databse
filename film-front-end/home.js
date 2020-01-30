(() => {
  const setupEventListeners = () => {
    const searchButton = $('#search-button')
    const searchTerm = $('#search-term')

    searchButton.click(
      () => window.ApiService.searchMovies({
        primary_release_year: 2009,
        q: searchTerm.val()
      }).then(result => displayImages(result.results))
        .catch(() => $('.image-result-container').empty().append(
          $('<div></div>')
            .addClass('col alert alert-danger')
            .text('Sorry, but something went wrong.')
        ))

    )

    searchTerm.bind('input', () => searchButton.prop('disabled', !searchTerm.val()))
  }

  const imageElement = movie => $('<div></div>').addClass('col-xs-2').append(
    $('<img/>').attr({
      src: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      alt: movie.original_title
    })
  ).click(() => {
    window.open(`popUp.html#${movie.id}`, 'movieInfo', 'resizeable,height=500px,width=400px')
  })

  const displayImages = images => $('.image-result-container').empty().append(
    images.map(imageElement)
  )

  const init = () => {
    window.ApiService.apiHost('https://api.themoviedb.org')
    setupEventListeners()

  }

  window.GiphySearchController = {
    init
  }
})()
