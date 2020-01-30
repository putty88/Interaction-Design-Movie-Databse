(() => {
  const setupEventListeners = () => {
    const searchButton = $('#search-button')
    const searchTerm = $('#search-term')
    const movieInfoButton = $('#movieInfo-button')

    movieInfoButton.click(
      () =>
        window.ApiService.getTVInfo().then(result => displayMovieInfo(result.results))
          .catch(() => $('.image-result-container').empty().append(
            $('<div></div>')
              .addClass('col alert alert-danger')
              .text('Sorry, but something went wrong.')
          ))
    )

    searchTerm.bind('input', () => searchButton.prop('disabled', !searchTerm.val()))
  }

  const displayMovieInfo = text => {
    $('.text-result-container').empty().append(
      $('<div></div>')
        .addClass('btn-info')
        .text(" Title: " + text.name)
        .addClass('btn-info').append(
          $('<div></div>')
            .text(" Release Date: " + text.first_air_date)
            .addClass('btn-info').append(
              $('<div></div>')
                .text(" Average Rating: " + text.vote_average)
                .addClass('btn-info').append(
                  $('<div></div>')
                    .text(" Plot Synopsis: " + text.overview)
                )
            )
        )
    )

  }
  const init = () => {
    window.ApiService.apiHost('https://api.themoviedb.org')
    setupEventListeners()
    // This page is meant to display movies info immediately.
    // seperate
    window.ApiService.getTVInfo().then(result =>
      displayMovieInfo(result))
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
