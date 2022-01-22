# Introduction
Wein2D.js is a collection of javascript classes to speed up the process of making a browser game in HTML 5.
- adding your own 'onFrame' method to a canvas to get called every frame
- drawing simple shapes and images to the canvas, including text
- getting mouse and keyboard input from your user
- playing sounds
- simple methods for detecting collision

Other Versions:  
[Wein2D](https://www.github.com/devtaube/wein2d)  
[Wein2DAndroid](https://www.github.com/devtaube/wein2dandroid)  

## Code example
This is a simple Example for a browser game (testapp.html):
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

            let appCanvas; // stores the ApplicationCanvas
            let ballX = 0;

            window.onload = function()
            {
                // new ApplicationCanvas() >> creates ApplicationCanvas object
                // .setCanvasElement( [<canvas></canvas>-element] ) >> adds the canvas element
                // .setOnFrameFunction( [function] ) >> adds a function to be called every frame
                // .build(); >> applies changes and runs gameloop
                appCanvas = new ApplicationCanvas()
                    .setCanvasElement(document.getElementById("canvas"))
                    .setOnFrameFunction(onFrame)
                    .build();
            };

            function onFrame()
            {
                ballX += 3;
                if (ballX > appCanvas.width) ballX = -100;
                appCanvas.fill(40, 40, 40); // fill the screen with gray
                appCanvas.drawRect(ballX, (appCanvas.height - 100) / 2, 100, 100, 255, 255, 255); // draw the 'ball'
            }

        </script>
    </head>
    <body>
        <canvas id="canvas"></canvas> <!-- normal canvas element -->
    </body>
</html>
```

The code is also located in "./testapp.html".

# Documentation
This is a list of all features, classes and methods.

## ApplicationCanvas
Constructor (Builder):  
ApplicationCanvas()  
.setCanvasElement(canvas) >> sets the canvas element  
.setOnFrameFunction(onFrameFunction) >> sets the function that gets called once per frame  
.build() >> configures the class and starts the gameloop (applies changes if used on an existing object)  

Methods:
- Drawing stuff on screen
   - void drawRect(posX, posY, sizeX, sizeY, colorR, colorG, colorB) >> draw rectangle
   - void drawRect(posX, posY, sizeX, sizeY, colorA, colorR, colorG, colorB) >> draw rectangle (with alpha)
   - void drawSprite(sprite, posX, posY) >> draw sprite
   - void drawSprite(sprite, posX, posY, colorA) >> draw sprite (with alpha)
   - void drawSprite(sprite, posX, posY, sizeX, sizeY) >> draw sprite (specified size)
   - void drawSprite(sprite, posX, posY, sizeX, sizeY, colorA) >> draw sprite (specified size, with alpha)
   - void drawSprite(sprite, posX, posY, sizeX, sizeY, srcPosX, srcPosY, srcSizeX, srcSizeY) >> draw sprite (specified size and source size)
   - void drawSprite(sprite, posX, posY, sizeX, sizeY, srcPosX, srcPosY, srcSizeX, srcSizeY, colorA) >> draw sprite (specified size and source size, with alpha)
   - void drawText(content, posX, posY, fontSize, fontFamily, colorR, colorG, colorB) >> draw text
   - void drawText(content, posX, posY, fontSize, fontFamily, colorA, colorR, colorG, colorB) >> draw text (with alpha)
   - void drawText(content, posX, posY, positioning, fontSize, fontFamily, colorR, colorG, colorB) >> draw text (with positioning)
        - positioning may be: TextPositioning.LEFT, TextPositioning.CENTER, TextPositioning.RIGHT
   - void drawText(content, posX, posY, positioning, fontSize, fontFamily, colorA, colorR, colorG, colorB) >> draw text (with positioning, with alpha)
        - positioning may be: TextPositioning.LEFT, TextPositioning.CENTER, TextPositioning.RIGHT
   - void fill(colorR, colorG, colorB) >> fill window with color
   - void fill(colorA, colorR, colorG, colorB) >> fill window with color (with alpha)
   - void drawLine(posX, posY, endX, endY, width, colorR, colorG, colorB) >> draws a line on screen
   - void drawLine(posX, posY, endX, endY, width, colorA, colorR, colorG, colorB) >> draws a line on screen with alpha
- Input
   - int getMouseX() >> returns the mouse's position on the x-axis
   - int getMouseY() >> returns the mouse's position on the y-axis
   - boolean getMouseL() >> returns if the mouse's left button is being pressed
   - boolean getMouseR() >> returns if the mouse's right button is being pressed
   - void getKey(keyID) >> returns if a certain key on the keyboard is being pressed
       - valid key ID's:
         - Key.CTRL, Key.SHIFT, Key.SPACE, Key.BACKSPACE, Key.ENTER, Key.ALT
         - Key.UP, Key.DOWN, Key.LEFT, Key.RIGHT
         - Key.A, Key.B, Key.C, [...] Key.X, Key.Y, Key.Z
         - Key.N0, Key.N1, Key.N2, [...] Key.N7, Key.N8, Key.N9
         - Key.F1, Key.F2, Key.F3, [...] Key.F10, Key.F11, Key.F12

Variables:  
- int width >> stores the current width of the window
- int height >> stores the current height of the window

## Sprite
Constructors:  

Sprite(filePath)  
-> creates and loads the Sprite from the given path  

## Sound
Constructors:  

Sound(filePath)  
-> creates and loads the sound from the given path  

Methods:
 - void play() >> plays the sound
 - void stop() >> stops playback of the sound

## Collision
Methods:
 - static boolean lineTouchingRect(lineX, lineY, lineLengthOnXAxis, rectPosX, rectPosY, rectSizeX, rectSizeY)
     - returns 'false' if line doesn't touch specified rectangle
     - returns 'true' if line touches specified rectangle
 - static boolean rectTouchingRect(rect1PosX, rect1PosY, rect1SizeX, rect1SizeY, rect2PosX, rect2PosY, rect2SizeX, rect2SizeY)
     - returns 'false' if rectangle doesn't touch specified rectangle
     - returns 'true' if rectangle touches specified rectangle
 - static boolean pointInsideRect(pointX, pointY, rectPosX, rectPosY, rectSizeX, rectSizeY)
     - returns 'false' if point isn't inside specified rectangle
     - returns 'true' if point is inside specified rectangle
 - static boolean lineInsideRect(lineX, lineY, lineLengthOnXAxis, rectPosX, rectPosY, rectSizeX, rectSizeY)
     - returns 'false' if line isn't inside specified rectangle
     - returns 'true' if line is inside specified rectangle
 - static boolean rectInsideRect(rect1PosX, rect1PosY, rect1SizeX, rect1SizeY, rect2PosX, rect2PosY, rect2SizeX, rect2SizeY)
     - returns 'false' if rectangle isn't inside specified rectangle
     - returns 'true' if rectangle is inside specified rectangle

