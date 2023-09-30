"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoRowsAffected = void 0;
class NoRowsAffected extends Error {
    constructor(id) {
        super(`No rows affected, id ${id} not found.`);
        this.name = 'NoRowsAffected';
    }
}
exports.NoRowsAffected = NoRowsAffected;
