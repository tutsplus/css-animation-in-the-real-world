$(function() {

  $(window).scroll(function() {

    if($(window).scrollTop() > 1) {
      $('h1').removeClass('offToLeft').addClass('bounceInLeft');
    }

  });

});
