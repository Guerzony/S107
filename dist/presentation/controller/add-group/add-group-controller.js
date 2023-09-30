"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGroupController = void 0;
const create_group_error_1 = require("../../errors/create-group-error");
const group_params_error_1 = require("../../errors/group-params-error");
const http_helper_1 = require("../../helpers/http-helper");
class AddGroupController {
    constructor(groupValidation, addGroup) {
        this.groupValidation = groupValidation;
        this.addGroup = addGroup;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.body.group)
                return (0, http_helper_1.badRequest)(new group_params_error_1.GroupParamsError());
            const groupRequest = httpRequest.body.group;
            const error = this.groupValidation.validate(groupRequest);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const group = await this.addGroup.addGroup(groupRequest);
            return (0, http_helper_1.created)(group);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new create_group_error_1.CreateGroupError());
        }
    }
}
exports.AddGroupController = AddGroupController;
