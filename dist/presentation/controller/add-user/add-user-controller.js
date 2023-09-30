"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const templates_1 = require("../../../utils/factors/emailTemplate/templates");
class AddUserController {
    constructor(addUser, addConfigs, userValidation, mailService, addUserBelongStore) {
        this.addUser = addUser;
        this.userValidation = userValidation;
        this.mailService = mailService;
        this.addConfigs = addConfigs;
        this.addUserBelongStore = addUserBelongStore;
    }
    async handle(httpRequest) {
        try {
            const userError = this.userValidation.validate(httpRequest.body.user);
            if (userError) {
                return (0, http_helper_1.badRequest)(userError);
            }
            const { userName, companyId, userTypeId, email, phone, storesId } = httpRequest.body.user;
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
            });
            if (!user) {
                return (0, http_helper_1.forbidden)(new errors_1.EmailInUseError());
            }
            if (storesId) {
                for (const idStore of storesId) {
                    await this.addUserBelongStore.addUserBelongStore({ idUser: user.id, idStore: idStore });
                }
            }
            const { language, tempUnit, weightUnit, theme } = httpRequest.body.userConfig;
            const configs = await this.addConfigs.add({
                userId: user.id,
                language,
                tempUnit,
                weightUnit,
                theme
            });
            const emailSend = await this.mailService.sendMail({
                from: 'suporte@praticabr.com',
                to: user.email,
                subject: 'Convite usuário',
                html: (0, templates_1.userInvitationTemplate)(user.userName, user.email, user.id, user.activateToken, language)
            });
            return (0, http_helper_1.ok)({
                user: user,
                configs: configs
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.AddUserController = AddUserController;
