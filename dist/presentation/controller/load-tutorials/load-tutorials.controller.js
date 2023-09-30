"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTutorialsController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class LoadTutorialsController {
    constructor(loadTutorials, validation) {
        this.loadTutorials = loadTutorials;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.params);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const response = await this.loadTutorials.loadTutorials(httpRequest.params.idUser);
            if (!response)
                return (0, http_helper_1.noContent)();
            return (0, http_helper_1.ok)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.LoadTutorialsController = LoadTutorialsController;
