"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadTutorialController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const load_tutorial_validation_factory_1 = require("./load-tutorial-validation-factory");
const load_tutorials_controller_1 = require("../../../../presentation/controller/load-tutorials/load-tutorials.controller");
const db_load_tutorials_factory_1 = require("../../usecases/load-tutorials/db-load-tutorials-factory");
const makeLoadTutorialController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addUserTutorialController = new load_tutorials_controller_1.LoadTutorialsController((0, db_load_tutorials_factory_1.makeLoadTutorials)(pool), (0, load_tutorial_validation_factory_1.makeLoadTutorialValidation)());
    return new log_controller_decorator_1.LogControllerDecorator(addUserTutorialController, logMysqlRepository);
};
exports.makeLoadTutorialController = makeLoadTutorialController;
