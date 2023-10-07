"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteUserController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const delete_user_controller_1 = require("../../../../presentation/controller/delete-user/delete-user-controller");
const delete_user_validation_factory_1 = require("./delete-user-validation-factory");
const db_delete_user_factory_1 = require("../../usecases/delete-user/db-delete-user-factory");
const makeDeleteUserController = () => {
    const deleteUserController = new delete_user_controller_1.DeleteUserController((0, delete_user_validation_factory_1.makeDeleteUserValidation)(), (0, db_delete_user_factory_1.makeDbDeleteUser)());
    return new log_controller_decorator_1.ControllerDecorator(deleteUserController);
};
exports.makeDeleteUserController = makeDeleteUserController;
