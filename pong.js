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
  // Ball Animation Variables for X and Y
    var BallAnimX = BallXPos + BallXDir;
    var BallAnimY = BallYPos + BallYDir;

// if ball hits side then bounce
    if (BallAnimX + BallWidth > window.innerWidth) {
    // absolute value to make sure ball doesnt go off top screen
      BallXDir = -Math.abs(BallXDir);
}
    if (BallAnimY + BallHeight > window.innerHeight) {
      BallYDir = -Math.abs(BallYDir);
}

// makes sure ball doesnt go off bottom screen
    if (BallAnimX < 0) {
      BallXDir = Math.abs(BallXDir);
    }
    if (BallAnimY < 0) {
      BallYDir = Math.abs(BallYDir);
    }

// the same as BallXPos = BallXPos + BallXDir
    BallXPos += BallXDir;
    BallYPos += BallYDir;


// update score if ball goes past paddles
    if (BallXPos < 20 && (BallYPos + 20 < PaddleTopL ||  BallYPos > PaddleTopL + PaddleLHeight)) {
      ScoreR += 1;
      UpdateScore();
    }
    if (BallXPos + 20 > window.innerWidth - 20 && (BallYPos + 20 < PaddleTopR )) {
      ScoreL += 1;
      UpdateScore();
    }
    ball.style.top = ballYPos + 'px';
    ball.style.left = ballXPos + 'px';
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
setInterval(moveball, 25);

setInterval(function() {
    if (BallXDir < 50) BallXDir *=1.1;
    if (BallYDir < 50) BallYDir *=1.1;
}, 10000)


// Keydown Listener
document.addEventListener('keydown', function(KeyEvent) {
  switch (KeyEvent.code) {
    case 'ArrowDown':
      if (!PaddleRTimer) {
        PaddleRDir = 10;
        PaddleRTimer = setInterval(PaddleRAnim, 100);
      }
      break;

    case 'ArrowUp':
      if (!PaddleRTimer) {
        PaddleRDir = -10;
        PaddleRTimer = setInterval(PaddleRAnim, 100);
      }
      break;

    case 'KeyS':
      if (!PaddleLTimer) {
        PaddleLDir = 10;
        PaddleLTimer = setInterval(PaddleLAnim, 100);
      }
      break;

    case 'KeyW':
      if (!PaddleLTimer) {
        PaddleLDir = -10;
        PaddleLTimer = setInterval(PaddleLAnim, 100);
      }
      break;
  }
  console.log(KeyEvent);
})
