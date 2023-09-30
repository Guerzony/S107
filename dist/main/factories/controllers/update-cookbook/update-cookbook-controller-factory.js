"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateCookbookController = void 0;
const update_cookbook_body_validation_factory_1 = require("./update-cookbook-body-validation-factory");
const update_cookbook_params_validation_factory_1 = require("./update-cookbook-params-validation-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const update_cookbook_controller_1 = require("../../../../presentation/controller/update-cookbook/update-cookbook-controller");
const db_update_cookbook_factory_1 = require("../../usecases/update-cookbook/db-update-cookbook-factory");
const makeUpdateCookbookController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateCookbookController = new update_cookbook_controller_1.UpdateCookbookController((0, update_cookbook_params_validation_factory_1.makeUpdateCookbookParamsValidation)(), (0, update_cookbook_body_validation_factory_1.makeUpdateCookbookBodyValidation)(), (0, db_update_cookbook_factory_1.makeDbUpdateCookbook)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateCookbookController, logMysqlRepository);
};
exports.makeUpdateCookbookController = makeUpdateCookbookController;
