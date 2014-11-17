$(function() {

	//set titles to same height
	if ('#html-emails') {
		function titleHeightAdjust() {


			$('figure h2').each(function(index) {
				var captionHeight = $(this).height();

				console.log(index, captionHeight);


			});
		};

		titleHeightAdjust();

		$(window).resize(function()  {
			titleHeightAdjust();
		});

	};

	/* jquery modal */
	/*function goModal(getAttrs) {
		var overlay = $('<div id="overlay"></div>');
		var modal = $('<div id="modal"><img src="'+getAttrs.src+'" alt="" width="'+getAttrs.width+'" height="'+getAttrs.height+'" style="display:block;border:none;" /></div>');
		var closeButton = $('<div id="close"><a href="#link" id="close-button">close</a></div>');
		$('body').append(overlay, modal);
		$(modal).append(closeButton);

		$('#modal').css({
			position: 'fixed',
			top: ($(window).height() - $('#modal').outerHeight()) / 2,
			left: ($(window).width() - $('#modal').outerWidth()) / 2
		});

		$('#close-button, #overlay').on('click', function(e) {
			closeModal();
			e.preventDefault();
		});
	};

	function closeModal() {
		$('#overlay').remove();
		$('#modal').remove();
	};

	function resize() {
		$('#modal').css({
			position: 'fixed',
			top: ($(window).height() - $('#modal').outerHeight()) / 2,
			left: ($(window).width() - $('#modal').outerWidth()) / 2
		});
	};

	$('img').click(function() {
		var getAttrs = [];
				getAttrs['src'] = $(this).attr('src');
				getAttrs['width'] = $(this).attr('width');
				getAttrs['height'] = $(this).attr('height');
		goModal(getAttrs);
	});

	$(window).resize(function()  {
		resize();
	});*/






/* end */
});
