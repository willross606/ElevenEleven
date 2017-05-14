/* Adding to Github */

"use strict";

var data = [
	[1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1]
];

var shapes = [
	{
		id: 1,
		color: '#531982',
		currentVariation: 0,
		variations: [
			[[ -1, 0],[ 0, 0],[ 0,-1],[+1,-1]],
			[[ 0, -1],[ 0, 0],[-1, 0],[-1,+1]],
			[[ -1, -1],[ 0, -1],[0, 0],[+1,0]]
		],
		newShape: [
			[0,0,0,0,0],
			[0,0,1,1,0],
			[0,1,1,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0]
		]
	},
	{
		id: 2,
		color: '#ff3457',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[+1,-1],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1,-1],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[+1, 1],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1,+1],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[+1,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[+1,-1]],
			[[ 0, 0],[-1, 0],[-1,-1],[+1, 0]],
			[[ 0, 0],[-1, 0],[-1,+1],[+1, 0]]
		]
	},
	{
		id: 3,
		color: '#f450ff',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[-1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[+1, 0],[-1, 0],[ 0,+1]],
			[[ 0, 0],[+1, 0],[-1, 0],[ 0,-1]] 
		]
	},
	{
		id: 4,
		color: '#1dcc41',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[-1, 0],[+1, 0]],
			[[ 0, 0],[ 0, +1],[ 0,-1]]
		]
	},
	{
		id: 5,
		color: '#30abb2',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]],
			[[ 0, 0],[-1, 0],[+1, 0],[ 0,-1],[ 0,+1]]
		]
	},
	{
		id: 6,
		color: '#531982',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[ 0,-1],[ 0,+2],[ 0,+1]],
			[[ 0, 0],[+1, 0],[+2, 0],[-1, 0]],
			[[ 0, 0],[ 0,-1],[ 0,+2],[ 0,+1]],
			[[ 0, 0],[+1, 0],[+2, 0],[-1, 0]]
		]
	},
	{
		id: 7,
		color: '#ff3457',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]],
			[[ 0, 0],[-1,-1],[ 0,-1],[-1,0]]
		]
	},
	{
		id: 8,
		color: '#f450ff',
		currentVariation: 0,
		variations: [
			[[ 0, 0],[ 0,-1]],
			[[ 0, 0],[-1, 0]]
		]
	},
	{
		id: 9,
		color: '#1dcc41',
		currentVariation: 0,
		variations: [
			[[ 0, 0]],
			[[ 0, 0]],
			[[ 0, 0]],
			[[ 0, 0]],
			[[ 0, 0]],
			[[ 0, 0]],
			[[ 0, 0]],
			[[ 0, 0]]
		]
	}
];
var shapeTemplateOrigin = {
	x: 2,
	y: 2
};

var game = {
	score: 0,
	currentShape: 5,
	currentShapes: [0,1,2],
	level: 1,
	levelCounter: 0,
	canDropGlobal: true
};

function drawOptions(){
	// Empty shape options ahead of redraw
	$('.pieces').empty();
	// Cycle through all three of the current shape options
	for (var shapeIndex = 0; shapeIndex < game.currentShapes.length; shapeIndex++){
		// Define an empty shape
		var newShape  = [
			[0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0]
		];
		
		// The centre square is alwayes used, so set that to '1'
		newShape[shapeTemplateOrigin.x][shapeTemplateOrigin.y] = 1;
		
		// Get reference to current shape option
		var thisShape = game.currentShapes[shapeIndex];
		
		// Cycle through each of the coordinates for this shape (i.e. [[ 0, 0],[-1,-1],[ 0,-1],[-1,0]] ) and change relevant position to '1', this drawing shape in data
		for (var i = 0; i < shapes[thisShape].variations[0].length; i++) {
			var newShapeX = shapeTemplateOrigin.x + shapes[thisShape].variations[shapes[thisShape].currentVariation][i][0];
			var newShapeY = shapeTemplateOrigin.y + shapes[thisShape].variations[shapes[thisShape].currentVariation][i][1];
			newShape[newShapeX][newShapeY] = 1;
			// console.log('newShape: ' + newShape);
		}
		
		// Create a div for each square that makes up this shape option
		var displayShape = "<div data-pieceid='" + thisShape + "'>";
		for (var i = 0; i < newShape.length; i++){
			displayShape = displayShape + "<p style='display:block; clear:both; margin:0; padding:0;'>";
			for (var j = 0; j < newShape[i].length; j++){
				if (newShape[i][j] == 1) {
					displayShape = displayShape + "<div class='sq2' style='background-color:" + shapes[thisShape].color + ";'></div>";	
				} else {
					displayShape = displayShape + "<div class='sq2' style='background-color:#ccc;'></div>";	
				}
			}		
			displayShape = displayShape + "</p>";
		}
		displayShape = displayShape + "</div>";
		
		// Append the shape option div to screen 
		$('.pieces').append(displayShape);
	}
	
	// NEED TO CHECK FOR NO AVAILABLE MOVES HERE
	checkForNoMoreMoves()
	
}

