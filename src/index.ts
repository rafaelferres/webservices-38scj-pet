import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { app } from './app'
import dotenv from 'dotenv'
dotenv.config()

createConnection().then(async () => {
  app.listen(8080 || process.env.PORT)
  console.log('Running')
})
