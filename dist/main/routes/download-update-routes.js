"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_middleware_adapter_1 = require("../adapters/express-middleware-adapter");
const auth_middleware_factory_1 = require("../factories/middlewares/auth-middleware-factory");
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const download_update_factory_1 = require("../factories/controllers/download-update/download-update-factory");
const update_software_factory_1 = require("../factories/controllers/update-software/update-software-factory");
exports.default = (router, pool) => {
    const auth = (0, express_middleware_adapter_1.adptMiddleware)((0, auth_middleware_factory_1.makeAuthMiddleware)(pool));
    router.get('/download/updateFile/:ovenModel', auth, (0, express_route_adapter_1.adptRoute)((0, download_update_factory_1.makeDownloadUpdateController)(pool)));
    router.get('download/updateFile/:ovenModel/:iokPin', auth, (0, express_route_adapter_1.adptRoute)((0, update_software_factory_1.makeUpdateSoftwareController)(pool)));
};
