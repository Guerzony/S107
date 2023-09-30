"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRecipeController = void 0;
const add_recipe_controller_1 = require("../../../../presentation/controller/add-recipe/add-recipe-controller");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const db_add_recipe_factory_1 = require("../../usecases/add-recipe/db-add-recipe-factory");
const db_add_recipe_cmax_factory_1 = require("../../usecases/add-recipe-cmax/db-add-recipe-cmax-factory");
const add_recipe_validation_factory_1 = require("./add-recipe-validation-factory");
const add_recipe_cmax_validation_factory_1 = require("./add-recipe-cmax-validation-factory");
const makeAddRecipeController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addRecipeCmaxController = new add_recipe_controller_1.AddRecipeController((0, add_recipe_validation_factory_1.makeAddRecipeValidation)(), (0, add_recipe_cmax_validation_factory_1.makeAddRecipeCmaxValidation)(), (0, db_add_recipe_factory_1.makeDbAddRecipe)(pool), (0, db_add_recipe_cmax_factory_1.makeDbAddRecipeCmax)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addRecipeCmaxController, logMysqlRepository);
};
exports.makeAddRecipeController = makeAddRecipeController;
