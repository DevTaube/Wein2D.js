/*
 * Copyright (c) 2022, DevTaube
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *
 *     Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/*
 *  CLASSES FOR USER INPUT
 *
 *  These classes are for receiving input from the user.
 *  InputManager is used by Wein2DApplication and should not be used from
 *  outside of the library. Thats why it also isn't documented.
 *  Key is for describing a specific Key.
 */

class InputManager
{

    canvasElement = undefined

    mouseButtonL = false
    mouseButtonS = false
    mouseButtonR = false

    mouseX = 0
    mouseY = 0

    keys = new Array(59).fill(false)
    typedText = ""


    constructor(canvasElement)
    {
        this.canvasElement = canvasElement
        canvasElement.oncontextmenu = function(e) { e.preventDefault(); return false; }
        window.addEventListener("mousedown", (e) => this.mouseDown(e))
        window.addEventListener("mouseup", (e) => this.mouseUp(e))
        window.addEventListener("mousemove", (e) => this.mouseMove(e))
        window.addEventListener("touchstart", (e) => this.touchStart(e))
        window.addEventListener("touchend", (e) => this.touchEnd(e))
        window.addEventListener("touchmove", (e) => this.touchMove(e))
        window.addEventListener("keydown", (e) => this.keyDown(e))
        window.addEventListener("keyup", (e) => this.keyUp(e))
    }


    getMouseL()
    {
        return this.mouseButtonL
    }

    getMouseS()
    {
        return this.mouseButtonS
    }

    getMouseR()
    {
        return this.mouseButtonR
    }

    getMouseX()
    {
        return this.mouseX - this.canvasElement.getBoundingClientRect().left
    }

    getMouseY()
    {
        return this.mouseY - this.canvasElement.getBoundingClientRect().top
    }

    getKey(key)
    {
        return this.keys[key]
    }

    getTypedText()
    {
        return this.typedText
    }

    setTypedText(newText)
    {
        this.typedText = newText
    }

    resetButtons()
    {
        this.mouseButtonL = false
        this.mouseButtonS = false
        this.mouseButtonR = false

        this.keys = new Array(59).fill(false)
    }


    mouseDown(e)
    {
        if(typeof e === "object")
        {
            switch(e.button)
            {
                case 0: this.mouseButtonL = true; break;
                case 1: this.mouseButtonS = true; break;
                case 2: this.mouseButtonR = true; break;
            }
            this.mouseX = e.clientX
            this.mouseY = e.clientY
        }
    }

    mouseUp(e)
    {
        if(typeof e === "object")
        {
            switch(e.button)
            {
                case 0: this.mouseButtonL = false; break;
                case 1: this.mouseButtonS = false; break;
                case 2: this.mouseButtonR = false; break;
            }
            this.mouseX = e.clientX
            this.mouseY = e.clientY
        }
    }

    mouseMove(e)
    {
        if(typeof e === "object")
        {
            this.mouseX = e.clientX
            this.mouseY = e.clientY
        }
    }


    touchStart(e)
    {
        if(typeof e === "object")
        {
            this.mouseButtonL = true
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent
            let touch = evt.touches[0] || evt.changedTouches[0]
            this.mouseX = touch.pageX
            this.mouseY = touch.pageY
        }
    }

    touchEnd(e)
    {
        if(typeof e === "object")
        {
            this.mouseButtonL = false
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent
            let touch = evt.touches[0] || evt.changedTouches[0]
            this.mouseX = touch.pageX
            this.mouseY = touch.pageY
        }
    }

    touchMove(e)
    {
        if(typeof e === "object")
        {
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent
            let touch = evt.touches[0] || evt.changedTouches[0]
            this.mouseX = touch.pageX
            this.mouseY = touch.pageY
        }
    }


    keyDown(e)
    {
        if(typeof e === "object")
        {
            this.keys[this.getKeyIndex(e)] = true
            this.typedText = this.applyKeyChar(e, this.typedText)
        }
    }

    keyUp(e)
    {
        if(typeof e === "object")
        {
            this.keys[this.getKeyIndex(e)] = false
        }
    }

