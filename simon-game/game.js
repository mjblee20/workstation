const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

const playSound = (name) => {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

const animatePress = (currentColor) => {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(() => {  
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

const startOver = () => {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  $(document).one("keypress", function() {
    nextSequence();
  })
}

const checkAnswer = (currentLevel) => {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log(userClickedPattern[currentLevel], gamePattern[currentLevel])
    if (currentLevel === (gamePattern.length - 1)) {
      setTimeout(() => {  nextSequence()  }, 1000);
      userClickedPattern = [];  
    }
  } else {
    playSound('wrong');

    $('body').addClass('game-over');
    $("h1").text('Game Over!');
    setTimeout(() => {  
      $('body').removeClass("game-over");
      $("h1").text('Press any key to start.');
    }, 2000);
    startOver();  
  }
}

const nextSequence = () => {
  var randNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randNum];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  level++;
  $("h1").text('Level ' + level);
};

$(document).ready(function() {
  $(document).one("keypress", function() {
    nextSequence();
  })
})

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
})




