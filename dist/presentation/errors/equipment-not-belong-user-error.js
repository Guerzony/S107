"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotBelongUser = void 0;
class UserNotBelongUser extends Error {
    constructor() {
        super('User does not belong to the user');
        this.name = 'UserNotBelongUser';
    }
}
exports.UserNotBelongUser = UserNotBelongUser;