// Adds supplied number to score, and redraws on screen
function updateScore(amount) {
	game.score = game.score + amount;
	$('span.score').empty().append(game.score);
}

function updateLevel(){
    game.levelCounter++;
    if (game.levelCounter === 10){
        game.level++;
        game.levelCounter = 0;		
    }
    $('.level').empty().append(game.level);
	console.log('LevelCounter: ' + game.levelCounter);
}

// Empties and redraws main game grid
function drawGrid(){
	$('.grid-wrapper').empty();
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++){
			if (data[i][j] === 0) {
				$('.grid-wrapper').append('<div class="sq" data-x="' + j + '" data-y="' + i + '"></div>');
			}
			if (data[i][j] > 0) {
				$('.grid-wrapper').append('<div class="sq" data-x="' + j + '" data-y="' + i + '" style="background-color:' + shapes[data[i][j] -1].color + '"></div>');
			}
		}
	}
}

function drawShape(thisX, thisY){
	if (game.currentShape !== null) {
		if (game.canDropGlobal === true) {
			data[thisY][thisX] = 1;
			for (var i = 0; i < shapes[game.currentShape].variations[shapes[game.currentShape].currentVariation].length; i++) {
				// data[thisY + shapes[game.currentShape].variations[0][i][0]][thisX + shapes[game.currentShape].variations[0][i][1]] = 1;
				data[thisY + shapes[game.currentShape].variations[shapes[game.currentShape].currentVariation][i][0]][thisX + shapes[game.currentShape].variations[shapes[game.currentShape].currentVariation][i][1]] = shapes[game.currentShape].id;
			}
		  // Remove shape option
		  $('.pieces > div').each(function(){
			var thisShapeID = $(this).data('pieceid');
			if (thisShapeID === game.currentShape) {
				// Remove the shape user just played from shape options
				for (var i = 0; i < game.currentShapes.length; i++){
					if (game.currentShapes[i] === thisShapeID) {
						game.currentShapes.splice(i,1);
						console.log('This shapeid: ' + thisShapeID);
					}
				}	
				
				// Generate new shape options and append to shape options array
				var newNumber = getUniqueRandom(game.currentShape);
				console.log('newNumber: ' + newNumber);
				game.currentShapes.push(newNumber);
				drawOptions();
				console.log('shapes: ' + game.currentShapes);
			}
		  });
		  updateScore(10);
		  game.currentShape = null;
		}
		checkForRows();
	}
}

// Checks if the currentShape can be dropped on the supplied XY grid square.
// N.B. Currently only compares game.currentShape. Would be good if could compare to a supplied shape.
/* 
function canDropTest(thisX, thisY, thisShape){
	var canDrop = true;
	if (game.currentShape != null) {
		for (var i = 0; i < shapes[game.currentShape].variations[0].length; i++) {
			// if (data[thisY + shapes[game.currentShape].variations[0][i][0]][thisX + shapes[game.currentShape].variations[0][i][1]] === 1 ||
			if (data[thisY + shapes[game.currentShape].variations[0][i][0]][thisX + shapes[game.currentShape].variations[0][i][1]] > 0 ||
			   data[thisY + shapes[game.currentShape].variations[0][i][0]][thisX + shapes[game.currentShape].variations[0][i][1]] === 'undefined') {
				canDrop = false;
			}
			
			var hoverY = thisY + shapes[game.currentShape].variations[0][i][0];
			var hoverX = thisX + shapes[game.currentShape].variations[0][i][1];
			$('.sq').each(function(){
				if ($(this).data('x') === hoverX && $(this).data('y') === hoverY) {
					var thisColor = shapes[game.currentShape].color;
					if (canDrop == true) {
						// $(this).css({'background-color': '#aaa'});
						$(this).css({'background-color': thisColor});
					} else {
						$(this).css({'background-color': 'red'});
					}
				}
			});
		}
	}
	return canDrop;
}
*/

