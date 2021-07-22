import { helloWorldService } from '@/api/services'
import { Request, Response } from 'express'

export const helloWorldController = (_: Request, res: Response) => {
  const response = helloWorldService()

  res.send(response)
}
