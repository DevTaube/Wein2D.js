
class ApplicationCanvas
{

    // GAMELOOP ////////////////////////////////////////////////////////////////////////////////////////////////////

    onFrame(timestamp)
    {
        // canvas size
        this.canvasElement.width = this.canvasElement.offsetWidth;
        this.canvasElement.height = this.canvasElement.offsetHeight;
        this.width = this.canvasElement.offsetWidth;
        this.height = this.canvasElement.offsetHeight;
        // deltaTime
        if(this.lastWidth != this.width || this.lastHeight != this.height)
        {
            this.lastWidth = this.width;
            this.lastHeight = this.height;
            this.lastFrameTime = window.performance.now();
        }
        let currentTime = window.performance.now();
        this.deltaTime = (currentTime - this.lastFrameTime) / 1_000;
        this.lastFrameTime = currentTime;
        // call onframe function
        this.onFrameFunction();
        // recall this function
        requestAnimationFrame(() => this.onFrame());
    }

    // INPUT ////////////////////////////////////////////////////////////////////////////////////////////////////

    mouseDown(e)
    {
        if(typeof e === "object")
        {
            switch(e.button)
            {
                case 0: this.mouseButtonL = true; break;
                case 2: this.mouseButtonR = true; break;
            }
            this.setMousePosition(e);
        }
    }
    mouseUp(e)
    {
        if(typeof e === "object")
        {
            switch(e.button)
            {
                case 0: this.mouseButtonL = false; break;
                case 2: this.mouseButtonR = false; break;
            }
            this.setMousePosition(e);
        }
    }
    mouseMove(e)
    {
        if(typeof e === "object")
            this.setMousePosition(e);
    }
    touchStart(e)
    {
        if(typeof e === "object")
        {
            this.mouseButtonL = true;
            this.setMousePosition(e);
        }
    }
    touchEnd(e)
    {
        if(typeof e === "object")
        {
            this.mouseButtonL = false;
            this.setMousePosition(e);
        }
    }
    touchMove(e)
    {
        if(typeof e === "object")
            this.setMousePosition(e);
    }
    setMousePosition(e)
    {
        let finalX = 0;
        let finalY = 0;
        if(e.type == "touchstart" || e.type == "touchmove" || e.type == "touchend" || e.type == "touchcancel")
        {
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            let touch = evt.touches[0] || evt.changedTouches[0];
            finalX = touch.pageX;
            finalY = touch.pageY;
        }
        else if (e.type == "mousedown" || e.type == "mouseup" || e.type == "mousemove" || e.type == "mouseover" || e.type == "mouseout" || e.type == "mouseenter" || e.type=="mouseleave")
        {
            finalX = e.clientX;
            finalY = e.clientY;
        }
        let canvasOffsetX = this.canvasElement.getBoundingClientRect().left;
        let canvasOffsetY = this.canvasElement.getBoundingClientRect().top;
        if(finalX > canvasOffsetX && finalX - canvasOffsetX <= this.width) this.mouseX = finalX - canvasOffsetX;
        if(finalY > canvasOffsetY && finalY - canvasOffsetY <= this.height) this.mouseY = finalY - canvasOffsetY;
    }
    keyChange(e, state)
    {
        if(typeof e === "object")
        {
            switch(e.keyCode)
            {
                case 8: this.keys[Key.BACKSPACE] = state; break;
                case 13: this.keys[Key.ENTER] = state; break;
                case 16: this.keys[Key.SHIFT] = state; break;
                case 17: this.keys[Key.CTRL] = state; break;
                case 18: this.keys[Key.ALT] = state; break;
                case 32: this.keys[Key.SPACE] = state; break;
                case 37: this.keys[Key.LEFT] = state; break;
                case 38: this.keys[Key.UP] = state; break;
                case 39: this.keys[Key.RIGHT] = state; break;
                case 40: this.keys[Key.DOWN] = state; break;
                case 48: this.keys[Key.N0] = state; break;
                case 49: this.keys[Key.N1] = state; break;
                case 50: this.keys[Key.N2] = state; break;
                case 51: this.keys[Key.N3] = state; break;
                case 52: this.keys[Key.N4] = state; break;
                case 53: this.keys[Key.N5] = state; break;
                case 54: this.keys[Key.N6] = state; break;
                case 55: this.keys[Key.N7] = state; break;
                case 56: this.keys[Key.N8] = state; break;
                case 57: this.keys[Key.N9] = state; break;
                case 65: this.keys[Key.A] = state; break;
                case 66: this.keys[Key.B] = state; break;
                case 67: this.keys[Key.C] = state; break;
                case 68: this.keys[Key.D] = state; break;
                case 69: this.keys[Key.E] = state; break;
                case 70: this.keys[Key.F] = state; break;
                case 71: this.keys[Key.G] = state; break;
                case 72: this.keys[Key.H] = state; break;
                case 73: this.keys[Key.I] = state; break;
                case 74: this.keys[Key.J] = state; break;
                case 75: this.keys[Key.K] = state; break;
                case 76: this.keys[Key.L] = state; break;
                case 77: this.keys[Key.M] = state; break;
                case 78: this.keys[Key.N] = state; break;
                case 79: this.keys[Key.O] = state; break;
                case 80: this.keys[Key.P] = state; break;
                case 81: this.keys[Key.Q] = state; break;
                case 82: this.keys[Key.R] = state; break;
                case 83: this.keys[Key.S] = state; break;
                case 84: this.keys[Key.T] = state; break;
                case 85: this.keys[Key.U] = state; break;
                case 86: this.keys[Key.V] = state; break;
                case 87: this.keys[Key.W] = state; break;
                case 88: this.keys[Key.X] = state; break;
                case 89: this.keys[Key.Y] = state; break;
                case 90: this.keys[Key.Z] = state; break;
                case 112: this.keys[Key.F1] = state; break;
                case 113: this.keys[Key.F2] = state; break;
                case 114: this.keys[Key.F3] = state; break;
                case 115: this.keys[Key.F4] = state; break;
                case 116: this.keys[Key.F5] = state; break;
                case 117: this.keys[Key.F6] = state; break;
                case 118: this.keys[Key.F7] = state; break;
                case 119: this.keys[Key.F8] = state; break;
                case 120: this.keys[Key.F9] = state; break;
                case 121: this.keys[Key.F10] = state; break;
                case 122: this.keys[Key.F11] = state; break;
                case 123: this.keys[Key.F12] = state; break;
                case 27: this.keys[Key.ESC] = state; break;
            }
        }
    }

