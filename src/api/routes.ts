import { ErrorHandler } from '@/api/errors'
import { handleError } from '@/api/middlewares'
import { exampleRouter } from '@/api/routers'
import { Express, NextFunction, Request, Response } from 'express'

export default (app: Express): void => {
  app.use('/example', exampleRouter)

  app.use((err: ErrorHandler, _: Request, res: Response, next: NextFunction) => {
    handleError(err, res, next)
  })
}
