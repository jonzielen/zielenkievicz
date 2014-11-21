$(function() {
  // add slideshow box
  /*$('.slide').each(function() {
    var slideShowBox = '<div class="slideshowbox"></div>';
    $(this).append(slideShowBox);
  });*/

  $('.notMmaintained').each(function() {
    var message = 'Aspects of this site have changed since<br />I last worked on this code.';
    var container = '<div class="slideshowbox"><h3>'+message+'</h3></div>';

    $(this).addClass('slide');
    $(this).append(container);
  });





});
