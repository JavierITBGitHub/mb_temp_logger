datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    led.setBrightness(50)
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    logging = false
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"temperature",
"light"
)
loops.everyInterval(900000, function () {
    if (logging) {
        basic.showNumber(input.temperature())
        datalogger.log(
        datalogger.createCV("temperature", input.temperature()),
        datalogger.createCV("light", input.lightLevel()),
        datalogger.createCV("sound", input.soundLevel())
        )
        basic.showNumber(input.temperature())
        basic.clearScreen()
    }
})
