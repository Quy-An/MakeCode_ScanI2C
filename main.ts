namespace ScanI2C{
    //% blockId=ScanI2C
    //% block="scan"
    export function i2cCurrentAdd(){
        for (let i = 64; i < 69; i++) {
            pins.i2cWriteNumber(i, 0, NumberFormat.UInt8LE, false)
            let data = pins.i2cReadNumber(i, NumberFormat.UInt8LE)
            if (data != 0xFF) {
                basic.showNumber(i)
                basic.pause(500)
            }
        }
    }
}