function canDropTest(thisX, thisY, thisShape, thisVariation){
	// console.log('thisShape: ' + thisShape)
	// console.log('thisVariation: ' + thisVariation)
	var canDrop = true;
	if (thisShape != null) {
		for (var i = 0; i < shapes[thisShape].variations[thisVariation].length; i++) {
			var thisVariationY = shapes[thisShape].variations[thisVariation][i][0];
			var thisVariationX = shapes[thisShape].variations[thisVariation][i][1];
			// if (data[thisY + shapes[thisShape].variations[thisVariation][i][0]][thisX + shapes[thisShape].variations[thisVariation][i][1]] > 0 || data[thisY + shapes[thisShape].variations[thisVariation][i][0]][thisX + shapes[thisShape].variations[thisVariation][i][1]] === 'undefined') {
			// console.log('data[thisY + thisVariationY][thisX + thisVariationX]: ' + data[thisY + thisVariationY][thisX + thisVariationX])
			if (data[thisY + thisVariationY][thisX + thisVariationX] > 0 || data[thisY + thisVariationY][thisX + thisVariationX] == 'undefined') {
					canDrop = false;
			}
			
			var hoverY = thisY + shapes[thisShape].variations[thisVariation][i][0];
			var hoverX = thisX + shapes[thisShape].variations[thisVariation][i][1];
			$('.sq').each(function(){
				if ($(this).data('x') === hoverX && $(this).data('y') === hoverY) {
					var thisColor = shapes[thisShape].color;
					if (canDrop == true) {
						// $(this).css({'background-color': '#aaa'});
						$(this).css({'background-color': thisColor});
					} else {
						$(this).css({'background-color': 'red'});
					}
				}
			});
		}
	}
	return canDrop;
}

// Generated a random number that is different from the existing two shape options
// Currently just returns new shape, needs to also return new shape variation
/*
function getUniqueRandom(){
	var newRandom = game.currentShapes[0];
	while (newRandom == game.currentShapes[0] || newRandom == game.currentShapes[1]) {
        var rand = Math.floor(Math.random() * shapes.length) + 0;
        newRandom = rand;
    }
	return newRandom;
}
*/


// Generated a random number that is different from the existing two shape options
// Also randomly pick a variation
function getUniqueRandom(){
	var newRandom = game.currentShapes[0];
	while (newRandom == game.currentShapes[0] || newRandom == game.currentShapes[1]) {
        var rand = Math.floor(Math.random() * shapes.length) + 0;
        newRandom = rand;
    }
	var newCurrentVariation = shapes[newRandom].currentVariation;
	while (newCurrentVariation == shapes[newRandom].currentVariation) {
		var randVariation = Math.floor(Math.random() * shapes[newRandom].variations.length) + 0;	
		newCurrentVariation = randVariation;
	}
	shapes[newRandom].currentVariation = newCurrentVariation;
	return newRandom;
}


// Check to see if there are any completed rows (or columns) and remove
function checkForRows(){
    var completeRows = [];
	for (var y = 1; y < 11; y++){
       var sum = 0; 
		for (var x = 0; x < 11; x++){
			if (data[y][x] > 0) { sum++; }
		}
		// console.log('Sum: ' + sum);
       if (sum === 11){
           completeRows.push(y);
       }
    }   

    var completeColumns = [];
    for (var y = 1; y < 11; y++){
	var sumy = 0;
        for (var x = 1; x < 11; x++){
           if (data[x][y] > 0 ) { sumy++; }
        }
		// console.log('sumy: ' + sumy)
        if (sumy === 10){
           completeColumns.push(y);
        }
    }
    
    if (completeColumns.length > 0) {
        console.log('complete columns: ' + completeColumns.length); 
        for (var i = 0; i < completeColumns.length; i++){
            for (var y = 1; y < 11; y++){
                data[y][completeColumns[i]] = 0;
            }
			updateScore(100);
            updateLevel();
        }
    }
    if (completeRows.length > 0){
        console.log('complete rows: ' + completeRows.length)
        for (var i = 0; i < completeRows.length; i++) {
            for (var x = 1; x < 11; x++){
                data[completeRows[i]][x] = 0;
            }			
			updateScore(100);
            updateLevel();
        }
    }    
}

