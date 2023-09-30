import { DeleteUser } from '../../../domain/usecases/delete-user'
import { userRecuserTemplate } from '../../../utils/factors/emailTemplate/templates'
import { MailService } from '../../../utils/send-email-adapter'
import { MissingParamError, ServerError } from '../../errors'
import { NoRowsAffected } from '../../errors/no-rows-affected-error'
import { SendEmailError } from '../../errors/send-email-error'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation, sendEmail } from '../../protocols'

export class DeleteRecuseUserController implements Controller {
  private readonly paramsValidation: Validation
  private readonly dbDeleteUser: DeleteUser
  private readonly mailService: sendEmail;

  constructor(paramsValidation: Validation, dbDeleteUser: DeleteUser, mailService: sendEmail) {
    this.paramsValidation = paramsValidation
    this.dbDeleteUser = dbDeleteUser
    this.mailService = mailService
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, name, companyName, email } = httpRequest.params
      const validationError = this.paramsValidation.validate(httpRequest.params)
      if (validationError) return badRequest(new MissingParamError('id'))
      const deleteIsOk = await this.dbDeleteUser.deleteUser(id)
      if (!deleteIsOk) return badRequest(new NoRowsAffected(id))

      const emailSend = await this.mailService.sendMail({
        from: 'suporte@praticabr.com',
        to: email,
        subject: 'Ativação de conta',
        html: userRecuserTemplate(
          name,
          companyName,
          'PT'
        )
      })
      // if (!emailSend) {
      //  return forbidden(new SendEmailError())
      //}
      return ok({})
    } catch (error) {
      return serverError(new ServerError(error.stack))
    }
  }
}
