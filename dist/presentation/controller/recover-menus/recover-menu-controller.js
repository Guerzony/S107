"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverMenusController = void 0;
const templates_1 = require("../../../utils/factors/emailTemplate/templates");
const http_helper_1 = require("../../helpers/http-helper");
class RecoverMenusController {
    constructor(bodyValidation, loadUserMenu, addRecoverMenus, loadUserByEmail, loadRecoverEquipByIdUser, addRecoverEquipment, mailService) {
        this.bodyValidation = bodyValidation;
        this.loadUserMenu = loadUserMenu;
        this.addRecoverMenus = addRecoverMenus;
        this.loadUserByEmail = loadUserByEmail;
        this.loadRecoverEquipByIdUser = loadRecoverEquipByIdUser;
        this.addRecoverEquipment = addRecoverEquipment;
        this.mailService = mailService;
    }
    async handle(httpRequest) {
        try {
            const { user } = httpRequest.body;
            if (user.typeUser.match(/user/)) {
                await this.mailService.sendMail({
                    from: 'suporte@praticabr.com',
                    to: user.email,
                    subject: 'Ativação de conta',
                    html: (0, templates_1.userNotificationTemplate)(user.nameCompany, user.userName, 'PT')
                });
            }
            const menuError = this.bodyValidation.validate(user);
            if (menuError)
                return (0, http_helper_1.badRequest)(menuError);
            const response = await this.loadUserByEmail.loadUser(user.email);
            if (!response)
                return (0, http_helper_1.noContent)();
            const menu = await this.loadUserMenu.loadMenu(response.id);
            await this.addRecoverMenus.createMenu(menu, user);
            const equip = await this.loadRecoverEquipByIdUser.loadEquip(response.id);
            await this.addRecoverEquipment.createEquipment(equip, user);
            return (0, http_helper_1.created)({
                response: 'create success menus'
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.RecoverMenusController = RecoverMenusController;