    getKeyIndex(e)
    {
        switch(e.code)
        {
            case "ControlLeft": case "ControlRight": return 0;
            case "ShiftLeft": case "ShiftRight": return 1;
            case "Space": return 2;
            case "Backspace": return 3;
            case "Enter": return 4;
            case "AltLeft": case "AltRight": return 5;
            case "KeyA": return 6;
            case "KeyB": return 7;
            case "KeyC": return 8;
            case "KeyD": return 9;
            case "KeyE": return 10;
            case "KeyF": return 11;
            case "KeyG": return 12;
            case "KeyH": return 13;
            case "KeyI": return 14;
            case "KeyJ": return 15;
            case "KeyK": return 16;
            case "KeyL": return 17;
            case "KeyM": return 18;
            case "KeyN": return 19;
            case "KeyO": return 20;
            case "KeyP": return 21;
            case "KeyQ": return 22;
            case "KeyR": return 23;
            case "KeyS": return 24;
            case "KeyT": return 25;
            case "KeyU": return 26;
            case "KeyV": return 27;
            case "KeyW": return 28;
            case "KeyX": return 29;
            case "KeyY": return 30;
            case "KeyZ": return 31;
            case "ArrowUp": return 32;
            case "ArrowDown": return 33;
            case "ArrowLeft": return 34;
            case "ArrowRight": return 35;
            case "Digit0": return 36;
            case "Digit1": return 37;
            case "Digit2": return 38;
            case "Digit3": return 39;
            case "Digit4": return 40;
            case "Digit5": return 41;
            case "Digit6": return 42;
            case "Digit7": return 43;
            case "Digit8": return 44;
            case "Digit9": return 45;
            case "F1": return 46;
            case "F2": return 47;
            case "F3": return 48;
            case "F4": return 49;
            case "F5": return 50;
            case "F6": return 51;
            case "F7": return 52;
            case "F8": return 53;
            case "F9": return 54;
            case "F10": return 55;
            case "F11": return 56;
            case "F12": return 57;
            case "Escape": return 58;
        }
        return 0
    }

    applyKeyChar(e, applyString)
    {
        if(e.key === "Backspace" && applyString.length > 0)
            applyString = applyString.slice(0, -1)

        if(e.key.length > 2)
            return applyString

        if(applyString.length >= 1000)
            applyString = applyString.slice(1);

        return applyString += e.key
    }

}



class Key
{

    static CTRL = 0
    static SHIFT = 1
    static SPACE = 2
    static BACKSPACE = 3
    static ENTER = 4
    static ALT = 5
    static A = 6
    static B = 7
    static C = 8
    static D = 9
    static E = 10
    static F = 11
    static G = 12
    static H = 13
    static I = 14
    static J = 15
    static K = 16
    static L = 17
    static M = 18
    static N = 19
    static O = 20
    static P = 21
    static Q = 22
    static R = 23
    static S = 24
    static T = 25
    static U = 26
    static V = 27
    static W = 28
    static X = 29
    static Y = 30
    static Z = 31
    static UP = 32
    static DOWN = 33
    static LEFT = 34
    static RIGHT = 35
    static N0 = 36
    static N1 = 37
    static N2 = 38
    static N3 = 39
    static N4 = 40
    static N5 = 41
    static N6 = 42
    static N7 = 43
    static N8 = 44
    static N9 = 45
    static F1 = 46
    static F2 = 47
    static F3 = 48
    static F4 = 49
    static F5 = 50
    static F6 = 51
    static F7 = 52
    static F8 = 53
    static F9 = 54
    static F10 = 55
    static F11 = 56
    static F12 = 57
    static ESC = 58

}

/*
 *  CLASSES FOR RENDERING
 *
 *  These classes are used for rendering to the canvas.
 *  RenderCalls provides an interface for rendering methods.
 *  TextPositioning can be used to specify the positioning of rendered text.
 *  Sprite can be used to load an Image into memory.
 *  VirtualCanvas provides a virtual surface to draw onto.
 */

class TextPositioning
{

    static LEFT = "right"
    static CENTER = "center"
    static RIGHT = "left"

}



class RectangleRenderCall
{

    renderCalls = undefined

    posX = NaN
    posY = NaN
    width = NaN
    height = NaN

    colorRed = 0
    colorGreen = 0
    colorBlue = 0
    colorAlpha = 255

