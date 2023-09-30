"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGroupController = void 0;
const errors_1 = require("../../errors");
const no_rows_affected_error_1 = require("../../errors/no-rows-affected-error");
const http_helper_1 = require("../../helpers/http-helper");
class DeleteGroupController {
    constructor(groupValidation, deleteGroup) {
        this.groupValidation = groupValidation;
        this.deleteGroup = deleteGroup;
    }
    async handle(httpRequest) {
        try {
            const { id } = httpRequest.params;
            const error = this.groupValidation.validate(httpRequest.params);
            if (error)
                return (0, http_helper_1.badRequest)(new errors_1.MissingParamError('id'));
            if (typeof (id) === 'undefined')
                return (0, http_helper_1.badRequest)(new errors_1.InvalidParamError('id'));
            const deleteIsOk = await this.deleteGroup.deleteGroup(id);
            if (!deleteIsOk)
                return (0, http_helper_1.badRequest)(new no_rows_affected_error_1.NoRowsAffected(id));
            return (0, http_helper_1.ok)({});
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.DeleteGroupController = DeleteGroupController;
