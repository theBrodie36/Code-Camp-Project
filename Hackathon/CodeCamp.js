package
{
    import flash.display.MovieClip;

    public class Main extends MovieClip
    {
        public function Main() : void
        {
            // Replace this comment with code later
        }
    }
}
private function start( _e : Event ) : void
{
    startText.buttonMode = false;
    startText.visible = false;
    Mouse.hide();
    new TweenLite( bg.wallRight, 2, { rotationY: 90, alpha: 1, ease: Bounce.easeOut } );
    new TweenLite( bg.wallLeft, 2, { rotationY: -90, alpha: 1, ease: Bounce.easeOut } );
    new TweenLite( bg.wallTop, 2, { rotationX: 90, alpha: 1, ease: Bounce.easeOut } );
    new TweenLite( bg.wallBottom, 2, { rotationX: -90, alpha: 1, ease: Bounce.easeOut, onComplete: goBall } );
}

package
{
    import flash.display.MovieClip;
    import flash.events.MouseEvent;

    public class Player extends MovieClip
    {
        public function Player() : void
        {
            stage.addEventListener( MouseEvent.MOUSE_MOVE, moveAlong );
        }

        private function moveAlong( _e : MouseEvent ) : void
        {
            var mousePos : Number = stage.mouseY - parent.y;
            if ( mousePos < 0 )
                y = 0;
            else if ( mousePos > 340 )
                y = 340;
            else
                y = mousePos;
        }
    }
}

package
{
    import flash.display.MovieClip;
    import flash.events.Event;

    public class AI extends MovieClip
    {
        public function AI() : void
        {
            addEventListener( Event.ENTER_FRAME, followBall );
        }

        private function followBall( _e : Event ) : void
        {
            var ball : MovieClip = MovieClip( parent.parent ).ball;
            if ( ball.xspeed || ball.yspeed )
            {
                var newy : Number = ball.y - height;
                if ( newy > 345 )
                    newy = 345;
                if ( y <= newy )
                    y += 9;
                else
                    y -= 9;
            }
        }
    }

}

package
{
    import flash.display.MovieClip;
    import flash.events.Event;

    public class Ball extends MovieClip
    {
        public var xspeed : Number = 0;
        public var yspeed : Number = 0;

        public function Ball() : void { }

        public function start() : void
        {
            xspeed = -12;
            yspeed = 12;
            addEventListener( Event.ENTER_FRAME, moveBall );
        }

        private function moveBall( _e : Event ) : void
        {
            depth();
            collision();
            x += xspeed;
            y += yspeed;
        }

        private function depth() : void
        {
            // Scale the ball based on its y position
        }

        private function collision() : void
        {
            // Make the ball bounce
        }
    }

}

private function depth() : void
{
    var smaller : Number = (( y / stage.stageHeight ) * 0.6) + 0.6;
    scaleX = scaleY = smaller;
}

private function collision() : void
{
    if ( y >= 463 || y <= 105 )
    {
        yspeed *= -1;
    }

    if( (x > stage.stageWidth / 2 && hitTestObject(MovieClip(parent).bg.wallRight)) || (x < stage.stageWidth / 2 && hitTestObject( MovieClip(parent).bg.wallLeft)) )
{
    xspeed *= -1;
}

if ( !MovieClip(parent).bg.floor.hitTestPoint( x, y + (height / 2 * scaleY), true) )
{
    if ( x < stage.stageWidth / 2 )
        MovieClip(parent).bg.scoreRight.text = Number(MovieClip(parent).bg.scoreRight.text) + 1;
    else
        MovieClip(parent).bg.scoreLeft.text = Number(MovieClip(parent).bg.scoreLeft.text) + 1;
    y = stage.stageHeight / 2;
    x = stage.stageWidth / 2;

}
}

private function goBall() : void
{
    ball.start();
}

y = stage.stageHeight / 2;
x = stage.stageWidth / 2;

xspeed = yspeed = 0;
removeEventListener( Event.ENTER_FRAME, moveBall );
y = -height;
x = stage.stageWidth / 2;
var scale : Number = (0.5 * 0.6) + 0.6;
new TweenLite( this, 1.5, { y: stage.stageHeight / 2, scaleX: scale, scaleY: scale, ease: Bounce.easeOut, onComplete: start } );
