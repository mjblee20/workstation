var randNum1 = Math.floor(Math.random() * 6 + 1);

var randNum2 = Math.floor(Math.random() * 6 + 1);

var imageName2 = './images/dice'+ randNum2 +'.png';
var imageName1 = './images/dice'+ randNum1 +'.png';

// var image1 = document.getElementsByClassName('img1')[0]
// image1.setAttribute('src', imageName1);
$(".img1").attr('src', imageName1);

// var image2 = document.getElementsByClassName('img2')[0]
// image2.setAttribute('src', imageName2);
$(".img2").attr('src', imageName2);

if (randNum1 > randNum2) {
  // document.querySelector("h1").innerHTML = 'Player 1 Wins!';
  $("h1").text('Player 1 Wins!');
} else if (randNum1 < randNum2) {
  //   document.querySelector("h1").innerHTML = 'Player 2 Wins!';
  $("h1").text('Player 2 Wins!');
} else {
  //   document.querySelector("h1").innerHTML = 'Draw!';
  $("h1").text('Draw!');
}  
  


