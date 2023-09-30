"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadSpeedOvensLegacyMenuFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const mysql_1 = require("../../../../infra/db/mysql");
const makeDbLoadSpeedOvensLegacyMenuFactory = (pool) => {
    const repository = new mysql_1.MenuMySqlRepository(pool);
    return new usecases_1.DbLoadSpeedOvensLegacyMenu(repository);
};
exports.makeDbLoadSpeedOvensLegacyMenuFactory = makeDbLoadSpeedOvensLegacyMenuFactory;
