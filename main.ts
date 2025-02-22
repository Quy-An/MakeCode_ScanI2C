namespace ScanI2C{
    //% blockId=ScanI2C
    //% block="i2cCurrentAdd"
    export function i2cCurrentAdd(){
        let data = 0
        for (let i = 0; i < 128; i++) {
            pins.i2cWriteNumber(i, 0, NumberFormat.UInt8LE, false)
            let data = pins.i2cReadNumber(i, NumberFormat.UInt8LE, false)
            if (data == 1) {
                basic.showNumber(i)
                basic.pause(500)
            }
        }
    }
}