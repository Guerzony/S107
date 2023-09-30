"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const add_step_CombiOvenCMAX_controller_factory_1 = require("../factories/controllers/add-step-CombiOvenCMAX/add-step-CombiOvenCMAX-controller-factory");
const delete_step_CombiOvenCMAX_controller_factory_1 = require("../factories/controllers/delete-step-CombiOvenCMAX/delete-step-CombiOvenCMAX-controller-factory");
const load_step_CombiOvenCMAX_factory_1 = require("../factories/controllers/load-step-CombiOvenCMAX/load-step-CombiOvenCMAX-factory");
const update_step_CombiOvenCMAX_controller_factory_1 = require("../factories/controllers/update-step-CombiOvenCMAX/update-step-CombiOvenCMAX-controller-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/stepCombiOvenCMAX', auth, (0, express_route_adapter_1.adptRoute)((0, add_step_CombiOvenCMAX_controller_factory_1.makeAddStepCombiOvenCMAXController)(pool)));
    router.delete('/stepCombiOvenCMAX/:id', auth, (0, express_route_adapter_1.adptRoute)((0, delete_step_CombiOvenCMAX_controller_factory_1.makeDeleteStepCombiOvenCMAXController)(pool)));
    router.get('/:stepFrom/recipe/:recipeId/stepsCombiOvenCMAX', auth, (0, express_route_adapter_1.adptRoute)((0, load_step_CombiOvenCMAX_factory_1.makeLoadStepCombiOvenCMAXController)(pool)));
    router.put('/stepCombiOvenCMAX/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_step_CombiOvenCMAX_controller_factory_1.makeUpdateStepCombiOvenCMAXController)(pool)));
};
