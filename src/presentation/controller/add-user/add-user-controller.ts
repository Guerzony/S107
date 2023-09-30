import { HttpRequest, HttpResponse, Controller, AddUser, Validation, MailService, sendEmail } from './add-user-controller-protocols'
import { badRequest, serverError, ok, forbidden } from '../../helpers/http-helper'
import { EmailInUseError } from '../../errors'
import { SendEmailError } from '../../errors/send-email-error'
import { userInvitationTemplate } from '../../../utils/factors/emailTemplate/templates'
import { AddConfigs } from '../../../domain/usecases/add-configs'
import { AddUserBelongStore } from '../../../domain/usecases/add-userBelongStore'

export class AddUserController implements Controller {
  private readonly addUser: AddUser;
  private readonly userValidation: Validation;
  private readonly mailService: sendEmail;
  private readonly addConfigs: AddConfigs;
  private readonly addUserBelongStore: AddUserBelongStore

  constructor(
    addUser: AddUser,
    addConfigs: AddConfigs,
    userValidation: Validation,
    mailService: sendEmail,
    addUserBelongStore: AddUserBelongStore
  ) {
    this.addUser = addUser
    this.userValidation = userValidation
    this.mailService = mailService
    this.addConfigs = addConfigs
    this.addUserBelongStore = addUserBelongStore
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userError = this.userValidation.validate(httpRequest.body.user)
      if (userError) {
        return badRequest(userError)
      }

      const { userName, companyId, userTypeId, email, phone, storesId } = httpRequest.body.user
      const user = await this.addUser.add({
        userName,
        email,
        emailVerified: false,
        companyId,
        phone,
        password: 'PlatafromIOK',
        creationDate: new Date().toISOString(),
        userTypeId,
        activateToken: null
      })
      if (!user) {
        return forbidden(new EmailInUseError())
      }

      if (storesId) {
        for (const idStore of storesId) {
          await this.addUserBelongStore.addUserBelongStore({ idUser: user.id, idStore: idStore })
        }
      }

      const { language, tempUnit, weightUnit, theme } = httpRequest.body.userConfig
      const configs = await this.addConfigs.add({
        userId: user.id,
        language,
        tempUnit,
        weightUnit,
        theme
      })

      const emailSend = await this.mailService.sendMail({
        from: 'suporte@praticabr.com',
        to: user.email,
        subject: 'Convite usuário',
        html: userInvitationTemplate(
          user.userName,
          user.email,
          user.id,
          user.activateToken,
          language
        )
      })

      return ok({
        user: user,
        configs: configs
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
