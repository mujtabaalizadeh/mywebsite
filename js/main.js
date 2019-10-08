$(function () {
  $(document).scroll(function () {
    var $nav = $(".main_nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});