    angle = 0
    rotationPointX = NaN
    rotationPointY = NaN

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setPosition(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setSize(width, height)
    {
        this.width = width
        this.height = height
        return this
    }

    setColor(red, green, blue, optional_alpha)
    {
        this.colorRed = red
        this.colorGreen = green
        this.colorBlue = blue
        if(typeof optional_alpha !== "undefined")
            this.colorAlpha = optional_alpha
        return this
    }

    setAlpha(alpha)
    {
        this.colorAlpha = alpha
        return this
    }

    rotateDegrees(degreesAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        return this.rotateRadians(degreesAngle * Math.PI / 180, optional_rotationCenterX, optional_rotationCenterY)
    }

    rotateRadians(radiansAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        this.angle += radiansAngle
        this.rotationPointX = optional_rotationCenterX
        this.rotationPointY = optional_rotationCenterY
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "RectangleRenderCall has no position set. Set it's position using 'RectangleRenderCall#setPosition'."

        if(isNaN(this.width) || isNaN(this.height))
            throw "RectangleRenderCall has no size set. Set it's size using 'RectangleRenderCall#setSize'."

        let renderContext = this.renderCalls.renderContext

        renderContext.fillStyle = `rgba(${this.colorRed}, ${this.colorGreen}, ${this.colorBlue}, ${(this.colorAlpha / 255)})`

        if(this.angle != 0)
        {
            if(isNaN(this.rotationPointX) || isNaN(this.rotationPointY))
            {
                this.rotationPointX = this.posX + this.width / 2
                this.rotationPointY = this.posY + this.height / 2
            }

            renderContext.translate(this.rotationPointX, this.rotationPointY)
            renderContext.rotate(this.angle)
            renderContext.translate(-this.rotationPointX, -this.rotationPointY)
        }

        renderContext.fillRect(this.posX, this.posY, this.width, this.height)

        renderContext.resetTransform()

        this.invalidated = true
    }

}

class OvalRenderCall
{

    renderCalls = undefined

    posX = NaN
    posY = NaN
    width = NaN
    height = NaN

    colorRed = 0
    colorGreen = 0
    colorBlue = 0
    colorAlpha = 255

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setPosition(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setSize(width, height)
    {
        this.width = width
        this.height = height
        return this
    }

    setColor(red, green, blue, optional_alpha)
    {
        this.colorRed = red
        this.colorGreen = green
        this.colorBlue = blue
        if(typeof optional_alpha !== "undefined")
            this.colorAlpha = optional_alpha
        return this
    }

    setAlpha(alpha)
    {
        this.colorAlpha = alpha
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "OvalRenderCall has no position set. Set it's position using 'OvalRenderCall#setPosition'."

        if(isNaN(this.width) || isNaN(this.height))
            throw "OvalRenderCall has no size set. Set it's size using 'OvalRenderCall#setSize'."

        let renderContext = this.renderCalls.renderContext

        renderContext.fillStyle = `rgba(${this.colorRed}, ${this.colorGreen}, ${this.colorBlue}, ${(this.colorAlpha / 255)})`
        renderContext.beginPath();
        renderContext.ellipse(this.posX + this.width / 2, this.posY + this.height / 2, this.width / 2, this.height / 2, 0, 2 * Math.PI, false);
        renderContext.fill();

        this.invalidated = true
    }

}

class SpriteRenderCall
{

    renderCalls = undefined

    sprite = undefined

    posX = NaN
    posY = NaN
    width = NaN
    height = NaN

    srcCutoutX = NaN
    srcCutoutY = NaN
    srcCutoutWidth = NaN
    srcCutoutHeight = NaN

    colorAlpha = 255

    angle = 0
    rotationPointX = NaN
    rotationPointY = NaN

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setSprite(sprite)
    {
        this.sprite = sprite
        return this
    }

