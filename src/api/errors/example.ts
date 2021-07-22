import { ErrorHandler } from '@/api/errors'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export class ExceptionExample extends ErrorHandler {
  constructor() {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      ReasonPhrases.INTERNAL_SERVER_ERROR
    )
  }
}
