var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementById("heading");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
	});
}

//easyBtn.addEventListener("click", function() {
//	easyBtn.classList.add("selected");
//	numberOfSquares = 3;
//	hardBtn.classList.remove("selected");
//	colors = generateRandomColors(numberOfSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for (var i = 0; i < squares.length; i++)
//	{
//		if (colors[i]) {
//			squares[i].style.background = colors[i];
//		}
//		else {
//			squares[i].style.display = "none";
//		}
//	}
//});
//
//hardBtn.addEventListener("click", function() {
//	easyBtn.classList.remove("selected");
//	numberOfSquares = 6;
//	hardBtn.classList.add("selected");
//	colors = generateRandomColors(numberOfSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for (var i = 0; i < squares.length; i++)
//	{
//		squares[i].style.background = colors[i];
//		squares[i].style.display = "block";
//	}
//});

resetButton.addEventListener("click", function() {
	// generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		console.log(clickedColor, pickedColor);
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			console.log(h1.style.background);
		} 
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make array
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb("+ r + ", " + g + ", " + b + ")"
}