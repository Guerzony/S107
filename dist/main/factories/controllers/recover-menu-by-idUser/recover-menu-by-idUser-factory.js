"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecoverMenuByIdUserDataController = void 0;
const log_mysql_repository_1 = require("../../../../infra/db/mysql/log/log-mysql-repository");
const log_controller_decorator_1 = require("../../../decorators/log-controller-decorator");
const recover_menu_controller_1 = require("../../../../presentation/controller/recover-menus/recover-menu-controller");
const recover_menu_by_idUser_validation_factory_1 = require("./recover-menu-by-idUser-validation-factory");
const db_recover_load_menu_by_idUser_factory_1 = require("../../usecases/recover-load-menu-by-idUser/db-recover-load-menu-by-idUser-factory");
const db_recover_add_menu_factory_1 = require("../../usecases/recover-add-menu/db-recover-add-menu-factory");
const db_load_userOld_by_email_factory_1 = require("../../usecases/load-userOld-by-email/db-load-userOld-by-email-factory");
const db_load_equipOld_by_idUser_factory_1 = require("../../usecases/load-equipOld-by-idUser/db-load-equipOld-by-idUser-factory");
const db_recover_add_equipment_factory_1 = require("../../usecases/recover-add-equipment/db-recover-add-equipment-factory");
const send_email_adapter_1 = require("../../../../utils/send-email-adapter");
const makeRecoverMenuByIdUserDataController = (pool) => {
    const logMysqlRepository = new log_mysql_repository_1.LogMysqlRepository(pool);
    const loadUserDataController = new recover_menu_controller_1.RecoverMenusController((0, recover_menu_by_idUser_validation_factory_1.makeRecoverAddMenuValidation)(), (0, db_recover_load_menu_by_idUser_factory_1.makeRecoverLoadMenuByIdUser)(), (0, db_recover_add_menu_factory_1.makeRecoverAddMenu)(pool), (0, db_load_userOld_by_email_factory_1.makeDbLoadUserOld)(pool), (0, db_load_equipOld_by_idUser_factory_1.makeDbLoadEquipOld)(), (0, db_recover_add_equipment_factory_1.makeRecoverAddEquipment)(pool), new send_email_adapter_1.MailService());
    return new log_controller_decorator_1.LogControllerDecorator(loadUserDataController, logMysqlRepository);
};
exports.makeRecoverMenuByIdUserDataController = makeRecoverMenuByIdUserDataController;
