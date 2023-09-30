"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const load_permissionTypes_by_companyTypeId_factory_1 = require("../factories/controllers/load-permissionTypes-by-companyTypeId/load-permissionTypes-by-companyTypeId-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.get('/permissionTypes/companyTypeId/:companyTypeId/userTypeId/:userTypeId', (0, express_route_adapter_1.adptRoute)((0, load_permissionTypes_by_companyTypeId_factory_1.makeLoadPermissionTypesByCompanyIdController)(pool)));
};
