
(() => {
  const setupEventListeners = () => {
    const searchButton = $('#search-button')
    const searchTerm = $('#search-term')
    const topRatedTVButton = $('#topRatedTV-button')

    topRatedTVButton.click(
      () =>
        window.ApiService.getTopRatedTV().then(result => displayTopRatedTV(result.results))
          .catch(() => $('.image-result-container').empty().append(
            $('<div></div>')
              .addClass('col alert alert-danger')
              .text('Sorry, but something went wrong.')
          ))
    )

    searchTerm.bind('input', () => searchButton.prop('disabled', !searchTerm.val()))
  }

  const imageTopRatedTV = movie => $('<div></div>').addClass('col-xs-2').append(
    $('<img/>').attr({
      src: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      alt: movie.original_title
    })
  ).click(() => {
    window.open(`popUpTv.html#${movie.id}`, 'movieInfo', 'resizeable,height=500px,width=400px')
  })

  const displayTopRatedTV = images => $('.image-result-container').empty().append(
    images.map(imageTopRatedTV)
  )

  const init = () => {
    window.ApiService.apiHost('https://api.themoviedb.org')
    setupEventListeners()
    // This page is meant to display the top rated shows immediately.
    window.ApiService.getTopRatedTV().then(result => displayTopRatedTV(result.results))
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
