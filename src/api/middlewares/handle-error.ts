import { ErrorHandler } from '@/api/errors'
import { NextFunction, Response } from 'express'

export const handleError = (err: ErrorHandler, res: Response, _: NextFunction) => {
  const { message, statusCode } = err

  res.status(statusCode).send({ status: 'error', statusCode, message })
}
