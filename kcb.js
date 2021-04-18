$(function(){
    $('header .sub-nav .has-children').on('click', function(event){
		event.preventDefault();
		$('header .mega-menu').removeClass('open');
		if(!$(this).hasClass('active')){
			$('header .sub-nav .has-children').removeClass("active");			
			$(this).addClass('active');
			$(this).parent().find('.mega-menu').addClass('open');
		}
		else{			
			$(this).removeClass('active');
		}
	});
                    
});