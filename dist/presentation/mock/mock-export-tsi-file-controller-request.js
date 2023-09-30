"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockExportTsiFileHttpRequest = void 0;
const mockExportTsiFileHttpRequest = (menuId) => ({
    params: {
        menuId: menuId !== null && menuId !== void 0 ? menuId : 1
    }
});
exports.mockExportTsiFileHttpRequest = mockExportTsiFileHttpRequest;
