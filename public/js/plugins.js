// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// MODAL PLUGIN
(function($) {
  // basic modal
  var modalConent = '<div id="modal"></div><div id="modal-holder"><div id="modal-content-holder"><div id="modal-close">X</div></div></div>';

  // content to add to modal
  //var conentToAdd = $('#modal-content').clone();
  //$('#modal-content').remove();
  var conentToAdd = $('#modal-content').clone();

  // centers modal
  $.fn.center =  function() {
    var windowWidth = $(window).width()/2; // screen width
    var videoWidth  = $(this).outerWidth()/2; // video width
    var finalWidth  = windowWidth-videoWidth; // subtract to get the center

    if ((windowWidth-videoWidth) > 0) {
      $('#modal-holder').css({
        'left':finalWidth,
        'margin-right':finalWidth
      });
    } else {
      $('#modal-holder').css({
        'left':0,
        'margin-right':0
      });

      /*$('#modal-close').css({
        'right':0,
        'top':(-55)+'px'
      });*/
    };
  };

  //remove modal
  $.fn.removeModal = function() {
    $('#modal, #modal-holder').fadeOut(300, function() {
      $('#modal, #modal-holder').remove();
    });
  };

  // add modal to body
  $.fn.modal = function(conentToAdd) {
    $('body').append(modalConent);
    $('#modal-content-holder').append(conentToAdd);
    $('#modal-holder').center();
  };

  // removes modal
  $('body').on('click', '#modal, #modal-close', function() {
    $(this).removeModal();
  });

  // launch modal
  $('.launchModal').on('click', function(e) {
    // check if image was clicked
    var isImg = $(e.target).is('img');

    if (isImg) {
      var conentToAdd = $(e.target).clone();
      $(this).modal(conentToAdd);
    };
    e.preventDefault();
  });

  // esc key removes modal
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(this).removeModal();
    };
    e.preventDefault();
  });

  $(window).resize(function() {
    $('#modal-holder').center();
  });
}(jQuery));
