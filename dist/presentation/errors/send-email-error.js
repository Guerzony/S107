"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailError = void 0;
class SendEmailError extends Error {
    constructor() {
        super('Error when sending email');
        this.name = 'SendEmailError';
    }
}
exports.SendEmailError = SendEmailError;
