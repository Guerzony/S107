"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUserTypes = void 0;
class DbAddUserTypes {
    constructor(addUserTypesRepository, addUserTypePermissionTypeRepository) {
        this.addUserTypesRepository = addUserTypesRepository;
        this.addUserTypePermissionTypeRepository = addUserTypePermissionTypeRepository;
    }
    async add(userType) {
        const userTypeResponse = await this.addUserTypesRepository.addUserTypes({
            companyId: userType.companyId,
            userType: userType.userType
        });
        userType.permissionTypeId.forEach((permissionTypeId) => {
            this.addUserTypePermissionTypeRepository.addUserTypesPermissionType({
                permissionTypeId: permissionTypeId,
                userTypeId: userTypeResponse.id,
                companyTypeId: userType.companyTypeId
            });
        });
        return userTypeResponse;
    }
}
exports.DbAddUserTypes = DbAddUserTypes;
