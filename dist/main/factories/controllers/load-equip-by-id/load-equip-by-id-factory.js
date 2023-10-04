"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByIdController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_equip_by_id_controller_1 = require("../../../../presentation/controller/load-equip-by-id/load-equip-by-id-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const db_load_equip_by_id_1 = require("../../usecases/load-equip-by-id/db-load-equip-by-id");
const load_equip_by_id_validation_factory_1 = require("./load-equip-by-id-validation-factory");
const makeLoadUserByIdController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserByIdController = new load_equip_by_id_controller_1.LoadUserByIdController((0, db_load_equip_by_id_1.makeDbLoadUserById)(pool), (0, load_equip_by_id_validation_factory_1.makeLoadUserByIdValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(loadUserByIdController, logMysqlRepository);
};
exports.makeLoadUserByIdController = makeLoadUserByIdController;
