"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const load_recipe_cookbook_factory_1 = require("../factories/controllers/load-recipe-cookbook/load-recipe-cookbook-factory");
const update_cookbook_controller_factory_1 = require("../factories/controllers/update-cookbook/update-cookbook-controller-factory");
const add_cookbook_controller_factory_1 = require("../factories/controllers/add-cookbook/add-cookbook-controller-factory");
const delete_cookbook_factory_1 = require("../factories/controllers/delete-cookbook/delete-cookbook-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/cookbook', auth, (0, express_route_adapter_1.adptRoute)((0, add_cookbook_controller_factory_1.makeAddCookbookController)(pool)));
    router.put('/cookbook/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_cookbook_controller_factory_1.makeUpdateCookbookController)(pool)));
    router.delete('/cookbook/array', auth, (0, express_route_adapter_1.adptRoute)((0, delete_cookbook_factory_1.makeDeleteCookbookController)(pool)));
    router.get('/company/:id/cookbook', auth, (0, express_route_adapter_1.adptRoute)((0, load_recipe_cookbook_factory_1.makeLoadRecipeCookbookController)(pool)));
};
