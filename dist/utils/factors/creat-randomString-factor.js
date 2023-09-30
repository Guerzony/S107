"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeRandom = void 0;
class CodeRandom {
    async codeRandom() {
        const chars = '123456789ABCDEFGHJKMNPQRSTUVWXTZabcdefghkmnpqrstuvwxyz';
        const stringLength = 8 - 2;
        let randomstring = '';
        for (let i = 0; i < stringLength; i++) {
            const rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    }
}
exports.CodeRandom = CodeRandom;
