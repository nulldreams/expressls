import { tedinRouter } from '@/api/routers'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/tedin', tedinRouter)

  app.use((_, res, _2) => {
    res.status(404).json({ error: 'NOT FOUND' })
  })
}
