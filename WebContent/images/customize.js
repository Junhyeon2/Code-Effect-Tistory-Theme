$(document).ready(function() {
	$('.article-title').css('width', $(window).width());
	$('.article-title').css('height', $(window).height());
	$(window).resize(function() {
		$('.article-title').css('width', $(window).width());
		$('.article-title').css('height', $(window).height());
	});
	$(window).scroll(function() {
		console.log();
		if($(document).scrollTop() > $(window).height() - $('#navWrapper').height()){
			$('#navWrapper').addClass('nav-scroll');
		}else{
			$('#navWrapper').removeClass('nav-scroll');
		}
	});
	$('#navLeft').hover(
		function(){
			
			$('#iconBars').addClass('display-none');
			$('#iconArrow').removeClass('display-none');
			$('#iconArrow').addClass('rotating');

	    }, function(){
	    	$('#iconBars').removeClass('display-none');
			$('#iconArrow').addClass('display-none');
	    }
	);
	$('#navRight').hover(
			function(){
				$('#navRight').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		    }, function(){
		    	$('#navRight').fadeIn(100);
		    }
		);
});