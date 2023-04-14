import { Injectable, Ip } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Workbook } from 'exceljs'
import { address } from 'ip'
import * as moment from 'moment'
import { Issuer } from 'openid-client'
import { dirname } from 'path'
import { async } from 'rxjs'
var gtts = require('node-gtts')('vi');
var path = require('path');
const dayjs = require('dayjs')

@Injectable()
export class TestReactService {
  constructor() { }
  async testReact(){
    console.log('aaaaaaaaaaaaaaaa')
  }
}
