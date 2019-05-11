var numSquares = 6;
var colors = [];
var pickedColor;
var sq = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setMode();
    setSquare();
    reset();
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<sq.length;i++)
    {
        if(colors[i])
        {
            sq[i].style.display = "block";
            sq[i].style.background = colors[i];
        }
        else{
            sq[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
    messageDisplay.textContent = null;
    resetButton.textContent = "New Colors";
});

function setSquare(){
    for(var i=0;i<sq.length;i++){
        sq[i].addEventListener("click",function(){
            var clickedColor = this.style.background;
            if(clickedColor===pickedColor)
            {
                messageDisplay.textContent = "Correct!";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColor(color){
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background = color;
    }
}

function pickColor(color){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = "rgb("+r+", "+g+", "+b+")";
    return color;
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function setMode(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares=3:numSquares=6;
        reset();
    });
    }
}