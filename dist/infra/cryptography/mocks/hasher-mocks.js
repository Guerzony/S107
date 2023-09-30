"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockHasher = void 0;
const mockHasher = () => {
    class HasherStub {
        async hash(value) {
            return new Promise(resolve => resolve('value_hashed'));
        }
    }
    return new HasherStub();
};
exports.mockHasher = mockHasher;
