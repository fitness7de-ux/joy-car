input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    motors.dualMotorPower(Motor.M0_M1, 10)
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Left,
    1,
    2
    )
    while (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
            JoyCar.stop(StopIntensity.Intense)
        } else {
            JoyCar.stop(StopIntensity.Soft)
        }
    }
    basic.showLeds(`
        . . # # .
        . . # # .
        # # # # #
        . . # # .
        . . # # .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    JoyCar.light(ToggleSwitch.On)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # # .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    JoyCar.light(ToggleSwitch.Off)
    JoyCar.stop(StopIntensity.Soft)
})
JoyCar.initJoyCar(RevisionMainboard.OnepThree)
JoyCar.initController(ControllerType.Calliope)
basic.showLeds(`
    . . . . #
    . . . . #
    # . # # .
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
