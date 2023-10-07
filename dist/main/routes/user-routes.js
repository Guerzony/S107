"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const load_user_by_id_factory_1 = require("../factories/controllers/load-user-by-id/load-user-by-id-factory");
const add_user_controller_factory_1 = require("../factories/controllers/add-user/add-user-controller-factory");
const update_user_controller_factory_1 = require("../factories/controllers/update-user/update-user-controller-factory");
const delete_user_controller_factory_1 = require("../factories/controllers/delete-user/delete-user-controller-factory");
exports.default = (router) => {
    router.get('/user/:id', (0, express_route_adapter_1.adptRoute)((0, load_user_by_id_factory_1.makeLoadUserByIdController)()));
    router.post('/user', (0, express_route_adapter_1.adptRoute)((0, add_user_controller_factory_1.makeAddUserController)()));
    router.put('/user/:id', (0, express_route_adapter_1.adptRoute)((0, update_user_controller_factory_1.makeUpdateUserController)()));
    router.delete('/user/:id', (0, express_route_adapter_1.adptRoute)((0, delete_user_controller_factory_1.makeDeleteUserController)()));
};
