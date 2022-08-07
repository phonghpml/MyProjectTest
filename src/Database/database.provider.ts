import { configData } from 'src/Config/Data/database.config'
import { DataSource } from 'typeorm'

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(configData)
      return dataSource.initialize()
    }
  }
]
