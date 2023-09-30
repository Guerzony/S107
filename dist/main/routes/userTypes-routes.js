"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const load_userTypes_by_companyId_factory_1 = require("../factories/controllers/load-userTypes-by-companyId/load-userTypes-by-companyId-factory");
const add_userTypes_factory_1 = require("../factories/controllers/add-userTypes/add-userTypes-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.get('/userTypes/companyId/:companyId', auth, (0, express_route_adapter_1.adptRoute)((0, load_userTypes_by_companyId_factory_1.makeLoadUserTypesByCompanyIdController)(pool)));
    router.post('/userTypes', auth, (0, express_route_adapter_1.adptRoute)((0, add_userTypes_factory_1.makeAddUserTypesController)(pool)));
};