function getStartingOptions(){
	game.currentShapes[0] = getUniqueRandom();
	game.currentShapes[1] = getUniqueRandom();
	game.currentShapes[2] = getUniqueRandom();
}

function checkForNoMoreMoves(){
	// Var movesAvailable = false;
	var movesAvailable = false;
	// Cycle through each of the three available shape options
	for (var i = 0; i < game.currentShapes.length; i++) {			
	  // For this shape option, cycle through each square in main game grid
	  for (var y = 1; y < 10; y++) {
		 for (var x = 1; x < 10; x++) {
	    	// Could this shape be played here? Use similar code to 'can drop' / hover. 
			if (canDropTest(x, y, game.currentShapes[i], shapes[game.currentShapes[i]].currentVariation)) {
				// If canDrop = true, then set MovesAvailable = true;
				movesAvailable = true;				
			}
		 }
	  }
	}
 	// At end of cycle, if movesAvailable is still false, then GAME OVER! Else, keep going.
	console.log('Moves available: ' + movesAvailable);
	if (movesAvailable == false) { alert('Game over'); };
}

$(function() {

	/*
	$('.grid-wrapper').on('mouseover', '.sq', function(){
		var thisX = $(this).data('x');
		var thisY = $(this).data('y');
		if (canDropTest(thisX, thisY, game.currentShape, shapes[game.currentShape].currentVariation)) {
			// console.log('Can drop!');
			game.canDropGlobal = true;
		} else {
			// console.log('Cannot drop!');
			game.canDropGlobal = false;
		}
	}).on('mouseleave', '.sq', function(){
		drawGrid();
	});
	*/
	
	$('.grid-wrapper').on('mouseover', '.sq', function(){
		var thisX = $(this).data('x');
		var thisY = $(this).data('y');
		if (game.currentShape != null) {
			if (canDropTest(thisX, thisY, game.currentShape, shapes[game.currentShape].currentVariation)) {
				// console.log('Can drop!');			
				game.canDropGlobal = true;
			} else {
				// console.log('Cannot drop!');
				game.canDropGlobal = false;
			}
		}
	}).on('mouseleave', '.sq', function(){
		drawGrid();
	});
	
	$('.grid-sq').on({
		mouseenter: function(){
			var thisImage = $(this).find('img').attr('src');
			var thisContent = $(this).find('.grid-sq-content').children().clone();
			$('.grid-highlight').find('img').attr('src', thisImage);
			$('.grid-highlight .grid-sq-content').append(thisContent);
			$('.grid-highlight').css({'display':'block'});
		},
		mouseleave: function(){
			$('.grid-highlight .grid-sq-content').empty();
			$('.grid-highlight').css({'display':'none'});
		}
	});	
	
	$('.pieces').on('click', '> div', function(){
		game.currentShape = $(this).data('pieceid');
		$('.pieces > div').each(function(){ 
			$(this).removeClass('selected');								 
		});
		$(this).addClass('selected');	
		console.log('data-pieceid: ' + $(this).data('pieceid'));
	});
	
	$('.grid-wrapper').on('click', '.sq', function(){
		// console.log('Shape currentVariation: ' + shapes[game.currentShape].currentVariation);
		var thisX = $(this).data('x');
		var thisY = $(this).data('y');
		drawShape(thisX, thisY);
		drawGrid();		
	});
	
	// INIT
	getStartingOptions();
	drawOptions();
	// game.currentShape = getUniqueRandom(game.currentShape);
	game.currentShape = game.currentShapes[0];
	$('.pieces div:first-child').addClass('selected');
	drawGrid();
    checkForRows();
    updateLevel();
	console.log('Current shapes: ' + game.currentShapes);
});