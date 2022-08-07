import {
  DATA_DATABASENAME,
  DATA_HOST,
  DATA_PASSWORD,
  DATA_PORT,
  DATA_USERNAME
} from 'src/Constant/Environment/data'
import { DataSourceOptions } from 'typeorm'
export const configData: DataSourceOptions = {
  type: 'mysql',
  host: DATA_HOST,
  port: DATA_PORT,
  username: DATA_USERNAME,
  password: DATA_PASSWORD,
  database: DATA_DATABASENAME,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: []
}
