"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerDecorator = void 0;
class ControllerDecorator {
    constructor(controller) {
        this.controller = controller;
    }
    async handle(httpRequest) {
        const httpResponse = await this.controller.handle(httpRequest);
        return httpResponse;
    }
}
exports.ControllerDecorator = ControllerDecorator;