    setPosition(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setSize(width, height)
    {
        this.width = width
        this.height = height
        return this
    }

    setSpriteCutoutDimensions(x, y, width, height)
    {
        this.srcCutoutX = x
        this.srcCutoutY = y
        this.srcCutoutWidth = width
        this.srcCutoutHeight = height
        return this
    }

    setAlpha(alpha)
    {
        this.colorAlpha = alpha
        return this
    }

    rotateDegrees(degreesAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        return this.rotateRadians(degreesAngle * Math.PI / 180, optional_rotationCenterX, optional_rotationCenterY)
    }

    rotateRadians(radiansAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        this.angle += radiansAngle
        this.rotationPointX = optional_rotationCenterX
        this.rotationPointY = optional_rotationCenterY
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(typeof this.sprite == "undefined")
            throw "SpriteRenderCall has no sprite set. Set it's position using 'SpriteRenderCall#setSprite'."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "SpriteRenderCall has no position set. Set it's position using 'SpriteRenderCall#setPosition'."

        if(isNaN(this.width) || isNaN(this.height))
            throw "SpriteRenderCall has no size set. Set it's size using 'SpriteRenderCall#setSize'."

        if(isNaN(this.srcCutoutX) || isNaN(this.srcCutoutY) || isNaN(this.srcCutoutWidth) || isNaN(this.srcCutoutHeight))
        {
            this.srcCutoutX = 0;
            this.srcCutoutY = 0;
            this.srcCutoutWidth = this.sprite.getWidth();
            this.srcCutoutHeight = this.sprite.getHeight();
        }

        let renderContext = this.renderCalls.renderContext

        renderContext.globalAlpha = this.colorAlpha / 255

        if(this.angle != 0)
        {
            if(isNaN(this.rotationPointX) || isNaN(this.rotationPointY))
            {
                this.rotationPointX = this.posX + this.width / 2
                this.rotationPointY = this.posY + this.height / 2
            }

            renderContext.translate(this.rotationPointX, this.rotationPointY)
            renderContext.rotate(this.angle)
            renderContext.translate(-this.rotationPointX, -this.rotationPointY)
        }

        renderContext.drawImage(this.sprite.getImage(), this.srcCutoutX, this.srcCutoutY, this.srcCutoutWidth, this.srcCutoutHeight, this.posX, this.posY, this.width, this.height)

        renderContext.resetTransform()

        this.invalidated = true
    }

}

class VirtualCanvasRenderCall
{

    renderCalls = undefined

    virtualCanvas = undefined

    posX = NaN
    posY = NaN
    width = NaN
    height = NaN

    srcCutoutX = NaN
    srcCutoutY = NaN
    srcCutoutWidth = NaN
    srcCutoutHeight = NaN

    colorAlpha = 255

    angle = 0
    rotationPointX = NaN
    rotationPointY = NaN

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setVirtualCanvas(virtualCanvas)
    {
        this.virtualCanvas = virtualCanvas
        return this
    }

    setPosition(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setSize(width, height)
    {
        this.width = width
        this.height = height
        return this
    }

    setCanvasCutoutDimensions(x, y, width, height)
    {
        this.srcCutoutX = x
        this.srcCutoutY = y
        this.srcCutoutWidth = width
        this.srcCutoutHeight = height
        return this
    }

    setAlpha(alpha)
    {
        this.colorAlpha = alpha
        return this
    }

    rotateDegrees(degreesAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        return this.rotateRadians(degreesAngle * Math.PI / 180, optional_rotationCenterX, optional_rotationCenterY)
    }

    rotateRadians(radiansAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        this.angle += radiansAngle
        this.rotationPointX = optional_rotationCenterX
        this.rotationPointY = optional_rotationCenterY
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(typeof this.virtualCanvas == "undefined")
            throw "VirtualCanvasRenderCall has no virtualcanvas set. Set it's position using 'VirtualCanvasRenderCall#setVirtualCanvas'."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "VirtualCanvasRenderCall has no position set. Set it's position using 'VirtualCanvasRenderCall#setPosition'."

        if(isNaN(this.width) || isNaN(this.height))
            throw "VirtualCanvasRenderCall has no size set. Set it's size using 'VirtualCanvasRenderCall#setSize'."

        if(isNaN(this.srcCutoutX) || isNaN(this.srcCutoutY) || isNaN(this.srcCutoutWidth) || isNaN(this.srcCutoutHeight))
        {
            this.srcCutoutX = 0;
            this.srcCutoutY = 0;
            this.srcCutoutWidth = this.virtualCanvas.getWidth();
            this.srcCutoutHeight = this.virtualCanvas.getHeight();
        }

        let renderContext = this.renderCalls.renderContext

        renderContext.globalAlpha = this.colorAlpha / 255

        if(this.angle != 0)
        {
            if(isNaN(this.rotationPointX) || isNaN(this.rotationPointY))
            {
                this.rotationPointX = this.posX + this.width / 2
                this.rotationPointY = this.posY + this.height / 2
            }

            renderContext.translate(this.rotationPointX, this.rotationPointY)
            renderContext.rotate(this.angle)
            renderContext.translate(-this.rotationPointX, -this.rotationPointY)
        }

        renderContext.drawImage(this.virtualCanvas.canvasElement, this.srcCutoutX, this.srcCutoutY, this.srcCutoutWidth, this.srcCutoutHeight, this.posX, this.posY, this.width, this.height)

        renderContext.resetTransform()

        this.invalidated = true
    }

}

class TextRenderCall
{

