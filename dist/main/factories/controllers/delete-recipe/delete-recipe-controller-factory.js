"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteRecipeController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const delete_recipe_validation_factory_1 = require("./delete-recipe-validation-factory");
const delete_recipe_controller_1 = require("../../../../presentation/controller/delete-recipe/delete-recipe-controller");
const db_delete_recipe_factory_1 = require("../../usecases/delete-recipe/db-delete-recipe-factory");
const makeDeleteRecipeController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const recipeController = new delete_recipe_controller_1.DeleteRecipeController((0, delete_recipe_validation_factory_1.makeDeleteRecipeValidation)(), (0, db_delete_recipe_factory_1.makeDbDeleteRecipe)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(recipeController, logMysqlRepository);
};
exports.makeDeleteRecipeController = makeDeleteRecipeController;
