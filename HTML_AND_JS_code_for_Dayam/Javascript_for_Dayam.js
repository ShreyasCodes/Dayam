alert("Player 1, roll the dice first!");
var player2currentposition = -1;
var player2coincircleXposition = 400;
var player2coincircleYposition = 275;
var ball_color2 = "#FF0000";
var player1coincircleXposition = 400;
var player1coincircleYposition = 325;

var player1currentposition = 0;
var dicevalue = 0;
var ball_color = "#002CE6";

let xValueMap = new Map();
let yValueMap = new Map();

//mapping the coordinates of the Middle of the boxes
// so the center of the circle goes in the middle of boxo
//player 1 mapping
xValueMap.set(-1,400);      
yValueMap.set(-1,275);

xValueMap.set(0,400);      
yValueMap.set(0,325);

xValueMap.set(1,400);      
yValueMap.set(1,375);

xValueMap.set(2,400);      
yValueMap.set(2,425);  

xValueMap.set(3,400);      
yValueMap.set(3,475); 

xValueMap.set(4,350);     
yValueMap.set(4,475);  

xValueMap.set(5,350);      
yValueMap.set(5,425);

xValueMap.set(6,350);      
yValueMap.set(6,375);

xValueMap.set(7,300);      
yValueMap.set(7,325);  

xValueMap.set(8,250);      
yValueMap.set(8,325);  

xValueMap.set(9,200);      
yValueMap.set(9,325);  

xValueMap.set(10,200);      
yValueMap.set(10,275);  

xValueMap.set(11,200);      
yValueMap.set(11,225);

xValueMap.set(12,250);      
yValueMap.set(12,225);

xValueMap.set(13,300);      
yValueMap.set(13,225);

xValueMap.set(14,350);      
yValueMap.set(14,175);


xValueMap.set(15,350);      
yValueMap.set(15,125);

xValueMap.set(16,350);      
yValueMap.set(16,75);

xValueMap.set(17,400);      
yValueMap.set(17,75);

xValueMap.set(18,450);      
yValueMap.set(18,75);

xValueMap.set(19,450);      
yValueMap.set(19,125);

xValueMap.set(20,450);      
yValueMap.set(20,175);

xValueMap.set(21,500);      
yValueMap.set(21,225);

xValueMap.set(22,550);      
yValueMap.set(22,225);

xValueMap.set(23,600);      
yValueMap.set(23,225);

xValueMap.set(24,600);      
yValueMap.set(24,275);

xValueMap.set(25,600);      
yValueMap.set(25,325);

xValueMap.set(26,550);      
yValueMap.set(26,325);

xValueMap.set(27,500);      
yValueMap.set(27,325);

xValueMap.set(28,450);      
yValueMap.set(28,375);

xValueMap.set(29,450);      
yValueMap.set(29,425);

xValueMap.set(30,450);      
yValueMap.set(30,475);

xValueMap.set(31,400);      
yValueMap.set(31,475);

xValueMap.set(32,400);      
yValueMap.set(32,425);

xValueMap.set(33,400);      
yValueMap.set(33,375);

xValueMap.set(34,400);      
yValueMap.set(34,325);

const button2 =  document.getElementById('player2_button');
button2.disabled = true;

drawCurrentBoard();


