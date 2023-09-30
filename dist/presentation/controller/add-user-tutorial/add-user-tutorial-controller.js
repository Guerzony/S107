"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserTutorialController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
class AddUserTutorialController {
    constructor(validation, addUserTutorial) {
        this.validation = validation;
        this.addUserTutorial = addUserTutorial;
    }
    async handle(httpRequest) {
        try {
            const userError = this.validation.validate(httpRequest.body.userTutorial);
            if (userError) {
                return (0, http_helper_1.badRequest)(userError);
            }
            const userTutorial = httpRequest.body.userTutorial;
            const user = await this.addUserTutorial.addUserTutorials(userTutorial);
            return (0, http_helper_1.created)({ userTutorial: user });
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.AddUserTutorialController = AddUserTutorialController;
