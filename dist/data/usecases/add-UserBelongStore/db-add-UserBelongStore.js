"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUserBelongStore = void 0;
class DbAddUserBelongStore {
    constructor(repository) {
        this.repository = repository;
    }
    addUserBelongStore(userRelation) {
        return this.repository.addUserBelongStore(userRelation);
    }
}
exports.DbAddUserBelongStore = DbAddUserBelongStore;
