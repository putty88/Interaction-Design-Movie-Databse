/*
  A sample jQuery plug-in: this one converts the selected elements into a 3D
  “swivel” control.
  This plugin's options object can include:
    change: function () { }
    - Callback for whenever the control has been manipulated.
*/
(($) => {
  $.fn.movieSlide = function (options) {
  // $.fn.swivel = function (options) {
    const $this = this

    let $current = null
    let anchor = 0

    $this.addClass("movieSlide").mousedown(function (event) {
      $current = $(this)
      anchor = event.screenY - ($current.data('movieSpot') || 0)
    })

    // Other mouse events go at the level of the document because
    // they might leave the element's bounding box.
    $(document).mousemove(event => {
      if ($current) {
        let currentSpot = $current.data('movieSpot') || 0
        let newSpot = Math.min(Math.max(event.screenY - anchor, 0), 350) // event.screenX - anchorX
        let newCss = `perspective(500px) translateY(${newSpot}px)`

        $current.css({
          'transform': newCss
        }).data({
          'movieSpot': newSpot
        })

        // Invoke the callback. We want jQuery-like behavior that binds `this` to the component
        // that change, so we use `call` instead of plain parentheses.
        if ($.isPlainObject(options) && $.isFunction(options.change)) {
          options.change.call($current, currentSpot, newSpot)
        }
      }
    }).mouseup(() => {
      $current = null
    })

    return $this
  }
  // $("#poster").attr("src", image)
  let starWarsSaga = ['https://i.imgur.com/HbkCOmd.jpg',
    'https://i.imgur.com/2IfzK7J.png',
    'https://i.imgur.com/oSWtZUG.jpg',
    'https://i.imgur.com/Z0RMZk2.jpg',
    'https://i.imgur.com/bMCq8KX.jpg',
    'https://i.imgur.com/yrvYexW.png']

  let image = 'https://i.imgur.com/HbkCOmd.jpg'

  // the slider feels better when the numbers aren't exact
  let changePoster = (newSpot) => {
    if (newSpot <= 45) {

      image = starWarsSaga[0]
      $("#poster").attr("src", image)

    } else if (newSpot <= 105) {

      image = starWarsSaga[1]
      $("#poster").attr("src", image)

    } else if (newSpot <= 155) {

      image = starWarsSaga[2]
      $("#poster").attr("src", image)

    } else if (newSpot <= 215) {

      image = starWarsSaga[3]
      $("#poster").attr("src", image)

    } else if (newSpot <= 270) {

      image = starWarsSaga[4]
      $("#poster").attr("src", image)

    } else {

      image = starWarsSaga[5]
      $("#poster").attr("src", image)
    }

    // $("#poster").attr("src", image)
  }

  $(".change-poster").movieSlide({
    change: function (spot, newSpot) {
      changePoster(newSpot)
    }
  })
})(jQuery)
