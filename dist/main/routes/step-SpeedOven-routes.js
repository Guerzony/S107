"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const add_step_SpeedOven_controller_factory_1 = require("../factories/controllers/add-step-SpeedOven/add-step-SpeedOven-controller-factory");
const delete_step_SpeedOven_controller_factory_1 = require("../factories/controllers/delete-step-SpeedOven/delete-step-SpeedOven-controller-factory");
const load_step_SpeedOven_by_id_factory_1 = require("../factories/controllers/load-step-SpeedOven-by-id/load-step-SpeedOven-by-id-factory");
const load_steps_SpeedOven_by_recipe_id_factory_1 = require("../factories/controllers/load-steps-SpeedOven-by-recipe-id/load-steps-SpeedOven-by-recipe-id-factory");
const update_step_SpeedOven_controller_factory_1 = require("../factories/controllers/update-step-SpeedOven/update-step-SpeedOven-controller-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.post('/stepSpeedOven', auth, (0, express_route_adapter_1.adptRoute)((0, add_step_SpeedOven_controller_factory_1.makeAddStepSpeedOvenController)(pool)));
    router.delete('/stepSpeedOven/:id', auth, (0, express_route_adapter_1.adptRoute)((0, delete_step_SpeedOven_controller_factory_1.makeDeleteStepSpeedOvenController)(pool)));
    router.get('/stepSpeedOven/:id', auth, (0, express_route_adapter_1.adptRoute)((0, load_step_SpeedOven_by_id_factory_1.makeLoadStepSpeedOvenByIdController)(pool)));
    router.get('/:stepFrom/recipe/:recipeId/stepsSpeedOven', auth, (0, express_route_adapter_1.adptRoute)((0, load_steps_SpeedOven_by_recipe_id_factory_1.makeLoadStepsSpeedOvenByRecipeIdController)(pool)));
    router.put('/stepSpeedOven/:id', auth, (0, express_route_adapter_1.adptRoute)((0, update_step_SpeedOven_controller_factory_1.makeUpdateStepSpeedOvenController)(pool)));
};
