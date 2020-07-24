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
$("#goseek").on("click",()=>{
  $('html, body').animate({
    scrollTop: ($('#sectionOne').offset().top)
  }, 700);
})
function toSectionTwo() {
  $('html, body').animate({
    scrollTop: ($('#sectionTwo').offset().top)
  }, 700);
}
function toSectionThree() {
  $('html, body').animate({
    scrollTop: ($('#sectionThree').offset().top)
  }, 700);
}
function toSectionFour() {
  $('html, body').animate({
    scrollTop: ($('#sectionFour').offset().top)
  }, 700);
}

likes();
function likes() {
  $.get("./plugin/likes.php", {}, function (likes) {
    $("#likes").html(likes);
  })
}
$("#likes").on("click", function () {
  let action = $("#likes").data("action");
  $.get("./plugin/likes.php", { action }, function (likes) {
    if (action == "like") {
      $("#likes").data("action", "unlike");
    } else {
      $("#likes").data("action", "like");
    }
    $("#likes").html(likes);
  })
})

function displayPS(id) {
  $(`#${id}`).fadeToggle();
}

$("#totop").on("click", function () {
  $('html, body').animate({
    scrollTop: (0)
  }, 1000);
})
