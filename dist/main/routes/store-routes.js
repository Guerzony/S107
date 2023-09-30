"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const add_store_controller_factory_1 = require("../factories/controllers/add-store/add-store-controller-factory");
const delete_store_controller_factory_1 = require("../factories/controllers/delete-store/delete-store-controller-factory");
const load_store_by_id_factory_1 = require("../factories/controllers/load-store-by-id/load-store-by-id-factory");
const load_stores_by_company_id_factory_1 = require("../factories/controllers/load-stores-by-company-id/load-stores-by-company-id-factory");
const update_store_controller_factory_1 = require("../factories/controllers/update-stores/update-store-controller-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/store', auth, (0, express_route_adapter_1.adptRoute)((0, add_store_controller_factory_1.makeAddStoreController)(pool)));
    router.delete('/store/:id', auth, (0, express_route_adapter_1.adptRoute)((0, delete_store_controller_factory_1.makeDeleteStoreController)(pool)));
    router.get('/store/:id', auth, (0, express_route_adapter_1.adptRoute)((0, load_store_by_id_factory_1.makeLoadStoreByIdController)(pool)));
    router.get('/user/:userId/privilege/:userPrivilegeUser/company/:companyId/stores', auth, (0, express_route_adapter_1.adptRoute)((0, load_stores_by_company_id_factory_1.makeLoadStoresByCompanyIdController)(pool)));
    router.put('/store/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_store_controller_factory_1.makeUpdateStoreController)(pool)));
};
