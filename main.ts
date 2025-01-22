namespace ScanI2C{
    //% blockId=ScanI2C
    //% block="i2cCurrentAdd"
    export function i2cCurrentAdd(){
        for (let i = 0; i < 128; i++) {
            pins.i2cWriteNumber(i, 0, NumberFormat.UInt8LE, false)
            let data = pins.i2cReadNumber(i, NumberFormat.UInt8LE, true)
            if (data != 0xFF) {
                basic.showNumber(i)
                basic.pause(500)
            }
        }
    }
}