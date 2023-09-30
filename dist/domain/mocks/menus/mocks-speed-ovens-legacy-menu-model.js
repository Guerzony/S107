"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSpeedOvensLegacyMenuModel = void 0;
const groups_1 = require("../groups");
const menu_configs_1 = require("../menu-configs");
const menu = {
    configs: (0, menu_configs_1.mockSpeedOvensLegacyConfigsModel)(),
    groups: (0, groups_1.mockSpeedOvensLegacyGroupsModel)()
};
const mockSpeedOvensLegacyMenuModel = () => menu;
exports.mockSpeedOvensLegacyMenuModel = mockSpeedOvensLegacyMenuModel;
