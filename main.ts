input.onButtonPressed(Button.A, function () {
    aa = 1
})
input.onButtonPressed(Button.AB, function () {
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            x = huskylens.readeBox(1, Content1.xCenter)
            y = huskylens.readeBox(1, Content1.yCenter)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    aa = 0
})
let y = 0
let x = 0
let aa = 0
basic.showIcon(IconNames.Rollerskate)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
radio.setGroup(137)
basic.forever(function () {
    if (aa == 1) {
        for (let index = 0; index <= 140; index++) {
            SuperBit.Servo(SuperBit.enServo.S1, index)
            basic.pause(200)
        }
        for (let index = 0; index <= 140; index++) {
            SuperBit.Servo(SuperBit.enServo.S2, index)
            basic.pause(200)
        }
    }
})
