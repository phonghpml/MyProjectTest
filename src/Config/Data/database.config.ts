import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import {
  DATA_DATABASENAME,
  DATA_HOST,
  DATA_PASSWORD,
  DATA_PORT,
  DATA_USERNAME
} from 'src/constant/Environment/data.constant'
import { User } from 'src/module/user/user.schema'
export const configData: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DATA_HOST,
  port: DATA_PORT,
  username: DATA_USERNAME,
  password: DATA_PASSWORD,
  database: DATA_DATABASENAME,
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: []
}
