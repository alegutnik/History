$(function() {


		$('.card_inactive').find('.quest_menu_inactive').click(function(){
			$(this).prev('.quest_block').children('.quest_answer').slideDown();
			$(this).html('<i class="fas fa-times-circle"></i>');
			$(this).removeClass('quest_menu_inactive');
			$(this).addClass('quest_menu_active');
			$(this).parent('.card_inactive').addClass('card');
		});

		$('.quest_menu_active').click(function(){
			$(this).prev('.quest_block').children('.quest_answer').slideUp();
		})
	
});
