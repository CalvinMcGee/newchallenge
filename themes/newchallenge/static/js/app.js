$(document).foundation();
$(document).ready(function() {
  $('.toggle-topbar').click(function(e) {
    e.preventDefault();
    $('nav').toggleClass('expanded');
  });
});
