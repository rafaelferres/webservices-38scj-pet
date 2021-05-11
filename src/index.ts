import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { app } from './app'
import dotenv from 'dotenv'
dotenv.config()

createConnection().then(async () => {
  app.listen(process.env.PORT || 8080)
  console.log('Running')
})
