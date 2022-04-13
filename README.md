# About
Wein2D.js is a library for handling graphics, input and sound for Browser Games in Javascript. 

## Code example
This is a simple example for a browser game:
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            * { margin: 0px; padding: 0px; border: 0px; overflow: hidden; background-color: #313131; }
            canvas { width: 80vw; height: 80vh; margin-left: 10vw; margin-top: 10vh; background-color: #f1f1f1; }
        </style>
        <script src="wein2d.js"></script> <!-- include Wein2D -->
        <script>
            let wein2dApplication // stores the app
            let ballX = 0;

            window.onload = function() {
                wein2dApplication = new Wein2DApplication(document.getElementById("canvas"), onFrame);
            };

            function onFrame() {
                ballX += 3;
                if (ballX > wein2dApplication.width) ballX = -100;
                wein2dApplication.fill(40, 40, 40); // fill the screen with gray
                wein2dApplication.drawOval(ballX, (wein2dApplication.height - 100) / 2, 100, 100, 255, 255, 255); // draw the ball
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
