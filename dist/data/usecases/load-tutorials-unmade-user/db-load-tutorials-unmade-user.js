"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUnmadeTutorialsByUser = void 0;
class DbLoadUnmadeTutorialsByUser {
    constructor(repository) {
        this.repository = repository;
    }
    async loadTutorials(idUser) {
        return this.repository.loadUnmadeTutorialsByUser(idUser);
    }
}
exports.DbLoadUnmadeTutorialsByUser = DbLoadUnmadeTutorialsByUser;
