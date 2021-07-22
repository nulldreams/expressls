import { exceptionExample } from '@/api/services'
import { NextFunction, Request, Response } from 'express'

export const exceptionExampleController = (_: Request, res: Response, next: NextFunction) => {
  try {
    const response = exceptionExample()

    res.send(response)
  } catch (error) {
    next(error)
  }
}
