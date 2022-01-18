serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    message = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    conversion = parseFloat(message)
    if (true) {
    	
    } else {
    	
    }
})
let conversion = 0
let message = ""
serial.setBaudRate(BaudRate.BaudRate115200)
let Start = 0
let angle = 90
let vitesse = 0
pins.analogWritePin(AnalogPin.P12, vitesse)
pins.analogWritePin(AnalogPin.P1, vitesse)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
servos.P0.setAngle(90)
serial.redirect(
SerialPin.P16,
SerialPin.P15,
BaudRate.BaudRate115200
)
basic.clearScreen()
basic.forever(function () {
	
})
