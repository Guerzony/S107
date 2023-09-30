"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCookbookController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const delete_cookbook_validation_factory_1 = require("./delete-cookbook-validation-factory");
const delete_cookbook_controller_1 = require("../../../../presentation/controller/delete-cookbook/delete-cookbook-controller");
const db_delete_cookbook_factory_1 = require("../../usecases/delete-cookbook/db-delete-cookbook-factory");
const makeDeleteCookbookController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const deleteCookbookController = new delete_cookbook_controller_1.DeleteCookbookController((0, delete_cookbook_validation_factory_1.makeDeleteCookbookValidation)(), (0, db_delete_cookbook_factory_1.makeDeleteCookbook)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(deleteCookbookController, logMysqlRepository);
};
exports.makeDeleteCookbookController = makeDeleteCookbookController;
