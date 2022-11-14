import { Injectable } from '@nestjs/common'
import { Anchor, Workbook } from 'exceljs'
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
        header: 'ảnh',
        key: '1',
        // hidden: !!column.hidden,
        width: 30
      }
    ]

    const imageId1 = workbook.addImage({
      filename: 'uploads/images/9eddb421-7f0f-47fd-9b4c-c275f168c06a.jpeg',
      extension: 'jpeg'
    })
    sheet.addImage(imageId1, 'A1:A1')
    sheet.getRow(2).height = 60
    await workbook.xlsx.writeFile(`${process.cwd()}/export/excels\/${filename}`)
  }
}
