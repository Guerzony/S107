import {
  HttpRequest,
  HttpResponse,
  Controller,
  AddUser,
  Validation,
  AddCompany,
  MailService,
  LoadUserByCorporateName,
  LoadUserByEmail,
  sendEmail
} from './signup-controller-protocols'
import {
  badRequest,
  serverError,
  ok,
  forbidden
} from '../../helpers/http-helper'
import { EmailInUseError } from '../../errors'
import { CompanyExistsError } from '../../errors/company-already- exists-error'
import { SendEmailError } from '../../errors/send-email-error'
import { CreateUserError } from '../../errors/creat-user-error'
import { admAccountActivationTemplate } from '../../../utils/factors/emailTemplate/templates'
import { AddConfigs } from '../../../domain/usecases/add-configs'

export class SignUpController implements Controller {
  private readonly addUser: AddUser;
  private readonly addCompany: AddCompany;
  private readonly userValidation: Validation;
  private readonly companyValidation: Validation;
  private readonly mailService: sendEmail;
  private readonly addConfigs: AddConfigs;
  private readonly loadUserByCorporateName: LoadUserByCorporateName
  private readonly loadUserByEmail: LoadUserByEmail

  constructor(
    addUser: AddUser,
    addCompany: AddCompany,
    addConfigs: AddConfigs,
    userValidation: Validation,
    companyValidation: Validation,
    mailService: sendEmail,
    loadUserByCorporateName: LoadUserByCorporateName,
    loadUserByEmail: LoadUserByEmail

  ) {
    this.addUser = addUser
    this.addCompany = addCompany
    this.userValidation = userValidation
    this.companyValidation = companyValidation
    this.mailService = mailService
    this.addConfigs = addConfigs
    this.loadUserByCorporateName = loadUserByCorporateName
    this.loadUserByEmail = loadUserByEmail
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const companyError = this.companyValidation.validate(
        httpRequest.body.company
      )
      if (companyError) {
        return badRequest(companyError)
      }

      const userError = this.userValidation.validate(httpRequest.body.user)
      if (userError) {
        return badRequest(userError)
      }

      const { corporateName, companyType } = httpRequest.body.company

      const userCompany = await this.loadUserByCorporateName.loadUser(corporateName)
      if (userCompany) return forbidden(new CompanyExistsError())

      const { userName, email, phone, password, creationDate, language } = httpRequest.body.user
      const userEmail = await this.loadUserByEmail.loadUser(email)
      if (userEmail) return forbidden(new EmailInUseError())

      const company = await this.addCompany.add({
        corporateName,
        companyType
      })
      if (!company) {
        return badRequest(new CreateUserError())
      }

      const user = await this.addUser.add({
        userName,
        email,
        emailVerified: false,
        companyId: company.id,
        phone,
        password,
        creationDate,
        userTypeId: 1,
        activateToken: null
      })
      if (!user) {
        return badRequest(new CreateUserError())
      }

      const configs = await this.addConfigs.add({
        userId: user.id,
        language: language,
        tempUnit: '°C',
        weightUnit: 'Gramas',
        theme: 'Light'
      })

      this.mailService.sendMail({
        from: 'suporte@praticabr.com',
        to: user.email,
        subject: 'Ativação de conta',
        html: admAccountActivationTemplate(
          user.userName,
          user.email,
          user.id,
          user.activateToken,
          'PT'
        )
      })
      //   if (!emailSend) {
      //     return forbidden(new SendEmailError())
      //   }

      return ok({
        user: user,
        company: company,
        configs: configs
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
