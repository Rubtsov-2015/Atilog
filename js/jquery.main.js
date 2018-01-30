$(document).ready(function(){
	/* инициализация функций */
	mobile_menu();
	/* описание функций */
	function mobile_menu(){
		$('.burger_menu').click(function(){
			$(this).closest('nav').toggleClass('active');
		})
	}
});

/* подключение плагинов */