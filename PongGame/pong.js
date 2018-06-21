"use strict";

var paddleLeft = document.getElementById("left-paddle");
var paddleRight = document.getElementById("right-paddle");
var ball = document.getElementById("ball");

var paddleLeftTop = 0;
var paddleRightTop = 0;
var paddleLeftBottom = 500;
var paddleRightBottom = 500;
var paddleLeftBottom = 500;
var paddleRightBottom = 500;
var paddleLeftHeight = 200;
var paddleRightHeight = 200;

var paddleRightDirection = 0;
var paddleRightTimer;

var paddleLeftDirection = 0;
var paddleLeftTimer;

var oldballXdir;
var oldballYdir;

paddleLeft.style.top = 0;
paddleRight.style.top = 0;
paddleLeft.style.bottom = 500;
paddleRight.style.bottom = 500;

var ballXPos = 50;
var ballYPos = 50;
var ballXDir = 5;
var ballYDir = 5;
var ballWidth = 20;
var ballHeight = 20;

var leftScoreDisplay = document.getElementById("left-score");
var rightScoreDisplay = document.getElementById("right-score");
var leftScore = 0;
var rightScore = 0;

var windowsizewidth = window.innerWidth;
var windowsizeheight = window.innerHeight;


function updateScoreDisplay() {
  leftScoreDisplay.innerHTML = leftScore;
  rightScoreDisplay.innerHTML = rightScore;
}



function moveBall() {
  var newBallXPos = ballXPos + ballXDir;
  var newBallYPos = ballYPos + ballYDir;

  if (newBallXPos + ballWidth > window.innerWidth + 50) {
    ballXPos = windowsizewidth / 2;
    ballYPos = windowsizeheight / 2;
    ballXDir = -Math.abs(ballXDir);
    leftScore += 1;
    updateScoreDisplay();
  }
  if (newBallYPos + ballHeight > window.innerHeight) {
    ballYDir = -Math.abs(ballYDir);
  }
  if (newBallXPos < -50) {
    ballXPos = windowsizewidth / 2;
    ballYPos = windowsizeheight / 2;
    ballXDir = Math.abs(ballXDir);
    rightScore += 1;
    updateScoreDisplay();
  }

if (
			(ballYPos + 20 > paddleLeftTop &&
			 ballYPos < paddleLeftTop + paddleLeftHeight) && (newBallXPos < 10)) {
		    ballXDir = Math.abs(ballXDir)
		}
		if (
			(ballYPos + 20 > paddleRightTop &&
			 ballYPos < paddleRightTop + paddleRightHeight) && (newBallXPos > window.innerWidth - 30)) {
			ballXDir = -Math.abs(ballXDir)
		}
  if (newBallYPos < 0) {
    ballYDir = Math.abs(ballYDir);
  }

  ballXPos += ballXDir;
  ballYPos += ballYDir;

  ball.style.top = ballYPos + "px";
  ball.style.left = ballXPos + "px";
}

function moveRightPaddle() {
  paddleRightTop += paddleRightDirection;
  paddleRight.style.top = paddleRightTop + "px";
}

function moveLeftPaddle() {
  paddleLeftTop += paddleLeftDirection;
  paddleLeft.style.top = paddleLeftTop + "px";
}

setInterval(moveBall, 25);

//speeding up the ball
setInterval(function() {
  if (ballXDir < 50) ballXDir *= 1.1;
  if (ballYDir < 50) ballYDir *= 1.1;
}, 10000);
/*
document.addEventListener("keydown", function(evt) {
  switch (evt.code) {
    case "ArrowDown":
      if (!paddleRightTimer) {
        paddleRightDirection = 10;
        paddleRightTimer = setInterval(moveRightPaddle, 10);
      }
      break;

    case "ArrowUp":
      if (!paddleRightTimer) {
        paddleRightDirection = -10;
        paddleRightTimer = setInterval(moveRightPaddle, 10);
      }
      break;

    case "KeyS":
      if (!paddleLeftTimer) {
        paddleLeftDirection = 10;
        paddleLeftTimer = setInterval(moveLeftPaddle, 10);
      }
      break;

    case "KeyW":
      if (!paddleLeftTimer) {
        paddleLeftDirection = -10;
        paddleLeftTimer = setInterval(moveLeftPaddle, 10);
      }
      break;
  }
  console.log(evt);
});

document.addEventListener("keyup", function(evt) {
  switch (evt.code) {
    case "ArrowDown":
    case "ArrowUp":
      clearInterval(paddleRightTimer);
      paddleRightTimer = null;
      break;

    case "KeyS":
    case "KeyW":
      clearInterval(paddleLeftTimer);
      paddleLeftTimer = null;
      break;
  }
  console.log(evt);
});*/

document.addEventListener("keyup", function(e) {
  var key = e.keyCode || e.which;
//down arrow
  if (key === 40) {
    clearInterval(paddleRightTimer)
    paddleRightTimer = null;

  }
//up arrow
  if (key === 38) {
    clearInterval(paddleRightTimer)
    paddleRightTimer = null;

  }
  //w
    if (key === 87) {
      clearInterval(paddleLeftTimer)
      paddleLeftTimer = null;

    }
  //s
    if (key === 83) {
      clearInterval(paddleLeftTimer)
      paddleLeftTimer = null;

    }
})
document.addEventListener("keydown", function(e) {
  var key = e.keyCode || e.which;
//down arrow
  if (key === 40) {
    if (!paddleRightTimer) {
      paddleRightDirection = 10;
      paddleRightTimer = setInterval(moveRightPaddle, 10);
    }

  }
//up arrow
  if (key === 38) {
    if (!paddleRightTimer) {
      paddleRightDirection = -10;
      paddleRightTimer = setInterval(moveRightPaddle, 10);
    }

  }
  //w
    if (key === 87) {
      if (!paddleLeftTimer) {
        paddleLeftDirection = -10;
        paddleLeftTimer = setInterval(moveLeftPaddle, 10);
      }

    }
  //s
    if (key === 83) {
      if (!paddleLeftTimer) {
        paddleLeftDirection = 10;
        paddleLeftTimer = setInterval(moveLeftPaddle, 10);
      }

    }
})



var toggle = function() {
    var on = false;
    return function() {
    if(!on) {
        on = true;
        document.getElementById("text").style.display = "none";
        /*if (ballXDir) {
          ballXDir = oldballXdir;
          ballYDir = oldballYdir;
        }*/
        return;
    }
      document.getElementById("text").style.display = "block";
      ballXDir = 0;
      ballYDir = 0;
    on = false;
}
}();

toggle(); //Set OFF as default

document.addEventListener('keydown',function(e) {
   var key = e.keyCode || e.which;
   if(key === 27) {
      toggle();
      console.log(oldballXdir);
        oldballXdir = ballXDir;
        oldballYdir = ballXDir;

   }
}, false);
