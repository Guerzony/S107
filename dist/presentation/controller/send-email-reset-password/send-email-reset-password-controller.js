"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailResetPasswordController = void 0;
const templates_1 = require("../../../utils/factors/emailTemplate/templates");
const errors_1 = require("../../errors");
const http_helper_1 = require("../../helpers/http-helper");
class SendEmailResetPasswordController {
    constructor(loadUserByEmail, validation, mailService) {
        this.loadUserByEmail = loadUserByEmail;
        this.validation = validation;
        this.mailService = mailService;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { email } = httpRequest.body;
            const user = await this.loadUserByEmail.loadUser(email);
            if (!user)
                return (0, http_helper_1.badRequest)(new errors_1.UserNotFoundError());
            const emailSend = await this.mailService.sendMail({
                from: 'suporte@praticabr.com',
                to: user.email,
                subject: 'Recuperação de senha',
                html: (0, templates_1.recoverPasswordTemplate)(user.userName, user.email, user.id, user.activateToken, 'PT')
            });
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.SendEmailResetPasswordController = SendEmailResetPasswordController;
