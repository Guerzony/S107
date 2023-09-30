"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUserTutorialController = void 0;
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const add_userTutorial_validation_factory_1 = require("./add-userTutorial-validation-factory");
const add_user_tutorial_controller_1 = require("../../../../presentation/controller/add-user-tutorial/add-user-tutorial-controller");
const db_add_userTutorial_factory_1 = require("../../usecases/add-userTutorial/db-add-userTutorial-factory");
const makeAddUserTutorialController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const addUserTutorialController = new add_user_tutorial_controller_1.AddUserTutorialController((0, add_userTutorial_validation_factory_1.makeAddUserTutorialValidation)(), (0, db_add_userTutorial_factory_1.makeDbAddUserTutorial)(pool));
    return new log_controller_decorator_1.LogControllerDecorator(addUserTutorialController, logMysqlRepository);
};
exports.makeAddUserTutorialController = makeAddUserTutorialController;
