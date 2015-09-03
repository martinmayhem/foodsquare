$(document).ready(function() {

	$(window).resize();
	var sizeOfSquareWidth = 150;


	//Visa vilka squares som ska visas
	for (var i = 30 ; i >= 0; i--) {
		$("#squares").append("<div class='square-" + i + "'></div>");

	};

	//Random Color squares - KAN TAS BORT SENARE
	var squares = $('[class^="square-"]');
		squares.each(function(){
			$(this).css("background-color","rgb(" + Math.floor((Math.random() * 255) + 1) + ","
												  + Math.floor((Math.random() * 255) + 1) + ","
												  + Math.floor((Math.random() * 255) + 1));
	});

	//Resize at start of page load and when resizing	
	$(document).ready(resizeSquares);
	$(window).resize(resizeSquares);

	//Resize the squares when the window width and height changes
	function resizeSquares(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		var modWidth = windowWidth%sizeOfSquareWidth;
		var numberOfSquareInARow = Math.floor(windowWidth/sizeOfSquareWidth);
		var addedDiff = modWidth/numberOfSquareInARow;
		console.log(addedDiff);
		var squaresSelect = $('[class^="square-"]');
		squaresSelect.each(function(){
			$(this).css("width", sizeOfSquareWidth + addedDiff);
	})
	}


/*
	//Mouseover on foodDivs overlay
	var squaresSelect = $('[class^="square-"]');
	$(squaresSelect).mouseover(function(){
		$(this).css({
			  height: $(this).siblings().height()*2,
			  width: $(this).siblings().width()*2
		});

	})
	$(squaresSelect).mouseout(function(){
		$(this).css({
			  height: $(this).siblings().height(),
			  width: $(this).siblings().width()
		});
	})	
*/
});

