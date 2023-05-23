input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0.76 * pasos)
})
input.onButtonPressed(Button.B, function () {
    pasos = 0
    basic.clearScreen()
})
let pasos = 0
pasos = 0
basic.showNumber(0)
basic.forever(function () {
    if (pasos == 100) {
        music.playMelody("A B G E C5 A G F ", 120)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1800) {
        pasos += 1
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 3000) {
        pasos += 1
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 1500) {
        pasos += 1
        basic.pause(200)
    }
})
