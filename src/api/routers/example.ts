import { exceptionExampleController, helloWorldController } from '@/api/controllers'
import { Router } from 'express'

const router = Router()

router.get('/hello-world', helloWorldController)
router.get('/exception', exceptionExampleController)

export const exampleRouter = router
