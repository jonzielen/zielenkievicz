$(function() {
  $('.notMmaintained').each(function() {
    var message = 'Aspects of this code have changed since<br />I last worked on this.';
    var container = '<div class="slideshowbox"><h3>'+message+'</h3></div>';

    $(this).addClass('slide');
    $(this).append(container);
  });
});
