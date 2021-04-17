var num = 6;
var colors = generateRandomColor(num);
var body = document.getElementsByTagName('body');
var squares = document.querySelectorAll(".square");
var pickColor =pickedColor(num);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var Reset = document.querySelector(".reset");
var Easy = document.querySelector(".easy");
var Hard = document.querySelector(".hard");

Hard.addEventListener("click", function(){
	Easy.style.background = "buttonface";
	Hard.style.background = "steelblue";
	num = 3;
	for(i = 0; i < 6; i++)
	{
		squares[i].style.background = "#232323";
	}
	colors = generateRandomColor(num);
	pickColor =pickedColor(num);
	colorDisplay.textContent = pickColor;
	for(i = 0; i < colors.length; i++)
	{
		squares[i].style.background = colors[i];
	}
	Reset.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	h1.style.background = "#232323";
})
Easy.addEventListener("click", function(){
	Hard.style.background = "buttonface";
	Easy.style.background = "steelblue";
	num = 6;
	colors = generateRandomColor(num);
	pickColor =pickedColor(num);
	colorDisplay.textContent = pickColor;
	for(i = 0; i < colors.length; i++)
	{
		squares[i].style.background = colors[i];
	}
	Reset.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	h1.style.background = "#232323";
})
Reset.addEventListener("click", function()
{
	colors = generateRandomColor(num);
	pickColor =pickedColor(num);
	colorDisplay.textContent = pickColor;
	for(i = 0; i < colors.length; i++)
	{
		squares[i].style.background = colors[i];
	}
	Reset.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	h1.style.background = "#232323";
});
colorDisplay.textContent = pickColor;
for(var i = 0; i < colors.length; i++)
{
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickColor) {
			messageDisplay.textContent = "CORRECT!!!";
			h1.style.background = pickColor;
			changeColor(pickColor);
			Reset.textContent = "Play Again!!!"

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "TRY AGAIN :(";

		}
	});
}



function changeColor(color)
{
	for(var i = 0; i < colors.length; i++)
	{
		squares[i].style.background = pickColor;
	}
}


function generateRandomColor(num)
{
	var color = [];
	for(var i = 0; i < num; i++)
	{
		color.push(randomColor());
	}
	return color;
}



function randomColor()
{
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		return "rgb("+ r +", "+ g +", "+ b +")";
}

function pickedColor(num)
{
	var random = Math.floor(Math.random()*num);
	return colors[random];
}