    renderCalls = undefined

    content = undefined

    posX = NaN
    posY = NaN
    size = NaN

    positioning = TextPositioning.RIGHT

    family = "Consolas"

    colorRed = 0
    colorGreen = 0
    colorBlue = 0
    colorAlpha = 255

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setContent(content)
    {
        this.content = content
        return this
    }

    setPosition(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setSize(size)
    {
        this.size = size
        return this
    }

    setPositioning(textPositioning)
    {
        this.positioning = textPositioning
        return this
    }

    setFontFamily(fontFamily)
    {
        this.family = fontFamily
        return this
    }

    setColor(red, green, blue, optional_alpha)
    {
        this.colorRed = red
        this.colorGreen = green
        this.colorBlue = blue
        if(typeof optional_alpha !== "undefined")
            this.colorAlpha = optional_alpha
        return this
    }

    setAlpha(alpha)
    {
        this.colorAlpha = alpha
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(typeof this.content == "undefined")
            throw "TextRenderCall has no content set. Set it's position using 'TextRenderCall#setContent'."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "TextRenderCall has no position set. Set it's position using 'TextRenderCall#setPosition'."

        if(isNaN(this.size))
            throw "TextRenderCall has no size set. Set it's size using 'TextRenderCall#setSize'."

        let renderContext = this.renderCalls.renderContext

        renderContext.font = `${this.size}px ${this.family}`
        renderContext.fillStyle = `rgba(${this.colorRed}, ${this.colorGreen}, ${this.colorBlue}, ${this.colorAlpha / 255})`
        renderContext.textAlign = this.positioning
        renderContext.fillText(this.content, this.posX, this.posY + this.size)

        this.invalidated = true
    }

}

class LineRenderCall
{

    renderCalls = undefined

    posX = NaN
    posY = NaN
    endX = NaN
    endY = NaN

    lineWidth = NaN

    colorRed = 0
    colorGreen = 0
    colorBlue = 0
    colorAlpha = 255

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setStart(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setEnd(x, y)
    {
        this.endX = x
        this.endY = y
        return this
    }

    setWidth(width)
    {
        this.lineWidth = width
        return this
    }

    setColor(red, green, blue, optional_alpha)
    {
        this.colorRed = red
        this.colorGreen = green
        this.colorBlue = blue
        if(typeof optional_alpha !== "undefined")
            this.colorAlpha = optional_alpha
        return this
    }

    setAlpha(alpha)
    {
        this.colorAlpha = alpha
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "LineRenderCall has no start position set. Set it's start position using 'LineRenderCall#setStart'."

        if(isNaN(this.endX) || isNaN(this.endX))
            throw "LineRenderCall has no end position set. Set it's end position using 'LineRenderCall#setEnd'."

        if(isNaN(this.lineWidth))
            throw "LineRenderCall has no width set. Set it's width using 'LineRenderCall#setWidth'."

        let renderContext = this.renderCalls.renderContext

        renderContext.strokeStyle = `rgba(${this.colorRed}, ${this.colorGreen}, ${this.colorBlue}, ${(this.colorAlpha / 255)})`
        renderContext.lineWidth = this.lineWidth
        renderContext.beginPath()
        renderContext.moveTo(this.posX, this.posY)
        renderContext.lineTo(this.endX, this.endY)
        renderContext.stroke()

        this.invalidated = true
    }

}

class ClearRectangleRenderCall
{

    renderCalls = undefined

    posX = NaN
    posY = NaN
    width = NaN
    height = NaN

    angle = 0
    rotationPointX = NaN
    rotationPointY = NaN

    invalidated = false

    constructor(renderCalls)
    {
        this.renderCalls = renderCalls
    }

