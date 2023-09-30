"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipeController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_recipe_by_group_id_controller_1 = require("../../../../presentation/controller/load-recipe-by-group-id/load-recipe-by-group-id-controller");
const db_load_recipe_factory_1 = require("../../usecases/load-recipe/db-load-recipe-factory");
const load_recipe_validation_factory_1 = require("./load-recipe-validation-factory");
const makeLoadRecipeController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadRecipeController = new load_recipe_by_group_id_controller_1.LoadRecipeController((0, load_recipe_validation_factory_1.makeLoadRecipeValidation)(), (0, db_load_recipe_factory_1.makeLoadRecipe)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadRecipeController, logMysqlRepository);
};
exports.makeLoadRecipeController = makeLoadRecipeController;
