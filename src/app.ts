import express from 'express'
import bearerToken from 'express-bearer-token'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swagger from './constants/swagger'

const app = express()
app.use(bearerToken())
app.use(express.json())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger))

app.use(router)

export { app }
