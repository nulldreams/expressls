import setupRoutes from '@/api/routes'
import express, { json } from 'express'
import helmet from 'helmet'

const app = express()

app.use(json())
app.use(helmet())

setupRoutes(app)

export default app
