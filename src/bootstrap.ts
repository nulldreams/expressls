import app from '@/config/app'
import serverlessHttp from 'serverless-http'

export const handler = serverlessHttp(app)
