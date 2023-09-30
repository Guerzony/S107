"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserController = void 0;
const edit_user_data_error_1 = require("../../errors/edit-user-data-error");
const http_helper_1 = require("../../helpers/http-helper");
class EditUserController {
    constructor(userDataValidation, editUserData, editUserBelongStoreData) {
        this.userDataValidation = userDataValidation;
        this.editUserData = editUserData;
        this.editUserBelongStoreData = editUserBelongStoreData;
    }
    async handle(httpRequest) {
        try {
            const error = this.userDataValidation.validate(httpRequest.body.user);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const userEdit = httpRequest.body.user;
            const user = await this.editUserData.editUserData(userEdit);
            if (!user) {
                return (0, http_helper_1.forbidden)(new edit_user_data_error_1.EditUserDataError());
            }
            const storeId = httpRequest.body.storeId;
            if (storeId) {
                await this.editUserBelongStoreData.editUserBelongStoreData(userEdit.id, storeId);
            }
            return (0, http_helper_1.ok)({
                editedUserData: user
            });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.EditUserController = EditUserController;
