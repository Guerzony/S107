"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateUserController = void 0;
const update_user_body_validation_factory_1 = require("./update-user-body-validation-factory");
const update_user_params_validation_factory_1 = require("./update-user-params-validation-factory");
const db_update_user_factory_1 = require("../../usecases/update-user/db-update-user-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const update_user_controller_1 = require("../../../../presentation/controller/update-user/update-user-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_pin_factory_1 = require("../../usecases/load-equip-by-pin/db-load-equip-by-pin-factory");
const makeUpdateUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateUserController = new update_user_controller_1.UpdateUserController((0, update_user_params_validation_factory_1.makeUpdateUserParamsValidation)(), (0, update_user_body_validation_factory_1.makeUpdateUserBodyValidation)(), (0, db_update_user_factory_1.makeDbUpdateUser)(pool), (0, db_load_equip_by_pin_factory_1.makeLoadUserByPin)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateUserController, logMysqlRepository);
};
exports.makeUpdateUserController = makeUpdateUserController;
