"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConfigsController = void 0;
const update_configs_error_1 = require("../../errors/update-configs-error");
const http_helper_1 = require("../../helpers/http-helper");
class UpdateConfigsController {
    constructor(configsValidation, updateConfigs) {
        this.configsValidation = configsValidation;
        this.updateConfigs = updateConfigs;
    }
    async handle(httpRequest) {
        try {
            const error = this.configsValidation.validate(httpRequest.body.userConfigs);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const updateConfigs = httpRequest.body.userConfigs;
            const configs = await this.updateConfigs.updateConfigs(updateConfigs);
            console.log(configs);
            if (!configs) {
                return (0, http_helper_1.forbidden)(new update_configs_error_1.UpdateConfigsError());
            }
            return (0, http_helper_1.ok)({
                updatedConfigs: configs
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateConfigsController = UpdateConfigsController;
