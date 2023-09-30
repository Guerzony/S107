"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCookbookController = void 0;
const add_cookbook_body_validation_factory_1 = require("./add-cookbook-body-validation-factory");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const add_cookbook_controller_1 = require("../../../../presentation/controller/add-cookbook/add-cookbook-controller");
const db_add_cookbook_factory_1 = require("../../usecases/add-cookbook/db-add-cookbook-factory");
const makeAddCookbookController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addCookbookController = new add_cookbook_controller_1.AddCookbookController((0, add_cookbook_body_validation_factory_1.makeAddCookbookBodyValidation)(), (0, db_add_cookbook_factory_1.makeDbAddCookbook)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addCookbookController, logMysqlRepository);
};
exports.makeAddCookbookController = makeAddCookbookController;
