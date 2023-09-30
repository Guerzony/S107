"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRecuseUserController = void 0;
const templates_1 = require("../../../utils/factors/emailTemplate/templates");
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteRecuseUserController {
    constructor(paramsValidation, dbDeleteUser, mailService) {
        this.paramsValidation = paramsValidation;
        this.dbDeleteUser = dbDeleteUser;
        this.mailService = mailService;
    }
    async handle(httpRequest) {
        try {
            const { id, name, companyName, email } = httpRequest.params;
            const validationError = this.paramsValidation.validate(httpRequest.params);
            if (validationError)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const deleteIsOk = await this.dbDeleteUser.deleteUser(id);
            if (!deleteIsOk)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(id));
            const emailSend = await this.mailService.sendMail({
                from: 'suporte@praticabr.com',
                to: email,
                subject: 'Ativação de conta',
                html: (0, templates_1.userRecuserTemplate)(name, companyName, 'PT')
            });
            // if (!emailSend) {
            //  return forbidden(new SendEmailError())
            //}
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new errors_1.ServerError(error.stack));
        }
    }
}
exports.DeleteRecuseUserController = DeleteRecuseUserController;
