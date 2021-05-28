input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showNumber(2)
basic.showArrow(ArrowNames.East)
basic.pause(2000)
