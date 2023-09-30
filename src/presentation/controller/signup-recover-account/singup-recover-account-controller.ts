import {
  HttpRequest,
  HttpResponse,
  Controller,
  AddUser,
  Validation,
  AddCompany,
  MailService,
  CompanyModel,
  sendEmail
} from './signup-recover-account-controller-protocols'
import {
  badRequest,
  serverError,
  ok,
  forbidden
} from '../../helpers/http-helper'
import { EmailInUseError } from '../../errors'
import { CompanyExistsError } from '../../errors/company-already- exists-error'
import { SendEmailError } from '../../errors/send-email-error'
import { userAcceptanceByAdmTemplate, admRecoverAccountTemplate } from '../../../utils/factors/emailTemplate/templates'
import { AddConfigs } from '../../../domain/usecases/add-configs'
import { LoadUserByCorporateName } from '../../../domain/usecases/load-user-by-corporateName'

export class SignupRecoverAccountController implements Controller {
  private readonly addUser: AddUser;
  private readonly addCompany: AddCompany;
  private readonly userValidation: Validation;
  private readonly companyValidation: Validation;
  private readonly mailService: sendEmail;
  private readonly addConfigs: AddConfigs;
  private readonly loadUserByCorporateName: LoadUserByCorporateName;

  constructor(
    addUser: AddUser,
    addCompany: AddCompany,
    addConfigs: AddConfigs,
    userValidation: Validation,
    companyValidation: Validation,
    mailService: sendEmail,
    loadUserByCorporateName: LoadUserByCorporateName
  ) {
    this.addUser = addUser
    this.addCompany = addCompany
    this.userValidation = userValidation
    this.companyValidation = companyValidation
    this.mailService = mailService
    this.addConfigs = addConfigs
    this.loadUserByCorporateName = loadUserByCorporateName
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      let companyReturn: CompanyModel | null = null
      const company = httpRequest.body.company

      const userAdm = await this.loadUserByCorporateName.loadUser(company.corporateName)

      if (!userAdm) {
        const companyError = this.companyValidation.validate(company)
        if (companyError) {
          return badRequest(companyError)
        }
        companyReturn = await this.addCompany.add(company)
        if (!companyReturn) {
          return forbidden(new CompanyExistsError())
        }
      } else {
        companyReturn = {
          id: userAdm.companyId,
          corporateName: company.corporateName,
          companyType: company.companyType
        }
      }

      const userError = this.userValidation.validate(httpRequest.body.user)
      if (userError) {
        return badRequest(userError)
      }

      const { userName, email, phone, password, creationDate, language } = httpRequest.body.user
      const userReturn = await this.addUser.add({
        userName,
        email,
        emailVerified: false,
        companyId: userAdm ? userAdm.companyId : companyReturn.id,
        phone,
        password,
        creationDate,
        userTypeId: userAdm ? 2 : 1,
        activateToken: null
      })
      if (!userReturn) {
        return forbidden(new EmailInUseError())
      }

      const configsReturn = await this.addConfigs.add({
        userId: userReturn.id,
        language: language,
        tempUnit: '°C',
        weightUnit: 'Gramas',
        theme: 'Light'
      })

      const emailSend = await this.mailService.sendMail(
        userAdm
          ? {
            from: 'suporte@praticabr.com',
            to: userAdm.email,
            subject: 'Ativação de conta',
            html: userAcceptanceByAdmTemplate(
              userAdm.userName,
              userReturn.userName,
              company.corporateName,
              userReturn.email,
              userReturn.id,
              userReturn.companyId,
              userReturn.activateToken,
              'PT'
            )
          }
          : {
            from: 'suporte@praticabr.com',
            to: userReturn.email,
            subject: 'Ativação de conta',
            html: admRecoverAccountTemplate(
              userReturn.userName,
              company.corporateName,
              userReturn.email,
              userReturn.id,
              userReturn.companyId,
              userReturn.activateToken,
              'PT'

            )
          }
      )
      //if (!emailSend) {
      //  return forbidden(new SendEmailError())
      //}

      return ok({
        user: userReturn,
        company: companyReturn,
        configs: configsReturn
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