    setPosition(x, y)
    {
        this.posX = x
        this.posY = y
        return this
    }

    setSize(width, height)
    {
        this.width = width
        this.height = height
        return this
    }

    rotateDegrees(degreesAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        return this.rotateRadians(degreesAngle * Math.PI / 180, optional_rotationCenterX, optional_rotationCenterY)
    }

    rotateRadians(radiansAngle, optional_rotationCenterX, optional_rotationCenterY)
    {
        this.angle += radiansAngle
        this.rotationPointX = optional_rotationCenterX
        this.rotationPointY = optional_rotationCenterY
        return this
    }

    draw()
    {
        if(this.invalidated)
            throw "RenderCall has been drawn already. Please use a new one."

        if(isNaN(this.posX) || isNaN(this.posY))
            throw "RectangleRenderCall has no position set. Set it's position using 'RectangleRenderCall#setPosition'."

        if(isNaN(this.width) || isNaN(this.height))
            throw "RectangleRenderCall has no size set. Set it's size using 'RectangleRenderCall#setSize'."

        let renderContext = this.renderCalls.renderContext
        let previousGlobalCompositeOperation = renderContext.globalCompositeOperation

        renderContext.fillStyle = "rgba(0, 0, 0, 1)"
        renderContext.globalCompositeOperation = "destination-out"

        if(this.angle != 0)
        {
            if(isNaN(this.rotationPointX) || isNaN(this.rotationPointY))
            {
                this.rotationPointX = this.posX + this.width / 2
                this.rotationPointY = this.posY + this.height / 2
            }

            renderContext.translate(this.rotationPointX, this.rotationPointY)
            renderContext.rotate(this.angle)
            renderContext.translate(-this.rotationPointX, -this.rotationPointY)
        }

        renderContext.fillRect(this.posX, this.posY, this.width, this.height)

        renderContext.resetTransform()
        renderContext.globalCompositeOperation = previousGlobalCompositeOperation

        this.invalidated = true
    }

}



class RenderCalls
{

    renderContext = undefined
    width = 0
    height = 0

    setRenderContext(renderContext)
    {
        this.renderContext = renderContext
    }

    setSize(width, height)
    {
        this.width = width
        this.height = height
    }


    drawRectangle()
    {
        return new RectangleRenderCall(this)
    }

    drawOval()
    {
        return new OvalRenderCall(this)
    }

    drawSprite()
    {
        return new SpriteRenderCall(this)
    }

    drawVirtualCanvas()
    {
        return new VirtualCanvasRenderCall(this)
    }

    drawText()
    {
        return new TextRenderCall(this)
    }

    drawLine()
    {
        return new LineRenderCall(this)
    }

    clearRectangle()
    {
        return new ClearRectangleRenderCall(this)
    }


    fill(red, green, blue, optional_alpha)
    {
        this.drawRectangle().setPosition(-1, -1).setSize(this.width + 2, this.height + 2).setColor(red, green, blue, optional_alpha).draw();
    }

}



class Sprite
{

    image = undefined
    loaded = false

    constructor(filePath)
    {
        this.image = new Image()
        this.image.parentSprite = this
        this.image.onload = function() { this.parentSprite.onload() }
        this.image.src = filePath
    }

    getWidth()
    {
        return this.image.width
    }

    getHeight()
    {
        return this.image.height
    }

    getImage()
    {
        return this.image
    }

    onload()
    {
        this.loaded = true
    }

}



class VirtualCanvas extends RenderCalls
{

    canvasElement = undefined
    graphics = undefined
    width = 0
    height = 0

    constructor(width, height)
    {
        super()

        this.canvasElement = document.createElement("canvas")
        this.canvasElement.width = width
        this.canvasElement.height = height
        this.graphics = this.canvasElement.getContext("2d")
        this.width = width
        this.height = height

        super.setRenderContext(this.graphics)
        super.setSize(this.width, this.height)
    }

    getWidth()
    {
        return this.width
    }

    getHeight()
    {
        return this.height
    }

    getImage()
    {
        let canvasImage = new Image()
        canvasImage.src = this.canvasElement.toDataURL()
        return canvasImage
    }

}

/*
 *  WEIN2DAPPLICATION
 *
 *  The main class. Communicates with the canvas. and does rendering to it.
 */

class Wein2DApplication extends RenderCalls
{

