let Pause_Punkt = 200
let Pause_Strich = 600
let Pause_Wortende = 600
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(Pause_Punkt)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(Pause_Punkt)
    }
    basic.pause(Pause_Wortende)
})
