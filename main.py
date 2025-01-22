@namespace
class ScanI2C:
    # % blockId=ScanI2C
    # % block="i2cCurrentAdd"
    def i2cCurrentAdd():
        for i in range(64, 69):
            pins.i2c_write_number(i, 0, NumberFormat.UINT8_LE, False)
            data = pins.i2c_read_number(i, NumberFormat.UINT8_LE)
            if data != 0xFF:
                basic.show_number(i)
                basic.pause(500)