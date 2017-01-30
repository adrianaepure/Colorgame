var numSquares = 6;
var colors ;
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
};
function setupSquares(){
for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab clicked square color
			var clickedColor = this.style.background;
			//compare to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetBtn.textContent = "Play Again";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				alert("Wrong color, pick again!");
				this.style.background= "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
};

function reset(){
	//generate colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	//reset message 
	messageDisplay.textContent="";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelBlue";
}

resetBtn.addEventListener("click", function(){
	reset();
});


function changeColors(color){
		//loop through all the squares
		//change each color to match given color
		for(var i = 0; i < squares.length; i++){
			console.log(color);
			squares[i].style.background = color;
		}
	}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length );
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i < num; i++){
			arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a "red", "green", "blue" from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}