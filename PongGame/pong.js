'use strict';
// Variables

// Paddles
var PaddleL = document.getElementById('PaddleL');
var PaddleR = document.getElementById('PaddleR');

var PaddleLPos = 0;
var PaddleRPos = 0;

var PaddleLHeight = 100;
var PaddleRHeight = 100;

var PaddleTopL = 0;
var PaddleTopR = 0;

var PaddleLDir = 0;
var PaddleLTimer;

var PaddleRDir = 0;
var PaddleRTimer;

PaddleL.style.top = 0;
PaddleR.style.top = 0;

// Ball
var ball = document.getElementById('ball');

var BallXPos = 50;
var BallYPos = 50;

var BallXDir = 5;
var BallYDir = 5;

var BallWidth = 20;
var BallHeight = 20;

//Score
var DisScoreL = document.getElementById('ScoreL');
var DisScoreR = document.getElementById('ScoreR');

var ScoreL = 0;
var ScoreR = 0;


// Main Code

// Updates Score
function UpdateScore() {
    DisScoreL.innerHtml = ScoreL;
    DisScoreR.innerHtml = ScoreR;
}
// Ball Movement
function BallAnim() {
		var newBallXPos = BallXPos + BallXDir;
		var newBallYPos = BallYPos + BallYDir;

		if (newBallXPos + BallWidth > window.innerWidth) {
			BallXDir = -Math.abs(BallXDir);
		}
		if (newBallYPos + BallHeight > window.innerHeight) {
			BallYDir = -Math.abs(BallYDir);
		}
		if (newBallXPos < 0) {
			BallXDir = Math.abs(BallXDir);
		}
		if (newBallYPos < 0) {
			BallYDir = Math.abs(BallYDir);
		}

		BallXPos += BallXDir;
		BallYPos += BallYDir;

		if (BallXPos < 20 &&
			(BallYPos + 20 < PaddleTopL ||
			 BallYPos > PaddleTopL + PaddleLHeight)) {
			ScoreR += 1;
			updateScoreDisplay();
		}
		if (BallXPos + 20 > window.innerWidth - 20 &&
			(BallYPos + 20 < PaddleTopR ||
			 BallYPos > PaddleTopR + PaddleRHeight)) {
			 ScoreL += 1;
			updateScoreDisplay();
		}
		ball.style.top = BallYPos + 'px';
		ball.style.left = BallXPos + 'px';
	}

// Paddles Animation
function PaddleRAnim() {
		PaddleTopR += PaddleRDir;
		PaddleR.style.top = PaddleTopR + 'px';
	}

function PaddleLAnim() {
    PaddleTopL += PaddleLDir;
    PaddleL.style.top = PaddleTopL + `px`;
}

// Ball Movement timer
setInterval(BallAnim, 20);

setInterval(function() {
    if (BallXDir < 50) BallXDir *= 1.1;
    if (BallYDir < 50) BallYDir *= 1.1;
}, 10000)


// Keydown Listener
document.addEventListener('keydown', function(KeyDownEvent) {
  switch (KeyDownEvent.code) {
    case 'ArrowDown':
      if (!PaddleRTimer) {
        PaddleRDir = 10;
        PaddleRTimer = setInterval(PaddleRAnim, 10);
      }
      break;

    case 'ArrowUp':
      if (!PaddleRTimer) {
        PaddleRDir = -10;
        PaddleRTimer = setInterval(PaddleRAnim, 10);
      }
      break;

    case 'KeyS':
      if (!PaddleLTimer) {
        PaddleLDir = 10;
        PaddleLTimer = setInterval(PaddleLAnim, 10);
      }
      break;

    case 'KeyW':
      if (!PaddleLTimer) {
        PaddleLDir = -10;
        PaddleLTimer = setInterval(PaddleLAnim, 10);
      }
      break;
  }
  console.log(KeyDownEvent);
})

document.addEventListener('keyup', function(KeyUpEvent) {
		switch (KeyUpEvent.code) {
			case 'ArrowDown':
			case 'ArrowUp':
				clearInterval(PaddleRTimer);
				PaddleRTimer = null;
				break;

			case 'KeyS':
			case 'KeyW':
				clearInterval(PaddleLTimer);
				PaddleLTimer = null;
				break;
		}
		console.log(KeyUpEvent);
	})