    getMouseX()
    {
        return this.mouseX;
    }
    getMouseY()
    {
        return this.mouseY;
    }
    getMouseL()
    {
        return this.mouseButtonL;
    }
    getMouseR()
    {
        return this.mouseButtonR;
    }
    getKey(key)
    {
        return this.keys[key];
    }

    // DRAWING METHODS ////////////////////////////////////////////////////////////////////////////////////////////////////

    drawRect(posX, posY, sizeX, sizeY, color1, color2, color3, color4)
    {
        if(typeof color4 === "undefined")
            this.g.fillStyle = `rgb(${color1}, ${color2}, ${color3})`;
        else
            this.g.fillStyle = `rgba(${color2}, ${color3}, ${color4}, ${(color1 / 255)})`;
        this.g.fillRect(posX, posY, sizeX, sizeY);
    }

    drawSprite(sprite, posX, posY, optparam1, optparam2, optparam3, optparam4, optparam5, optparam6, optparam7)
    {
        let image = sprite.getImage();
        if(typeof optparam1 === "undefined")
            this.drawSpriteInternally(sprite, posX, posY, image.width, image.height, 0, 0, image.width, image.height, 255); // default
        else if(typeof optparam2 === "undefined")
            this.drawSpriteInternally(sprite, posX, posY, image.width, image.height, 0, 0, image.width, image.height, optparam1); // default + a
        else if(typeof optparam3 === "undefined")
            this.drawSpriteInternally(sprite, posX, posY, optparam1, optparam2, 0, 0, image.width, image.height, 255); // default + custom size
        else if(typeof optparam4 === "undefined")
            this.drawSpriteInternally(sprite, posX, posY, optparam1, optparam2, 0, 0, image.width, image.height, optparam3); // default + custom size + a
        else if(typeof optparam7 === "undefined")
            this.drawSpriteInternally(sprite, posX, posY, optparam1, optparam2, optparam3, optparam4, optparam5, optparam6, 255); // default + custom size + custom src
        else
            this.drawSpriteInternally(sprite, posX, posY, optparam1, optparam2, optparam3, optparam4, optparam5, optparam6, optparam7); // default + custom size + custom src + a
    }
    drawSpriteInternally(image, posX, posY, sizeX, sizeY, srcPosX, srcPosY, srcSizeX, srcSizeY, colorA)
    {
        this.g.globalAlpha = colorA / 255;
        this.g.drawImage(image.image, srcPosX, srcPosY, srcSizeX, srcSizeY, posX, posY, sizeX, sizeY);
    }

