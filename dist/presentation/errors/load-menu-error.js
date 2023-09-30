"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserMenurror = void 0;
class LoadUserMenurror extends Error {
    constructor() {
        super('There is no registered menu');
        this.name = 'LoadUserMenurror';
    }
}
exports.LoadUserMenurror = LoadUserMenurror;
