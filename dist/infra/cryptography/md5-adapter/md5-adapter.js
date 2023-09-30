"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Md5Adapter = void 0;
const md5_1 = __importDefault(require("md5"));
class Md5Adapter {
    async hash(value) {
        return (0, md5_1.default)(value);
    }
}
exports.Md5Adapter = Md5Adapter;
