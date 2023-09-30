"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadRecipeCMAX = void 0;
class DbLoadRecipeCMAX {
    constructor(loadRecipeCMAXRepository) {
        this.loadRecipeCMAXRepository = loadRecipeCMAXRepository;
    }
    async loadRecipeCMAX(idMenu) {
        const recipes = await this.loadRecipeCMAXRepository.loadRecipeCMAX(idMenu);
        return recipes;
    }
}
exports.DbLoadRecipeCMAX = DbLoadRecipeCMAX;
