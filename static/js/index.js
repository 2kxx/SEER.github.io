$(document).ready(function () {
  // Smooth scroll offset for sticky nav
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (!target.length) return;
    event.preventDefault();
    $('html, body').animate(
      { scrollTop: target.offset().top - 52 },
      400
    );
  });

  // Highlight active nav link on scroll
  var sections = ['#abstract', '#cognitive-gap', '#framework', '#mechanism', '#results'];
  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop() + 80;
    sections.forEach(function (id) {
      var $section = $(id);
      if (!$section.length) return;
      var top = $section.offset().top;
      var bottom = top + $section.outerHeight();
      if (scrollPos >= top && scrollPos < bottom) {
        $('.nav-links a').removeClass('is-active');
        $('.nav-links a[href="' + id + '"]').addClass('is-active');
      }
    });
  });
});