    canvasElement = undefined
    graphics = undefined
    onFrame = undefined

    inputManager = undefined

    lastFrameTime = 0
    lastWidth = 0
    lastHeight = 0

    width = 0
    height = 0
    deltaTime = 0

    constructor(canvas, onFrame)
    {
        super()

        this.canvasElement = canvas
        this.graphics = this.canvasElement.getContext("2d")
        this.graphics.webkitImageSmoothingEnabled = false
        this.graphics.imageSmoothingEnabled = false
        this.onFrame = onFrame
        this.inputManager = new InputManager(this.canvasElement)

        this.width = this.canvasElement.offsetWidth
        this.height = this.canvasElement.offsetHeight
        this.canvasElement.width = this.canvasElement.offsetWidth
        this.canvasElement.height = this.canvasElement.offsetHeight

        this.lastFrameTime = window.performance.now()
        requestAnimationFrame((timestamp) => this.internalOnFrame(timestamp))
    }

    internalOnFrame(timestamp)
    {
        this.width = this.canvasElement.offsetWidth
        this.height = this.canvasElement.offsetHeight
        this.canvasElement.width = this.canvasElement.offsetWidth
        this.canvasElement.height = this.canvasElement.offsetHeight

        super.setRenderContext(this.graphics)
        super.setSize(this.width, this.height)

        if(this.lastWidth != this.width || this.lastHeight != this.height)
        {
            this.lastWidth = this.width
            this.lastHeight = this.height
            this.lastFrameTime = window.performance.now()
            this.inputManager.resetButtons()
        }

        let currentTime = window.performance.now()
        this.deltaTime = (currentTime - this.lastFrameTime) / 1_000
        this.lastFrameTime = currentTime

        this.onFrame()

        requestAnimationFrame(() => this.internalOnFrame())
    }


    getKey(key)
    {
        return this.inputManager.getKey(key)
    }

    getTypedText()
    {
        return this.inputManager.getTypedText()
    }

    setTypedText(newText)
    {
        this.inputManager.setTypedText(newText)
    }

    getMouseX()
    {
        return this.inputManager.getMouseX();
    }

    getMouseY()
    {
        return this.inputManager.getMouseY();
    }

    getMouseL()
    {
        return this.inputManager.getMouseL()
    }

    getMouseS()
    {
        return this.inputManager.getMouseS()
    }

    getMouseR()
    {
        return this.inputManager.getMouseR()
    }

}

/*
 *  OTHER CLASSES
 *
 *  Sound can be used to load a Sound file into memory and play it.
 *  BoxCollision can be used to calculate basic AABB-Collision.
 */

class Sound
{

    sound = undefined

    constructor(filePath)
    {
        this.sound = new Audio(filePath)
    }

    loop(looping)
    {
        this.sound.loop = looping
    }

    play()
    {
        if(this.isPlaying())
        this.stop()
        this.sound.play()
    }

    stop()
    {
        this.sound.pause()
        this.sound.currentTime = 0
    }

    isPlaying()
    {
        return !this.sound.paused
    }

    setVolume(volume)
    {
        this.sound.volume = volume
    }

}



class BoxCollision
{

    static rectTouchingRect(rect1PosX, rect1PosY, rect1SizeX, rect1SizeY, rect2PosX, rect2PosY, rect2SizeX, rect2SizeY)
    {
        return (!(rect1PosX + rect1SizeX < rect2PosX) && !(rect2PosX + rect2SizeX < rect1PosX) && !(rect1PosY + rect1SizeY < rect2PosY) && !(rect2PosY + rect2SizeY < rect1PosY))
    }

    static pointInsideRect(pointX, pointY, rectPosX, rectPosY, rectSizeX, rectSizeY)
    {
        return (rectPosX < pointX && pointX < rectPosX + rectSizeX && rectPosY < pointY && pointY < rectPosY + rectSizeY)
    }

    static rectInsideRect(rect1PosX, rect1PosY, rect1SizeX, rect1SizeY, rect2PosX, rect2PosY, rect2SizeX, rect2SizeY)
    {
        return (rect2PosX < rect1PosX && rect1PosX + rect1SizeX < rect2PosX + rect2SizeX && rect2PosY < rect1PosY && rect1PosY + rect1SizeY < rect2PosY + rect2SizeY)
    }

}
