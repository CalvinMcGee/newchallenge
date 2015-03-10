$(document).ready(function() {
  $('nav').doubleTapToGo();
  $('.toggle-topbar').click(function(e) {
    e.preventDefault();
    $('nav').toggleClass('expanded');
  });
});
