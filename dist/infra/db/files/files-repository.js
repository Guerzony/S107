"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesRepositoryUser = exports.FilesRepository = void 0;
const path_1 = __importDefault(require("path"));
class FilesRepository {
    async downloadUpdate(ovenModel) {
        const filePath = path_1.default.resolve(__dirname, '../../../../public/update/');
        switch (ovenModel) {
            case 'COPA, ROCKET, COPA SM':
                return path_1.default.resolve(filePath, 'PraticaUi.tar');
            case 'FIT, FIT ST':
                return path_1.default.resolve(filePath, 'FIT.tar');
            case 'FORZA':
                return path_1.default.resolve(filePath, 'FORZA.tar');
            case 'TSI':
                return path_1.default.resolve(filePath, 'Package.tar');
            default:
                return '';
        }
    }
}
exports.FilesRepository = FilesRepository;
class FilesRepositoryUser {
    async updateSoftware(ovenModel, iokPin) {
        const filePath = path_1.default.resolve(__dirname, '../../../../public/update/');
        switch (ovenModel) {
            case 'COPA, ROCKET, COPA SM':
                return path_1.default.resolve(filePath, 'PraticaUi.tar');
            case 'FIT, FIT ST':
                return path_1.default.resolve(filePath, 'FIT.tar');
            case 'FORZA':
                return path_1.default.resolve(filePath, 'FORZA.tar');
            case 'TSI':
                return path_1.default.resolve(filePath, 'Package.tar');
            default:
                return '';
        }
    }
}
exports.FilesRepositoryUser = FilesRepositoryUser;
