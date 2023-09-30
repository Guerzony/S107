"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockArchiveManagerStub = void 0;
const mocks_1 = require("../../../domain/mocks");
const mockArchiveManagerStub = () => {
    class ArchiveManagerStub {
        async pack(params) {
            return (0, mocks_1.mockExportCMaxFileReturn)();
        }
    }
    return new ArchiveManagerStub();
};
exports.mockArchiveManagerStub = mockArchiveManagerStub;
