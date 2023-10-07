"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByIdController = void 0;
const load_user_by_id_controller_1 = require("../../../../presentation/controller/load-user-by-id/load-user-by-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_user_by_id_1 = require("../../usecases/load-user/db-load-user-by-id");
const load_user_by_id_validation_factory_1 = require("./load-user-by-id-validation-factory");
const makeLoadUserByIdController = () => {
    const loadUserByIdController = new load_user_by_id_controller_1.LoadUserByIdController((0, db_load_user_by_id_1.makeDbLoadUserById)(), (0, load_user_by_id_validation_factory_1.makeLoadUserByIdValidation)());
    return new log_controller_decorator_1.ControllerDecorator(loadUserByIdController);
};
exports.makeLoadUserByIdController = makeLoadUserByIdController;
