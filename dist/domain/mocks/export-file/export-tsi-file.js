"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockExportTsiFileMenu = void 0;
const groups_1 = require("../groups");
const menu_configs_1 = require("../menu-configs");
const configs = (0, menu_configs_1.mockTsiConfigsModel)();
const groups = (0, groups_1.mockTsiGroupModel)();
const mockExportTsiFileMenu = () => ({
    configs,
    groups
});
exports.mockExportTsiFileMenu = mockExportTsiFileMenu;
