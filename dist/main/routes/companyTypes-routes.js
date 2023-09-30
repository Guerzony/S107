"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const load_companyTypes_factory_1 = require("../factories/controllers/load-companyTypes/load-companyTypes-factory");
exports.default = (router, pool) => {
    router.get('/companyTypes', (0, express_route_adapter_1.adptRoute)((0, load_companyTypes_factory_1.makeLoadCompanyTypesController)(pool)));
};
