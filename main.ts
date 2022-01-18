serial.onDataReceived(serial.delimiters(Delimiters.Comma), function () {
    message = serial.readUntil(serial.delimiters(Delimiters.Comma))
    conversion = parseFloat(message)
    if (conversion == 9) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        vitesse = 0
        Start = false
        angle = 90
        serial.writeLine("*SV50*")
    } else if (conversion == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        Start = true
        vitesse = 0
        angle = 90
        serial.writeLine("*SV50*")
    } else if (conversion == 2 && vitesse <= 923) {
        vitesse += 100
    } else if (conversion == 3 && vitesse >= 100) {
        vitesse += -100
    } else if (conversion == 4 && angle <= 165) {
        angle += 5
    } else if (conversion == 5 && angle >= 5) {
        angle += -5
    } else if (conversion == 6) {
        recul = !(recul)
        vitesse = 0
        angle = 90
        if (recul && Start) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
        } else if (recul && Start) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
        } else {
        	
        }
    }
    pins.analogWritePin(AnalogPin.P1, vitesse)
    pins.analogWritePin(AnalogPin.P12, vitesse)
    servos.P0.setAngle(angle)
    serial.writeString("*G" + angle + "*")
})
let conversion = 0
let message = ""
let vitesse = 0
let angle = 0
let recul = false
let Start = false
serial.setBaudRate(BaudRate.BaudRate9600)
Start = false
recul = false
angle = 90
vitesse = 0
pins.analogWritePin(AnalogPin.P12, vitesse)
pins.analogWritePin(AnalogPin.P1, vitesse)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
servos.P0.setAngle(90)
serial.redirect(
SerialPin.P16,
SerialPin.P15,
BaudRate.BaudRate9600
)
basic.clearScreen()
basic.forever(function () {
	
})
