# About
Wein2D.js is a library for handling graphics, input and sound for Browser Games in Javascript. 

*There is no support for Internet Explorer. Sorry not sorry.*

## Code example
This is a simple example for a browser game:
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            * { margin: 0px; overflow: hidden; }
            canvas { width: 100vw; height: 100vh; }
        </style>
        <script src="wein2d.js"></script> <!-- include Wein2D (file path of wein2d.js or wein2d_minified.js, the code is the same) -->
        <script>
            const CUBE_SIZE = 25.0; // the width and height of the cube (in pixels)
            const CUBE_JUMP_VELOCITY = 400.0; // the cube's jump velocity (in pixels per second)
            const CUBE_GRAVITATION = 800.0; // gravitation (how much velocity gets removed per second)
            const CUBE_BOUNCEBACK_MULTIPLIER = 0.4; // how much velocity the cube keeps after hitting the ground

            let wein2dApplication; // stores the app
            let cubeHeight = 0;
            let cubeVelocity = 0;

            window.onload = function() {
                wein2dApplication = new Wein2DApplication(document.getElementById("canvas"), onFrame);
            };

            function onFrame() {
                // update calls //////////////////////////////////////////////////

                // if screen is tapped, set the cubes velocity (let the cube jump up)
                if(wein2dApplication.getMouseL()) cubeVelocity = CUBE_JUMP_VELOCITY;

                // move the cube up and down according to it's velocity
                cubeHeight += cubeVelocity * wein2dApplication.deltaTime;
                // if the cube is not on the ground remove some of the cube's velocity (gravitation)
                if(cubeHeight > 0.0) cubeVelocity -= CUBE_GRAVITATION * wein2dApplication.deltaTime;

                // if the cube is below or on the ground, set him onto the ground, invert the cube's velocity (movement) and remove some of it's velocity
                if(cubeHeight <= 0.0) {
                    cubeVelocity = -cubeVelocity * CUBE_BOUNCEBACK_MULTIPLIER;
                    cubeHeight = 0.0;
                }

                // render calls //////////////////////////////////////////////////

                // fill the screen with blue
                wein2dApplication.fill(11, 138, 143, 255);

                // draw the cube
                wein2dApplication.drawRectangle()
                    .setPosition((wein2dApplication.width - CUBE_SIZE) / 2.0, wein2dApplication.height - CUBE_SIZE - cubeHeight) // draw at the center of the screen and cube's height
                    .setSize(CUBE_SIZE, CUBE_SIZE) // draw the cube with it's width and height
                    .setColor(255, 255, 255) // draw in white
                    .rotateDegrees(cubeHeight) // rotate it by its height in degrees (why? because it looks cool)
                    .draw(); // draw it
            }
        </script>
    </head>
    <body>
        <canvas id="canvas"></canvas> <!-- normal canvas element -->
    </body>
</html>
```

# Documentation
Documentation for Wein2D.js can be found at [https://wein2ddocs.netlify.app](https://wein2ddocs.netlify.app).
