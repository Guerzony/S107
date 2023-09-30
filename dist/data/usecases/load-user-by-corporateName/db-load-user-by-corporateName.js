"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByCorporateName = void 0;
class DbLoadUserByCorporateName {
    constructor(loadUserByCorporateNameRepository) {
        this.loadUserByCorporateNameRepository = loadUserByCorporateNameRepository;
    }
    async loadUser(corporateName) {
        return this.loadUserByCorporateNameRepository.loadUserByCorporateName(corporateName);
    }
}
exports.DbLoadUserByCorporateName = DbLoadUserByCorporateName;
