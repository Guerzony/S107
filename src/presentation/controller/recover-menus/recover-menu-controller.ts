import { AddRecoverEquipment } from '../../../domain/usecases/add-recover-equipment'
import { AddRecoverMenus } from '../../../domain/usecases/add-recover-menu'
import { LoadRecoverEquipByIdUser } from '../../../domain/usecases/load-recover-equip-by-idUser'
import { LoadRecoverMenusByIdUser } from '../../../domain/usecases/load-recover-menu-by-idUser'
import { LoadUserOldByEmail } from '../../../domain/usecases/load-userOld-by-email'
import { userNotificationTemplate } from '../../../utils/factors/emailTemplate/templates'
import { MailService } from '../../../utils/send-email-adapter'
import { badRequest, created, noContent, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation, sendEmail } from '../../protocols'

export class RecoverMenusController implements Controller {
  private readonly bodyValidation: Validation
  private readonly loadUserMenu: LoadRecoverMenusByIdUser
  private readonly addRecoverMenus: AddRecoverMenus
  private readonly loadUserByEmail: LoadUserOldByEmail
  private readonly loadRecoverEquipByIdUser: LoadRecoverEquipByIdUser
  private readonly addRecoverEquipment: AddRecoverEquipment
  private readonly mailService: sendEmail;

  constructor(bodyValidation: Validation, loadUserMenu: LoadRecoverMenusByIdUser, addRecoverMenus: AddRecoverMenus, loadUserByEmail: LoadUserOldByEmail, loadRecoverEquipByIdUser: LoadRecoverEquipByIdUser, addRecoverEquipment: AddRecoverEquipment, mailService: sendEmail) {
    this.bodyValidation = bodyValidation
    this.loadUserMenu = loadUserMenu
    this.addRecoverMenus = addRecoverMenus
    this.loadUserByEmail = loadUserByEmail
    this.loadRecoverEquipByIdUser = loadRecoverEquipByIdUser
    this.addRecoverEquipment = addRecoverEquipment
    this.mailService = mailService
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { user } = httpRequest.body

      if (user.typeUser.match(/user/)) {
        await this.mailService.sendMail(
          {
            from: 'suporte@praticabr.com',
            to: user.email,
            subject: 'Ativação de conta',
            html: userNotificationTemplate(
              user.nameCompany,
              user.userName,
              'PT'
            )
          }
        )
      }

      const menuError = this.bodyValidation.validate(user)
      if (menuError) return badRequest(menuError)

      const response = await this.loadUserByEmail.loadUser(user.email)
      if (!response) return noContent()

      const menu = await this.loadUserMenu.loadMenu(response.id)
      await this.addRecoverMenus.createMenu(menu, user)

      const equip = await this.loadRecoverEquipByIdUser.loadEquip(response.id)
      await this.addRecoverEquipment.createEquipment(equip, user)

      return created({
        response: 'create success menus'
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
