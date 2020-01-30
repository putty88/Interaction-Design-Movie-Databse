$(() => {
  let $log = $(".event-log")
  let logEvent = (message) => {
    $log.text($log.text() + message + "\n")
      .scrollTop($log[0].scrollHeight - $log.height())
  }

  $(".change-poster").movieSlide({
    change: function (spot, newSpot) {
      logEvent("Slide: moved from " + spot + " to " + newSpot)
    }
  })
})
