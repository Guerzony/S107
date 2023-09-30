"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUserTutorials = void 0;
class DbAddUserTutorials {
    constructor(repository) {
        this.repository = repository;
    }
    addUserTutorials(userRelation) {
        return this.repository.addUserTutorials(userRelation);
    }
}
exports.DbAddUserTutorials = DbAddUserTutorials;
