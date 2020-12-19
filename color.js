var numSquares = 3;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbCode = document.getElementById("rgbCode");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");



resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  messageDisplay.textContent = "";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})

rgbCode.textContent = pickedColor;

for(var i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Good Job!";
      resetButton.textContent = "Play Again ?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color){
for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  var colorsarray = []
  for (var i = 0; i < num; i++) {
    colorsarray.push(randomColor())
  }
  return colorsarray;
}

function randomColor(){
var r = Math.floor(Math.random() * 256)
var g = Math.floor(Math.random() * 256)
var b = Math.floor(Math.random() * 256)
return "rgb(" + r +", " + g + ", " + b +")";
}
