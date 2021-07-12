import { Request, Response } from 'express'

export const getTeste = (req: Request, res: Response) => {
  console.log(req.params)
  res.send('tedinController')
}
