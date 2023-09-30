"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockExportSpeedOvensFileHttpRequest = void 0;
const mockExportSpeedOvensFileHttpRequest = (menuId, equipmentModel) => ({
    params: {
        menuId: menuId !== null && menuId !== void 0 ? menuId : 1,
        equipmentModel: equipmentModel !== null && equipmentModel !== void 0 ? equipmentModel : 'COPA, ROCKET, COPA SM'
    }
});
exports.mockExportSpeedOvensFileHttpRequest = mockExportSpeedOvensFileHttpRequest;
