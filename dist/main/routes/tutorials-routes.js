"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const add_userTutorial_controller_factory_1 = require("../factories/controllers/add-userTutorial/add-userTutorial-controller-factory");
const load_tutorial_controller_factory_1 = require("../factories/controllers/load-tutorials/load-tutorial-controller-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/userTutorial', auth, (0, express_route_adapter_1.adptRoute)((0, add_userTutorial_controller_factory_1.makeAddUserTutorialController)(pool)));
    router.get('/tutorials/:idUser', (0, express_route_adapter_1.adptRoute)((0, load_tutorial_controller_factory_1.makeLoadTutorialController)(pool)));
};
