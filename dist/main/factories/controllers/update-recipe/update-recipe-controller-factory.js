"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateRecipeController = void 0;
const Update_recipe_controller_1 = require("../../../../presentation/controller/Update-recipe/Update-recipe-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const Update_recipe_validation_factory_1 = require("./Update-recipe-validation-factory");
const Update_recipe_cmax_validation_factory_1 = require("./Update-recipe-cmax-validation-factory");
const db_update_recipe_factory_1 = require("../../usecases/update-recipe/db-update-recipe-factory");
const db_update_recipe_cmax_factory_1 = require("../../usecases/update-recipe-cmax/db-update-recipe-cmax-factory");
const makeUpdateRecipeController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const updateRecipeController = new Update_recipe_controller_1.UpdateRecipeController((0, Update_recipe_validation_factory_1.makeUpdateRecipeValidation)(), (0, Update_recipe_cmax_validation_factory_1.makeUpdateRecipeCmaxValidation)(), (0, db_update_recipe_factory_1.makeDbUpdateRecipe)(pool), (0, db_update_recipe_cmax_factory_1.makeDbUpdateRecipeCmax)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(updateRecipeController, logMysqlRepository);
};
exports.makeUpdateRecipeController = makeUpdateRecipeController;
