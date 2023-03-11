const randomNumber1 = randomIntFromInterval(1, 6)
const randomNumber2 = randomIntFromInterval(1, 6)

associateValueWithPic(randomNumber1,0)
associateValueWithPic(randomNumber2,1)

//If player 1 wins
if (randomNumber1 > randomNumber2) 
{
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) 
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} 
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}

function randomIntFromInterval(min, max) 
{ // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function associateValueWithPic(randomNumber1,val)
{
    var randomImageSource = "images/dice" + randomNumber1 + ".png";; //dice1.png - dice6.png
    document.querySelectorAll("img")[val].setAttribute("src", randomImageSource);
}

