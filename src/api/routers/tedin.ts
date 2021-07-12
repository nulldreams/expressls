import { getTeste } from '@/api/controllers'
import { Router } from 'express'

const router = Router()

router.get('/teste', getTeste)

export const tedinRouter = router
