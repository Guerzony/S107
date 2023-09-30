"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupRecoverAccountController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const company_already__exists_error_1 = require("../../errors/company-already- exists-error");
const templates_1 = require("../../../utils/factors/emailTemplate/templates");
class SignupRecoverAccountController {
    constructor(addUser, addCompany, addConfigs, userValidation, companyValidation, mailService, loadUserByCorporateName) {
        this.addUser = addUser;
        this.addCompany = addCompany;
        this.userValidation = userValidation;
        this.companyValidation = companyValidation;
        this.mailService = mailService;
        this.addConfigs = addConfigs;
        this.loadUserByCorporateName = loadUserByCorporateName;
    }
    async handle(httpRequest) {
        try {
            let companyReturn = null;
            const company = httpRequest.body.company;
            const userAdm = await this.loadUserByCorporateName.loadUser(company.corporateName);
            if (!userAdm) {
                const companyError = this.companyValidation.validate(company);
                if (companyError) {
                    return (0, http_helper_1.badRequest)(companyError);
                }
                companyReturn = await this.addCompany.add(company);
                if (!companyReturn) {
                    return (0, http_helper_1.forbidden)(new company_already__exists_error_1.CompanyExistsError());
                }
            }
            else {
                companyReturn = {
                    id: userAdm.companyId,
                    corporateName: company.corporateName,
                    companyType: company.companyType
                };
            }
            const userError = this.userValidation.validate(httpRequest.body.user);
            if (userError) {
                return (0, http_helper_1.badRequest)(userError);
            }
            const { userName, email, phone, password, creationDate, language } = httpRequest.body.user;
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
            });
            if (!userReturn) {
                return (0, http_helper_1.forbidden)(new errors_1.EmailInUseError());
            }
            const configsReturn = await this.addConfigs.add({
                userId: userReturn.id,
                language: language,
                tempUnit: '°C',
                weightUnit: 'Gramas',
                theme: 'Light'
            });
            const emailSend = await this.mailService.sendMail(userAdm
                ? {
                    from: 'suporte@praticabr.com',
                    to: userAdm.email,
                    subject: 'Ativação de conta',
                    html: (0, templates_1.userAcceptanceByAdmTemplate)(userAdm.userName, userReturn.userName, company.corporateName, userReturn.email, userReturn.id, userReturn.companyId, userReturn.activateToken, 'PT')
                }
                : {
                    from: 'suporte@praticabr.com',
                    to: userReturn.email,
                    subject: 'Ativação de conta',
                    html: (0, templates_1.admRecoverAccountTemplate)(userReturn.userName, company.corporateName, userReturn.email, userReturn.id, userReturn.companyId, userReturn.activateToken, 'PT')
                });
            //if (!emailSend) {
            //  return forbidden(new SendEmailError())
            //}
            return (0, http_helper_1.ok)({
                user: userReturn,
                company: companyReturn,
                configs: configsReturn
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.SignupRecoverAccountController = SignupRecoverAccountController;
