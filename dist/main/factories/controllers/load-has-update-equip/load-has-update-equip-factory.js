"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHasUpdateUserController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_has_update_equip_controller_1 = require("../../../../presentation/controller/load-has-update-equip/load-has-update-equip-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_id_1 = require("../../usecases/load-equip-by-id/db-load-equip-by-id");
const load_has_update_equip_validation_factory_1 = require("./load-has-update-equip-validation-factory");
const makeLoadHasUpdateUserController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadHasUpdateUserController = new load_has_update_equip_controller_1.LoadHasUpdateUserController((0, db_load_equip_by_id_1.makeDbLoadUserById)(pool), (0, load_has_update_equip_validation_factory_1.makeLoadHasUpdateUserValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadHasUpdateUserController, logMysqlRepository);
};
exports.makeLoadHasUpdateUserController = makeLoadHasUpdateUserController;
