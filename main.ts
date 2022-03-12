let strip = neopixel.create(DigitalPin.P9, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
