input.onButtonPressed(Button.A, function () {
    aa = 1
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
input.onButtonPressed(Button.B, function () {
    aa = 0
})
let mapx = 0
let y = 0
let x = 0
let aa = 0
basic.showIcon(IconNames.Rollerskate)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
radio.setGroup(137)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isLearned(1)) {
            x = huskylens.readeBox(1, Content1.xCenter)
            y = huskylens.readeBox(1, Content1.yCenter)
            mapx = Math.map(x, -160, 160, 0, 80)
            SuperBit.Servo(SuperBit.enServo.S2, 80 - x)
            SuperBit.Servo(SuperBit.enServo.S1, Math.map(y, 0, 210, 95, 160))
        }
    }
})
