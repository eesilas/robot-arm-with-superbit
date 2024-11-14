basic.showIcon(IconNames.Rollerskate)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
radio.setGroup(137)
basic.forever(function () {
    for (let index = 0; index <= 120; index++) {
        SuperBit.Servo(SuperBit.enServo.S1, index)
        basic.pause(200)
    }
    for (let index = 0; index <= 120; index++) {
        SuperBit.Servo(SuperBit.enServo.S2, index)
        basic.pause(200)
    }
})
