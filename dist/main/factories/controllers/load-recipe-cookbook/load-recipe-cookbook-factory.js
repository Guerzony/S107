"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipeCookbookController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_recipe_cookbook_validation_factory_1 = require("./load-recipe-cookbook-validation-factory");
const load_recipe_cookbook_controller_1 = require("../../../../presentation/controller/load-cookbook-by-company-id/load-recipe-cookbook-controller");
const db_load_recipe_cookbook_factory_1 = require("../../usecases/load-recipe-cookbook/db-load-recipe-cookbook-factory");
const makeLoadRecipeCookbookController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadRecipeCookbookController = new load_recipe_cookbook_controller_1.LoadRecipeCookbookController((0, load_recipe_cookbook_validation_factory_1.makeLoadRecipeCookbookValidation)(), (0, db_load_recipe_cookbook_factory_1.makeLoadRecipeCookbook)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadRecipeCookbookController, logMysqlRepository);
};
exports.makeLoadRecipeCookbookController = makeLoadRecipeCookbookController;
