input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0.713 * pasos)
})
input.onButtonPressed(Button.B, function () {
    pasos = 0
    basic.clearScreen()
})
let pasos = 0
pasos = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 2500) {
        pasos += 1
        basic.pause(200)
    }
})
