"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupController = void 0;
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const http_helper_1 = require("../../helpers/http-helper");
class UpdateGroupController {
    constructor(groupValidation, updateGroup) {
        this.groupValidation = groupValidation;
        this.updateGroup = updateGroup;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.group)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('group'));
            if (!httpRequest.params.id)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            const error = this.groupValidation.validate(httpRequest.body.group);
            if (error)
                return (0, http_helper_1.badRequest)(error);
            const groupRequest = httpRequest.body.group;
            const group = await this.updateGroup.updateGroup(groupRequest);
            if (!group)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(httpRequest.params.id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.UpdateGroupController = UpdateGroupController;