function roll_dice1()
{
//generating random number
dicevalue = Math.floor((Math.random() * 6) + 1);
//Displaying the dicevalue in a alert
alert("Great. You rolled the value:"+ dicevalue);

// when the user is nearing the end, he has to do the exact number
// to reach the end.
// if 32 then roll exactly 2. else show alert. 2 or less.

// PLAYER1

if (player1currentposition == 33 && dicevalue == 1) 
{
	player1currentposition = 34;
}

if (player1currentposition == 33 && dicevalue >1)
{
player1currentposition = 33;

alert("You have to put exactly 1 to win!");
const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
 return;
}
if (player1currentposition == 32 && dicevalue == 2) 
{
player1currentposition = 34;
}


if (player1currentposition == 32 && dicevalue >2)
{
player1currentposition = 32;
alert("You have to put exactly 2 to win!");

const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
return;
}

if (player1currentposition == 31 && dicevalue == 3) 
{
  player1currentposition = 34;
}

if (player1currentposition == 31 && dicevalue >3)
{
player1currentposition = 31;
alert("You have to put exactly 3 to win!"); 
const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
 return;
}

if (player1currentposition == 30 && dicevalue == 4) 
{
player1currentposition = 34;
}
//this code is saying that if the P1 current position = 30 and dice value > 4, then put the p1 current position at 30. 
if (player1currentposition == 30 && dicevalue >4)
{
//p1 current position = 30 if the condition above is true.
player1currentposition = 30;
//alert! says a speech alert on the top screen.
alert("You have to put exactly 4 to win!");
const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
 return;
}
if (player1currentposition == 29 && dicevalue == 5) 
{
player1currentposition = 34;
}
//this code is saying that if the P1 current position = 29 and dice value > 5, then put the p1 current position at 29. 
if (player1currentposition == 29 && dicevalue >5)
{
player1currentposition = 29;
alert("You have to put exactly 5 to win!");
const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
 return;
}
if (player1currentposition == 28 && dicevalue == 6) 
{
player1currentposition = 34;
}
if (player1currentposition == 28 && dicevalue >6)
{
player1currentposition = 28;
alert("You have to put exactly 6 to win!");
const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
 return;
}

if (player1currentposition >= 34)
{
alert("PLAYER 1 WINS! GAME OVER");
	//restarting the game
	//reloading the page
window.location.reload(true);

}

if (player1currentposition == 4 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD");
player1currentposition = 8;
}

if (player1currentposition == 11 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD");
player1currentposition = 15;
}

if (player1currentposition == 18 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD");
player1currentposition = 22;
}


if (player1currentposition == 25 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD");
player1currentposition = 29;
}



//adding the dice value to the current position

if (player1currentposition > 34)
{
	player1currentposition = 34;
}
player1currentposition = dicevalue + player1currentposition;

//Logic where if player 1 position = p2, p2 goes to 0


if (player1currentposition == player2currentposition)
{
alert("P2 got cut by P1");
player2currentposition = -1;
}

player2coincircleXposition = xValueMap.get(player2currentposition);
player2coincircleYposition = yValueMap.get(player2currentposition);
// now we are getting the value and position of new center boxo to move.
//we need to update the coordinates of the new p1 position 
// we need to get the corresponding x and y value of the center of the new square.
player1coincircleXposition = xValueMap.get(player1currentposition);
player1coincircleYposition = yValueMap.get(player1currentposition);

//this code disables player 1's button and enable player 2's button at the end of this function.
const button1 = document.getElementById('player1_button');
alert("Player 2 roll the dice!");
button1.disabled = true;

const button2 = document.getElementById('player2_button');
button2.disabled = false;
drawCurrentBoard();
}







//Player 2 conditionals
function roll_dice2()
{


//I am finding out the random number between 1 and 6.
dicevalue = Math.floor((Math.random() * 6) + 1);

//I am displaying that number 
alert("Great. You rolled the value:"+ dicevalue);
 
//alert("player2currentposition="+player2currentposition);


// PLAYER2
if (player2currentposition == 33 && dicevalue == 1) 
{
	player2currentposition = 34;
}
//setting P2 position to 33 if the current position is 33 and dice value is greater than 1 becuz winning companion is 34.
if (player2currentposition == 33 && dicevalue >1)
{
// this sets the current position to 33 if the conditionals above are true. Companion.
player2currentposition = 33;
//says alert
alert("You have to put exactly 1 to win!");
//player 1's button gets enabled when the roll dice function 2 gets called. Goodbye
const button1 =  document.getElementById('player1_button');
button1.disabled = false;
//p2 button gets disabled after it rolls. Companion
const button2 =  document.getElementById('player2_button');
alert("Player 1 roll the dice!");
button2.disabled = true;

 return;
}
if (player2currentposition == 32 && dicevalue == 2) 
{
player2currentposition = 34;
}


if (player2currentposition == 32 && dicevalue >2)
{
player2currentposition = 32;
alert("You have to put exactly 2 to win!");

const button1 =  document.getElementById('player1_button');
button1.disabled = false;

const button2 =  document.getElementById('player2_button');
alert("Player 1 roll the dice!");
button2.disabled = true;

 return;
}
if (player2currentposition == 31 && dicevalue == 3) 
{
  player2currentposition = 34;
}

if (player2currentposition == 31 && dicevalue >3)
{
player2currentposition = 31;
alert("You have to put exactly 3 to win!");


const button1 =  document.getElementById('player1_button');
button1.disabled = false;

const button2 =  document.getElementById('player2_button');
alert("Player 1 roll the dice!");
button2.disabled = true;

 return;
}

if (player2currentposition == 30 && dicevalue == 4) 
{
player2currentposition = 34;
}

if (player2currentposition == 30 && dicevalue >4)
{
player2currentposition = 30;
alert("You have to put exactly 4 to win!");

const button1 =  document.getElementById('player1_button');
button1.disabled = false;

const button2 =  document.getElementById('player2_button');
alert("Player 1 roll the dice!");

button2.disabled = true;

 return;
}

if (player2currentposition == 29 && dicevalue == 5) 
{
player2currentposition = 34;
}
if (player2currentposition == 29 && dicevalue >5)
{
player2currentposition = 29;
alert("You have to put exactly 5 to win!");

const button1 =  document.getElementById('player1_button');
button1.disabled = false;

const button2 =   document.getElementById('player2_button');
alert("Player 1 roll the dice!");

 return;
}
if (player2currentposition == 28 && dicevalue == 6) 
{
player2currentposition = 34;
}
/*
if (player2currentposition == 28 && dicevalue >6)
{
player2currentposition = 28;
alert("You have to put exactly 6 to win!");
 return;
}
*/

if (player2currentposition >= 34)
{
alert("PLAYER 2 WINS! GAME OVER");
	//restarting the game
	//reloading the page
window.location.reload(true);

}
//Player 2 conditionals
if (player2currentposition == 4 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD")
player2currentposition = 8;
}

if (player2currentposition == 11 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD")
player2currentposition = 15;
}

if (player2currentposition == 18 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD");
player2currentposition = 22;
}


if (player2currentposition == 25 && dicevalue == 1)
{
alert("YOU HAVE ENTERED THE BYPASS ROAD");
player2currentposition = 29;
}



//adding the dice value to the current position
//We are incrementing the dice value to the current position  
// We are also adding the ending of the game where if the current position is greater or equal to 34, then reload the page.
//player2currentposition = dicevalue + player2currentposition;
if (player2currentposition > 34)
{
	player2currentposition = 34;
}

player2currentposition = dicevalue + player2currentposition;


if (player2currentposition == 0 && dicevalue == 1)
{
 player2currentposition = 1;
}

//Logic where if player 2 position = p1, p1 goes to 0

if (player2currentposition == player1currentposition)
{ 
alert("P1 got cut by P2");
player1currentposition = 0;
}
////This code gets the x and y value map for p1 because we have to update the position-----
//of player 1 if it gets cut by p2.
player1coincircleXposition = xValueMap.get(player1currentposition);
player1coincircleYposition = yValueMap.get(player1currentposition);
//This code gets the x and y value map for p2 and updates the coin circle positions---
//for both x and y.
player2coincircleXposition = xValueMap.get(player2currentposition);
player2coincircleYposition = yValueMap.get(player2currentposition);

const button1 =  document.getElementById('player1_button');
button1.disabled = false;

const button2 =  document.getElementById('player2_button');
alert("Player 1 roll the dice!");
button2.disabled = true;


//incrementing the P2 current position with the dice value.
drawCurrentBoard();	
}


