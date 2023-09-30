"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockValidationStub = void 0;
const mockValidationStub = () => {
    class ValidationStub {
        validate(input) {
            return null;
        }
    }
    return new ValidationStub();
};
exports.mockValidationStub = mockValidationStub;
