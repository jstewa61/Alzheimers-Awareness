$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});

$(".container").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$('.container').on('touchstart', function() {});

/* Button */

function hover() {
  $(".button").on("mouseenter", function() {
    return $(this).addClass("hover");
  });
}

function hoverOff() {
  $(".button").on("mouseleave", function() {
    return $(this).removeClass("hover");
  });
}

function active() {
  $(".button").on("click", function() {
    return $(this).addClass("active");
  });
}

hover();
hoverOff();
active();
