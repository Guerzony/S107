"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockExportSpeedOvensFileHttpRequest = void 0;
const mockExportSpeedOvensFileHttpRequest = (menuId, userModel) => ({
    params: {
        menuId: menuId !== null && menuId !== void 0 ? menuId : 1,
        userModel: userModel !== null && userModel !== void 0 ? userModel : 'COPA, ROCKET, COPA SM'
    }
});
exports.mockExportSpeedOvensFileHttpRequest = mockExportSpeedOvensFileHttpRequest;
