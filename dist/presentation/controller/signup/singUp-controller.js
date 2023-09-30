"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const errors_1 = require("../../errors");
const company_already__exists_error_1 = require("../../errors/company-already- exists-error");
const creat_user_error_1 = require("../../errors/creat-user-error");
const templates_1 = require("../../../utils/factors/emailTemplate/templates");
class SignUpController {
    constructor(addUser, addCompany, addConfigs, userValidation, companyValidation, mailService, loadUserByCorporateName, loadUserByEmail) {
        this.addUser = addUser;
        this.addCompany = addCompany;
        this.userValidation = userValidation;
        this.companyValidation = companyValidation;
        this.mailService = mailService;
        this.addConfigs = addConfigs;
        this.loadUserByCorporateName = loadUserByCorporateName;
        this.loadUserByEmail = loadUserByEmail;
    }
    async handle(httpRequest) {
        try {
            const companyError = this.companyValidation.validate(httpRequest.body.company);
            if (companyError) {
                return (0, http_helper_1.badRequest)(companyError);
            }
            const userError = this.userValidation.validate(httpRequest.body.user);
            if (userError) {
                return (0, http_helper_1.badRequest)(userError);
            }
            const { corporateName, companyType } = httpRequest.body.company;
            const userCompany = await this.loadUserByCorporateName.loadUser(corporateName);
            if (userCompany)
                return (0, http_helper_1.forbidden)(new company_already__exists_error_1.CompanyExistsError());
            const { userName, email, phone, password, creationDate, language } = httpRequest.body.user;
            const userEmail = await this.loadUserByEmail.loadUser(email);
            if (userEmail)
                return (0, http_helper_1.forbidden)(new errors_1.EmailInUseError());
            const company = await this.addCompany.add({
                corporateName,
                companyType
            });
            if (!company) {
                return (0, http_helper_1.badRequest)(new creat_user_error_1.CreateUserError());
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
            });
            if (!user) {
                return (0, http_helper_1.badRequest)(new creat_user_error_1.CreateUserError());
            }
            const configs = await this.addConfigs.add({
                userId: user.id,
                language: language,
                tempUnit: '°C',
                weightUnit: 'Gramas',
                theme: 'Light'
            });
            this.mailService.sendMail({
                from: 'suporte@praticabr.com',
                to: user.email,
                subject: 'Ativação de conta',
                html: (0, templates_1.admAccountActivationTemplate)(user.userName, user.email, user.id, user.activateToken, 'PT')
            });
            //   if (!emailSend) {
            //     return forbidden(new SendEmailError())
            //   }
            return (0, http_helper_1.ok)({
                user: user,
                company: company,
                configs: configs
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.SignUpController = SignUpController;
