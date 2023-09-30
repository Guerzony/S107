"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogControllerDecorator = void 0;
class LogControllerDecorator {
    constructor(controller, logErrorRepository) {
        this.logErrorRepository = logErrorRepository;
        this.controller = controller;
    }
    async handle(httpRequest) {
        const httpResponse = await this.controller.handle(httpRequest);
        if (httpResponse.statusCode === 500) {
            this.logErrorRepository.logError(httpResponse.body.stack);
        }
        return httpResponse;
    }
}
exports.LogControllerDecorator = LogControllerDecorator;
