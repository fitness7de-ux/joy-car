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
    while (0 == 0) {
        if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 2154, 1, 255, 0, 1118, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            JoyCar.stop(StopIntensity.Intense)
            continue;
        }
        if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 2154, 1, 255, 0, 1118, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            JoyCar.stop(StopIntensity.Intense)
            continue;
        }
        continue;
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
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
    if (JoyCar.collisionDetection() < 1 && 1 == 1) {
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showNumber(JoyCar.collisionDetection())
    }
})
input.onGesture(Gesture.Shake, function () {
    JoyCar.light(ToggleSwitch.On)
    JoyCar.stop(StopIntensity.Soft)
    basic.showLeds(`
        . . # # .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    JoyCar.hazardlights(ToggleSwitch.On)
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
