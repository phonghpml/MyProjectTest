import { config } from 'dotenv'
config()
export const DATA_HOST: string = process.env.DATA_HOST
export const DATA_PORT: number = Number(process.env.DATA_PORT)
export const DATA_USERNAME: string = process.env.DATA_USERNAME
export const DATA_PASSWORD: string = process.env.DATA_PASSWORD
export const DATA_DATABASENAME: string = process.env.DATA_DATABASENAME
