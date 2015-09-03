$(document).ready(function() {

	//Square Variabels
	var sizeOfSquareWidth = 150;
	var sizeOfSquareHeight = 150;

	var squareLimit = {
         small: 320,
         medium: 700,
         large: 1100,
         xLarge: 1300
	}

	var sizeOfSquareSmall = 150;
	var sizeOfSquareMedium = 150;
	var sizeOfSquareLarge = 220;
	var sizeOfSquareXLarge = 300;



	//Visa vilka squares som ska visas
	for (var i = 60 ; i >= 0; i--) {
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
	$(document).ready(adjustSquareSizeToWindowSize);	
	$(document).ready(resizeSquares);
	$(window).resize(adjustSquareSizeToWindowSize);
	$(window).resize(resizeSquares);


	//Resize the squares when the window width and height changes
	function resizeSquares(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		var modWidth = windowWidth%sizeOfSquareWidth;
		var modHeight = windowHeight%sizeOfSquareHeight;

		var numberOfSquareInARow = Math.floor(windowWidth/sizeOfSquareWidth);

		var addedDiffWidth = modWidth/numberOfSquareInARow;
		var addedDiffHeight = modHeight/numberOfSquareInARow;

		var squaresSelect = $('[class^="square-"]');
		squaresSelect.each(function(){
			$(this).css("width", sizeOfSquareWidth + addedDiffWidth);
			$(this).css("height", sizeOfSquareHeight + addedDiffHeight);
		})
	}

	function adjustSquareSizeToWindowSize(){
		var windowWidth = $(window).width();

		if(windowWidth < squareLimit.small){
			sizeOfSquareWidth = sizeOfSquareSmall;
			sizeOfSquareHeight = sizeOfSquareSmall;
		}
		else if(windowWidth < squareLimit.medium){
			sizeOfSquareWidth = sizeOfSquareMedium;
			sizeOfSquareHeight = sizeOfSquareMedium;
		}
		else if(windowWidth < squareLimit.large){
			sizeOfSquareWidth = sizeOfSquareLarge;
			sizeOfSquareHeight = sizeOfSquareLarge;
		}
		else if(windowWidth < squareLimit.xLarge){
			sizeOfSquareWidth = sizeOfSquareXLarge;
			sizeOfSquareHeight = sizeOfSquareXLarge;
		}
		else{
		}
	}



	//Mouseover on foodDivs overlay
	var squaresSelect = $('[class^="square-"]');
	$(squaresSelect).mouseover(function(){
		$(this).before("<div class='big-square'></div>");
		($(".big-square").css("left", $(this).offset().left+ "px"));
		($(".big-square").css("top", $(this).offset().top+ "px"));

	})
	$(squaresSelect).mouseout(function(){
	$(".big-square").remove();
	})	

});

