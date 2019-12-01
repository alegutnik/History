$(function() {

	$('.card_inactive').children('.quest_menu').click(function () {
		if ($(this).prev('.quest_block').children('.quest_answer:first').is(":hidden")) {
			$(this).prev('.quest_block').children('.quest_answer').slideDown()
			$(this).html('<i class="fas fa-times-circle"></i>');
			$(this).parent('.card_inactive').addClass('card');
		} else {

			$(this).prev('.quest_block').children('.quest_answer').slideUp()
			$(this).html('<i class="fas fa-chevron-circle-down"></i>');
			$(this).parent('.card_inactive').removeClass('card');
		}
	});



$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});









});

