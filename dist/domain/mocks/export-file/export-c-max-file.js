"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockExportCMaxFileReturn = void 0;
const path_1 = __importDefault(require("path"));
const mockExportCMaxFileReturn = () => {
    const folderPath = path_1.default.join(__dirname, '../../../../public/export/anyFoder');
    const filePath = path_1.default.join(folderPath, 'anyFile.zip');
    return { filePath, folderPath };
};
exports.mockExportCMaxFileReturn = mockExportCMaxFileReturn;
