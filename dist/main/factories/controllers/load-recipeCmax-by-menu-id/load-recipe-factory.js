"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipeCmaxController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const load_recipeCmax_by_menu_id_controller_1 = require("../../../../presentation/controller/load-recipeCmax-by-menu-id/load-recipeCmax-by-menu-id-controller");
const db_load_recipe_cmax_factory_1 = require("../../usecases/load-recipe-cmax/db-load-recipe-cmax-factory");
const load_recipe_validation_factory_1 = require("./load-recipe-validation-factory");
const makeLoadRecipeCmaxController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadRecipeController = new load_recipeCmax_by_menu_id_controller_1.LoadRecipeCmaxController((0, load_recipe_validation_factory_1.makeLoadRecipeCmaxValidation)(), (0, db_load_recipe_cmax_factory_1.makeLoadRecipeCMAX)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(loadRecipeController, logMysqlRepository);
};
exports.makeLoadRecipeCmaxController = makeLoadRecipeCmaxController;
