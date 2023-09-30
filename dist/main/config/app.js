"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
const env_1 = __importDefault(require("./env"));
const config_swagger_1 = __importDefault(require("./config-swagger"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
exports.app = app;
const connection = mysql_1.default.createPool(env_1.default.db);
exports.connection = connection;
(0, config_swagger_1.default)(app);
(0, middlewares_1.default)(app);
(0, routes_1.default)(app, connection);
