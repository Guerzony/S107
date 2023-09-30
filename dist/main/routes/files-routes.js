"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { adptMiddleware } from '../adapters/express-middleware-adapter'
// import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const controllers_1 = require("../factories/controllers");
const export_c_max_file_1 = require("../factories/controllers/export-c-max-file");
const export_speed_ovens_legacy_file_1 = require("../factories/controllers/export-speed-ovens-legacy-file");
exports.default = (router, pool) => {
    // const auth = adptMiddleware(makeAuthMiddleware(pool))
    // TODO: Adicionar autenticação na rota
    router.get('/speed-ovens-file/export/:equipmentModel/:menuId', (0, express_route_adapter_1.adptRoute)((0, controllers_1.makeExportSpeedOvensFileControllerFactory)(pool)));
    router.get('/tsi-file/export/:menuId', (0, express_route_adapter_1.adptRoute)((0, controllers_1.makeExportTsiFileControllerFactory)(pool)));
    router.get('/c-max-file/export/:menuId', (0, express_route_adapter_1.adptRoute)((0, export_c_max_file_1.makeExportCMaxFileControllerFactory)(pool)));
    router.get('/forza-file/export/:menuId', (0, express_route_adapter_1.adptRoute)((0, controllers_1.makeExportForzaFileControllerFactory)(pool)));
    router.get('/speed-ovens-legacy/export/:generation/:menuId', (0, express_route_adapter_1.adptRoute)((0, export_speed_ovens_legacy_file_1.makeExportSpeedOvensLegacyFileControllerFactory)(pool)));
};