    drawText(content, posX, posY, optparam1, optparam2, optparam3, optparam4, optparam5, optparam6, optparam7)
    {
        if(typeof optparam6 === "undefined") // 1
            this.drawTextInternally(content, posX, posY, TextPositioning.RIGHT, optparam1, optparam2, 255, optparam3, optparam4, optparam5);
        else if(typeof optparam7 === "undefined" && typeof optparam2 === "string") // 2
            this.drawTextInternally(content, posX, posY, TextPositioning.RIGHT, optparam1, optparam2, optparam3, optparam4, optparam5, optparam6);
        else if(typeof optparam7 === "undefined" && typeof optparam3 === "string") // 3
            this.drawTextInternally(content, posX, posY, optparam1, optparam2, optparam3, 255, optparam4, optparam5, optparam6);
        else // 4
            this.drawTextInternally(content, posX, posY, optparam1, optparam2, optparam3, optparam4, optparam5, optparam6, optparam7);
    }
    drawTextInternally(content, posX, posY, positioning, fontSize, fontFamily, colorA, colorR, colorG, colorB)
    {
        this.g.font = `${fontSize}px ${fontFamily}`;
        this.g.fillStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA / 255})`;
        this.g.textAlign = positioning;
        this.g.fillText(content, posX, posY + fontSize);
    }

    fill(color1, color2, color3, color4)
    {
        if(typeof color4 === "undefined")
            this.drawRect(0, 0, this.width, this.height, 255, color1, color2, color3);
        else
            this.drawRect(0, 0, this.width, this.height, color1, color2, color3, color4);
    }

    drawLine(posX, posY, endX, endY, width, color1, color2, color3, color4)
    {
        if(typeof color4 === "undefined")
            this.g.strokeStyle = `rgb(${color1}, ${color2}, ${color3})`;
        else
            this.g.strokeStyle = `rgba(${color2}, ${color3}, ${color4}, ${(color1 / 255)})`;
        this.g.lineWidth = width;
        this.g.beginPath();
        this.g.moveTo(posX, posY);
        this.g.lineTo(endX, endY);
        this.g.stroke();
    }

    // CONSTRUCTOR AND BUILDER ////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor()
    {
        // canvas settings
        this.canvasElement = null;
        this.onFrameFunction = null;
    }
    setCanvasElement(canvas)
    {
        this.canvasElement = canvas;
        return this;
    }
    setOnFrameFunction(onFrameFunction)
    {
        this.onFrameFunction = onFrameFunction;
        return this;
    }
    build()
    {
        if(this.canvasElement !== null && this.onFrameFunction !== null)
        {
            // canvas size
            this.width = this.canvasElement.offsetWidth;
            this.height = this.canvasElement.offsetHeight;
            this.lastWidth = this.width;
            this.lastHeight = this.height;
            // rendering context
            this.g = this.canvasElement.getContext("2d");
            this.g.webkitImageSmoothingEnabled = false
            this.g.mozImageSmoothingEnabled = false
            this.g.imageSmoothingEnabled = false
            // variables for input
            this.mouseButtonL = false;
            this.mouseButtonR = false;
            this.mouseX = 0;
            this.mouseY = 0;
            this.keys = new Array(59).fill(false);
            // event listeners
            window.addEventListener("mousedown", (e) => this.mouseDown(e));
            window.addEventListener("mouseup", (e) => this.mouseUp(e));
            window.addEventListener("mousemove", (e) => this.mouseMove(e));
            window.addEventListener("touchstart", (e) => this.touchStart(e));
            window.addEventListener("touchend", (e) => this.touchEnd(e));
            window.addEventListener("touchmove", (e) => this.touchMove(e));
            window.addEventListener("keydown", (e) => this.keyChange(e, true));
            window.addEventListener("keyup", (e) => this.keyChange(e, false));
            // start gameloop
            this.lastFrameTime = window.performance.now();
            requestAnimationFrame((timestamp) => this.onFrame(timestamp));
        }
        return this;
    }

}



class Key
{
    static CTRL = 0;
    static SHIFT = 1;
    static SPACE = 2;
    static BACKSPACE = 3;
    static ENTER = 4;
    static ALT = 5;
    static A = 6;
    static B = 7;
    static C = 8;
    static D = 9;
    static E = 10;
    static F = 11;
    static G = 12;
    static H = 13;
    static I = 14;
    static J = 15;
    static K = 16;
    static L = 17;
    static M = 18;
    static N = 19;
    static O = 20;
    static P = 21;
    static Q = 22;
    static R = 23;
    static S = 24;
    static T = 25;
    static U = 26;
    static V = 27;
    static W = 28;
    static X = 29;
    static Y = 30;
    static Z = 31;
    static UP = 32;
    static DOWN = 33;
    static LEFT = 34;
    static RIGHT = 35;
    static N0 = 36;
    static N1 = 37;
    static N2 = 38;
    static N3 = 39;
    static N4 = 40;
    static N5 = 41;
    static N6 = 42;
    static N7 = 43;
    static N8 = 44;
    static N9 = 45;
    static F1 = 46;
    static F2 = 47;
    static F3 = 48;
    static F4 = 49;
    static F5 = 50;
    static F6 = 51;
    static F7 = 52;
    static F8 = 53;
    static F9 = 54;
    static F10 = 55;
    static F11 = 56;
    static F12 = 57;
    static ESC = 58;
}



class TextPositioning
{
    static LEFT = "right";
    static CENTER = "center";
    static RIGHT = "left";
}



class Sprite
{
    constructor(filePath)
    {
        // load image
        this.image = new Image;
        this.image.src = filePath;
    }

    getImage()
    {
        return this.image;
    }
}



class Sound
{
    constructor(filePath)
    {
        // load sound
        this.sound = new Audio(filePath)
    }

    play()
    {
        this.sound.play();
    }

    stop()
    {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}



class Collision
{
    // Line touching Rect
    static lineTouchingRect(lineX, lineY, lineLength, rectPosX, rectPosY, rectSizeX, rectSizeY)
    {
        return (rectPosX < lineX + lineLength
            && lineX < rectPosX + rectSizeX
            && rectPosY < lineY
            && lineY < rectPosY + rectSizeY);
    }
    // Rect touching Rect
    static rectTouchingRect(rect1PosX, rect1PosY, rect1SizeX, rect1SizeY, rect2PosX, rect2PosY, rect2SizeX, rect2SizeY)
    {
        return (!(rect1PosX + rect1SizeX < rect2PosX)
            && !(rect2PosX + rect2SizeX < rect1PosX)
            && !(rect1PosY + rect1SizeY < rect2PosY)
            && !(rect2PosY + rect2SizeY < rect1PosY));
    }
    // Point inside Rect
    static pointInsideRect(pointX, pointY, rectPosX, rectPosY, rectSizeX, rectSizeY)
    {
        return (rectPosX < pointX
            && pointX < rectPosX + rectSizeX
            && rectPosY < pointY
            && pointY < rectPosY + rectSizeY);
    }
    // Line inside Rect
    static lineInsideRect(lineX, lineY, lineLength, rectPosX, rectPosY, rectSizeX, rectSizeY)
    {
        return (rectPosX < lineX
            && lineX + lineLength < rectPosX + rectSizeX
            && rectPosY < lineY
            && lineY < rectPosY + rectSizeY);
    }
    // Rect inside Rect
    static rectInsideRect(rect1PosX, rect1PosY, rect1SizeX, rect1SizeY, rect2PosX, rect2PosY, rect2SizeX, rect2SizeY)
    {
        return (rect2PosX < rect1PosX
            && rect1PosX + rect1SizeX < rect2PosX + rect2SizeX
            && rect2PosY < rect1PosY
            && rect1PosY + rect1SizeY < rect2PosY + rect2SizeY);
    }
}
