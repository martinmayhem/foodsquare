(function ($, window, document, undefined) {
 
 	$(function () {
    	$("#header-page").load("partials/header.html");
    	$("#body-page").load("partials/body.html");
    	$("#footer-page").load("partials/footer.html");
  	});
 
	$(window).scroll(function(){
		scroll = getScroll();

		scroll = getScroll();
		if (scroll.top > 100) {

			var value = document.getElementById('scrollable-header-container');
			value.style.top = "0px";
		}
		else{
			var value = document.getElementById('scrollable-header-container');
			value.style.top = "-60px";
		};

	function getScroll () {
		var b = document.body;
		var e = document.documentElement;
		return {
			left: parseFloat( window.pageXOffset || b.scrollLeft || e.scrollLeft ),
			top: parseFloat( window.pageYOffset || b.scrollTop || e.scrollTop )
		};
	}

	});

})(jQuery, window, document);