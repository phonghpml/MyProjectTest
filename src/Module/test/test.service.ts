import { Injectable, Ip } from '@nestjs/common'
import { Workbook } from 'exceljs'
import { address } from 'ip'
@Injectable()
export class TestService {
  constructor() {}
  async testImageExcel() {
    console.log('a')
    const workbook = new Workbook()
    workbook.creator = 'Me'
    const sheet = workbook.addWorksheet('My Sheet')
    const filename = `Excel_${Date.now()}.xlsx`
    sheet.columns = [
      {
        // header: 'ảnh',
        key: '1',
        // hidden: !!column.hidden,
        width: 50
        // hidden: true
      }
    ]
    const row = sheet.getRow(5)
    row.getCell(1).value = 'aaa'

    const imageId1 = workbook.addImage({
      filename: 'uploads/images/9eddb421-7f0f-47fd-9b4c-c275f168c06a.jpeg',
      extension: 'jpeg'
    })
    sheet.addImage(imageId1, 'A2:A2')
    console.log(Ip)
    sheet.getRow(2).height = 160
    sheet.getCell('A10').value = 'Mã đơn hàng'
    sheet.getCell('A11').value = 'Mã đơn hàng1'
    await workbook.xlsx.writeFile(`${process.cwd()}/export/excels\/${filename}`)
  }
}
