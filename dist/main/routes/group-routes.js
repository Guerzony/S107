"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const add_group_controller_factory_1 = require("../factories/controllers/add-group/add-group-controller-factory");
const update_group_controller_factory_1 = require("../factories/controllers/update-group/update-group-controller-factory");
const delete_group_controller_factory_1 = require("../factories/controllers/delete-group/delete-group-controller-factory");
const load_group_factory_1 = require("../factories/controllers/load-group/load-group-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/group', auth, (0, express_route_adapter_1.adptRoute)((0, add_group_controller_factory_1.makeAddGroupController)(pool)));
    router.put('/group/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_group_controller_factory_1.makeUpdateGroupController)(pool)));
    router.delete('/group/:id', auth, (0, express_route_adapter_1.adptRoute)((0, delete_group_controller_factory_1.makeDeleteGroupController)(pool)));
    router.get('/menu/:menuId/group', auth, (0, express_route_adapter_1.adptRoute)((0, load_group_factory_1.makeLoadGroupController)(pool)));
};
