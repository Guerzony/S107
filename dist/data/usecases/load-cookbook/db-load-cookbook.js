"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadRecipeCookbook = void 0;
class DbLoadRecipeCookbook {
    constructor(loadRecipeCookbookRepository) {
        this.loadRecipeCookbookRepository = loadRecipeCookbookRepository;
    }
    async loadRecipeCookbook(idCompany) {
        const recipes = await this.loadRecipeCookbookRepository.loadRecipeCookbook(idCompany);
        return recipes;
    }
}
exports.DbLoadRecipeCookbook = DbLoadRecipeCookbook;
