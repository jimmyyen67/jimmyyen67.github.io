var position = $(window).scrollTop();
var bgHeight = position / 20;
$("#header").css("background-position", `left -${bgHeight}px`);
// should start at 0
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    bgHeight = position / 20;
    $("#header").css("background-position", `left -${bgHeight}px`);
  } else {
    bgHeight = position / 20;
    $("#header").css("background-position", `left -${bgHeight}px`);
  }
  position = scroll;
});