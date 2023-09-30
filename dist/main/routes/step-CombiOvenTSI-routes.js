"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const add_step_CombiOvenTSI_controller_factory_1 = require("../factories/controllers/add-step-CombiOvenTSI/add-step-CombiOvenTSI-controller-factory");
const delete_step_CombiOvenTSI_controller_factory_1 = require("../factories/controllers/delete-step-CombiOvenTSI/delete-step-CombiOvenTSI-controller-factory");
const load_step_CombiOvenTSI_factory_1 = require("../factories/controllers/load-step-CombiOvenTSI/load-step-CombiOvenTSI-factory");
const update_step_CombiOvenTSI_controller_factory_1 = require("../factories/controllers/update-step-CombiOvenTSI/update-step-CombiOvenTSI-controller-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/stepCombiOvenTSI', auth, (0, express_route_adapter_1.adptRoute)((0, add_step_CombiOvenTSI_controller_factory_1.makeAddStepCombiOvenTSIController)(pool)));
    router.delete('/stepCombiOvenTSI/:id', auth, (0, express_route_adapter_1.adptRoute)((0, delete_step_CombiOvenTSI_controller_factory_1.makeDeleteStepCombiOvenTSIController)(pool)));
    router.get('/:stepFrom/recipe/:recipeId/stepsCombiOvenTSI', auth, (0, express_route_adapter_1.adptRoute)((0, load_step_CombiOvenTSI_factory_1.makeLoadStepCombiOvenTSIController)(pool)));
    router.put('/stepCombiOvenTSI/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_step_CombiOvenTSI_controller_factory_1.makeUpdateStepCombiOvenTSIController)(pool)));
};
