"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRecoverAddUser = void 0;
class DbRecoverAddUser {
    constructor(addRecoverUserRepository) {
        this.addRecoverUserRepository = addRecoverUserRepository;
    }
    async createUser(equip, user) {
        for (const equipItem of equip) {
            try {
                const equip = await this.addRecoverUserRepository.addRecoverUser({
                    name: equipItem.name,
                    typeUser: equipItem.type_user,
                    idUser: user.userId,
                    dataUpdate: Boolean(equipItem.data_update),
                    statusData: equipItem.status_data,
                    appUpdate: Boolean(equipItem.app_update),
                    statusApp: equipItem.status_app,
                    serialNumber: equipItem.serial_number,
                    menuId: equipItem.menu_id,
                    sentMenu: equipItem.sent_menu,
                    iokPin: equipItem.IOK_pin,
                    creationDate: new Date().toISOString().slice(0, -1),
                    softwareVersion: equipItem.software_version,
                    hashSw: equipItem.hash_sw,
                    lastUpdate: new Date().toISOString().slice(0, -1),
                    companyId: user.companyId,
                    forcedUpdate: 0,
                    categoryId: 11,
                    powerVersion: equipItem.power_version
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
exports.DbRecoverAddUser = DbRecoverAddUser;
