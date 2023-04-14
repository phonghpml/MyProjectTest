import { Injectable, Ip } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Workbook } from 'exceljs'
import { address } from 'ip'
import * as moment from 'moment'
import { Issuer } from 'openid-client'
import { dirname } from 'path'
var gtts = require('node-gtts')('vi');
var path = require('path');
const dayjs = require('dayjs')

@Injectable()
export class TestService {
  constructor() { }
  async testImageExcel() {
    // console.log('a')
    // const workbook = new Workbook()
    // workbook.creator = 'Me'
    // const sheet = workbook.addWorksheet('My Sheet')
    // const filename = `Excel_${Date.now()}.xlsx`
    // sheet.columns = [
    //   {
    //     // header: 'ảnh',
    //     key: '1',
    //     // hidden: !!column.hidden,
    //     width: 70
    //     // hidden: true
    //   }
    // ]
    // const row = sheet.getRow(5)
    // row.getCell(1).value = 'aaa'

    // const imageId1 = workbook.addImage({
    //   filename: 'uploads/images/9eddb421-7f0f-47fd-9b4c-c275f168c06a.jpeg',
    //   extension: 'jpeg'
    // })
    // sheet.addImage(imageId1, 'A2:A2')
    // console.log(Ip)
    // sheet.getRow(2).height = 170
    // sheet.getCell('A10').value = 'Mã đơn hàng'
    // sheet.getCell('A11').value = 'Mã đơn hàng1'
    // const string = 'phong<br/>bui'
    // // const b = string.replace(/\<br\/\>/g, '\u000a')
    // // console.log(b)
    // sheet.getCell('A12').value = 'phong<br/>bui'

    // await workbook.xlsx.writeFile(`${process.cwd()}/export/excels\/${filename}`)
    // console.log(process.env.SCHEDULE)

    // const googleIssuer = await Issuer.discover('http://localhost:3000/Home')
    // console.log(
    //   'Discovered issuer %s %O',
    //   googleIssuer.issuer,
    //   googleIssuer.metadata
    // )

    // Requiring the lodash library
    // const _ = require('lodash')

    // // Original array
    // var arr = [{ n: 10 }, { n: 5 }, { n: null }, { n: 12 }]

    // // Use of _.sumBy()
    // // method
    // let gfg = _.sumBy(arr, 'n')

    // Printing the output
    // console.log(gfg)
    //text to mp3
    // var filepath = path.join('./', 'i-love-you.wav');
    // console.log(filepath)
    // gtts.save(filepath, 'Xin chào', function () {
    //   console.log('save done');
    // })
    dayjs().format()
    console.log(dayjs().endOf('day'))
  }

  // @Cron(process.env.SCHEDULE)
  // handleCron() {
  //   console.log('Called when the current second is 45')
  // }
  
  //import dayjs from 'dayjs' // ES 2015
  
}
