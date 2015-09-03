$(document).ready(function() {

	//Scroll to the top of the page function
	$(".top-of-page-button").on("click",function(){
       $("html body").animate({ scrollTop: "0px" });
    });    

	$(window).scroll(function(){
		//Making the scrollable-header-container viewable when scrolling down,
		// and vice verse when scrolling up
		scroll = getScroll();
		scroll = getScroll();
		if (scroll.top > 100) {

			var scrollableHeader = document.getElementById('scrollable-header-container');
			scrollableHeader.style.top = "0px";
			/*
			var floatingNavigator = document.getElementById('floating-navigator-bar');
			floatingNavigator.style.top = "70px";
			*/
		}
		else{
			var scrollableHeader = document.getElementById('scrollable-header-container');
			scrollableHeader.style.top = "-70px";
			/*
			var floatingNavigator = document.getElementById('floating-navigator-bar');
			floatingNavigator.style.top = "-130px";
			*/
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






});