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
