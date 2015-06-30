//NOTE: The grayed out sections were kept to show what I started 
//to work on and struggled with. The uncommented sections are what
//worked best. 

//Purpose: Take text from user input, display text randomly within the bingo board

//Create an array of a number range i.e. range(1, 16)
var range = function(start, end) {
	var numberRange = [];
	for (var i = start; i <= end; i++) {
		numberRange.push(i);
	}
	return numberRange;
}

//Shuffle an array
var shuffle = function(list) {
	debugger;
  	for(var j, x, i = list.length; i; j = Math.floor(Math.random() * i), x = list[--i], list[i] = list[j], list[j] = x);
    return list;
  }

var buzzwordArray = [];

//Define variable x as a shuffled range
var x = range(1, 16);
shuffle(x);

//Get a unique number each time this function is called
var getRandomNum = function(array) {
 var randomIndex = Math.floor(Math.random()*(array.length));
 var randomNum = array.splice(randomIndex,1); 
 return randomNum
};

//Add word to the grid randomly
$(document).ready(function() {
	$("#add").click(function(){
		var buzzword = $("#add_word").val();
		buzzwordArray.push(buzzword);
		$("#square-" + getRandomNum(x)).append("<p>" + buzzword + "</p>");
	})
//append text input to random number div ID
//problem: does not track numbers called

	//after squares are populated
	$('.bingoSpace').click(function () {
    	$(this).toggleClass('highlight');
	});
});

//User will be able to click on a word and make it change

//take input on button click 
//create object with input as text property
//add object to array for shuffling
//when 16 words are added
//shuffled array would be an array of empty objects with indexes
//write words from matching object id to the grid space's id

// var randomizedBingoSquares = [];

// var makeBingoSquare = function(id, text, clicked) {
// 	return {
// 		id: id,
// 		text: text,
// 		clicked: false
// 	};
// }

//Set the state of the board
// var boardState = {
// 	0: {text: "", clicked: false},
// 	1: {text: "", clicked: false},
// 	2: {text: "", clicked: false},
// 	3: {text: "", clicked: false},
// 	4: {text: "", clicked: false},
// 	5: {text: "", clicked: false},
// 	6: {text: "", clicked: false},
// 	7: {text: "", clicked: false},
// 	8: {text: "", clicked: false},
// 	9: {text: "", clicked: false},
// 	10: {text: "", clicked: false},
// 	11: {text: "", clicked: false},
// 	12: {text: "", clicked: false},
// 	13: {text: "", clicked: false},
// 	14: {text: "", clicked: false},
// 	15: {text: "", clicked: false}
// }

// boardState.0
// boardState['0']["text"]

// //row or column
// var state = [[],[],[],[]];
// state[1][1]


//Check that the number has been called
//remove random number from list of numbers

//delete a random number from an array
// var deleteRandomNumberFromArray = function(array) {
//  var randomIndex = Math.floor(Math.random()*array.length);
//  array.splice(randomIndex,1); 
//  console.log(array);
// };

// var deleteRandomNumberFromArray = function(number) {
//  array.splice(array.indexOf("number",1)); 
//  console.log(array);
// };

//generates a random number and returns it from 1-16
//can I make this only return unique numbers?
// var getRandomNum = function() {
//       var array = range(1, 16);
//       var rando = shuffle(array).pop();
//       var trackingArray = [];
//       for (var number in trackingArray){
//       	if (number == rando){
//         rando = shuffle(array).pop();
//         trackingArray.push(rando);
//     	}
//     	else {
//         trackingArray.push(rando);
        
//     	}
//     	return rando;
//   };

// getRandomNum();

//win example based on color of div
// var hasColWin = function() {
// var colWin = false;

// if ( $("#square_1").css("background-color") && $("#square_5").css("background-color") && $("#square_9").css("background-color") && $("#square_13").css("background-color") === "#f4e26d ")
// ||
// $("#square_2").css("background-color") && $("#square_6").css("background-color") && $("#square_10").css("background-color") && $("#square_14").css("background-color") === "#f4e26d ")
// ||
// $("#square_3").css("background-color") && $("#square_7").css("background-color") && $("#square_11").css("background-color") && $("#square_15").css("background-color") === "#f4e26d ")
// ||
// $("#square_4").css("background-color") && $("#square_8").css("background-color") && $("#square_12").css("background-color") && $("#square_16").css("background-color") === "#f4e26d ")
// ){
// 	colWin = true;
// };
// }


//User inserts 16 words to a 4 X 4 grid (Make your own option)

