"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const add_menu_controller_factory_1 = require("../factories/controllers/add-menu/add-menu-controller-factory");
const load_menu_factory_1 = require("../factories/controllers/load-menu/load-menu-factory");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const load_company_menu_factory_1 = require("../factories/controllers/load-company-menu/load-company-menu-factory");
const update_menu_controller_factory_1 = require("../factories/controllers/update-menu/update-menu-controller-factory");
const delete_menu_controller_factory_1 = require("../factories/controllers/delete-menu/delete-menu-controller-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/menu', auth, (0, express_route_adapter_1.adptRoute)((0, add_menu_controller_factory_1.makeAddMenuController)(pool)));
    router.get('/menu/:id', auth, (0, express_route_adapter_1.adptRoute)((0, load_menu_factory_1.makeLoadMenuController)(pool)));
    router.get('/company/:companyId/menu', auth, (0, express_route_adapter_1.adptRoute)((0, load_company_menu_factory_1.makeLoadCompanyMenuController)(pool)));
    router.put('/menu/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_menu_controller_factory_1.makeUpdateMenuController)(pool)));
    router.delete('/menu/:id', auth, (0, express_route_adapter_1.adptRoute)((0, delete_menu_controller_factory_1.makeDeleteMenuController)(pool)));
};