function drawCurrentBoard()
{

//context.beginPath();

// drawing the p2 coin circle at the current p2 x and y position. 



//alert("i am in draw function");
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
context.fillStyle = "#000000";
context.fillRect(0, 0, 800, 800);

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 50, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 100, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 150, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(375, 50, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(375, 100, 50, 50);
context.stroke();

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(375, 150, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(425,50 , 50, 50);
context.stroke();



context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(425, 100, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(425, 150, 50, 50);
context.stroke();



//big square
context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 200, 150, 150);
context.stroke();

//the bottom grid
context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 350, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 400, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(325, 450, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(375, 350, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(375, 400, 50, 50);
context.stroke();

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(375, 450, 50, 50);
context.stroke();



context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(425,350 , 50, 50);
context.stroke();



context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(425, 400, 50, 50);
context.stroke();

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(425, 450, 50, 50);
context.stroke();


// left side grid
context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(275, 300, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(225, 300, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(175, 300, 50, 50);
context.stroke();

// 2nd row

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(275, 250, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(225, 250, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(175, 250, 50, 50);
context.stroke();

//3rd row

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(275, 200, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(225, 200, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(175, 200, 50, 50);
context.stroke();


// right side grid
context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(475, 200, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(525, 200, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(575, 200, 50, 50);
context.stroke();

// 2nd row

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(475, 250, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(525, 250, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(575, 250, 50, 50);
context.stroke();

//3rd row

context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(475, 300, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(525, 300, 50, 50);
context.stroke();


context.beginPath();
context.lineWidth = "6";
context.strokeStyle = "#FFFFFF";
context.rect(575, 300, 50, 50);
context.stroke();


context.beginPath();

// drawing the p1 coin circle at the current p1 x and y position. 

if (player1currentposition == 31 || player1currentposition == 32 || 
	player1currentposition == 33  || player1currentposition == 34) {
context.arc(player1coincircleXposition,player1coincircleYposition,15,0,1*Math.PI);
}
else
{
context.arc(player1coincircleXposition,player1coincircleYposition,15,0,2*Math.PI);	
}


context.strokeStyle = ball_color;
context.stroke();
context.fillStyle = ball_color;
context.fill();


//ball 2
context.beginPath();

if (player2currentposition == 31 || player2currentposition == 32 || 
	player2currentposition == 33  || player2currentposition == 34) {
context.arc(player2coincircleXposition,player2coincircleYposition,15,0,1*Math.PI);
}
else
{
context.arc(player2coincircleXposition,player2coincircleYposition,15,0,2*Math.PI);	
}

context.strokeStyle = ball_color2;
context.stroke();
context.fillStyle = ball_color2;
context.fill();

// bypass road 1 (4)
context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(325, 500);
context.lineTo(175, 350);
context.stroke();

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(325,450);
context.lineTo(225,350);
context.stroke();


//bypass road 2
context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(175, 200);
context.lineTo(325, 50);
context.stroke();

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(225,200);
context.lineTo(325,100);
context.stroke();

//bypass road 3
context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(475, 50);
context.lineTo(625, 200);
context.stroke();

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(475, 100);
context.lineTo(575, 200);
context.stroke();

//bypass road 4
context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(575, 350);
context.lineTo(475, 450);
context.stroke();

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.moveTo(625, 350);
context.lineTo(475, 500);
context.stroke();

}

