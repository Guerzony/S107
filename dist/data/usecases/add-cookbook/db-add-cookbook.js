"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddCookbook = void 0;
class DbAddCookbook {
    constructor(addCookbookRepository) {
        this.addCookbookRepository = addCookbookRepository;
    }
    async addCookbook(cookbook) {
        const cookbookResult = await this.addCookbookRepository.addCookbook(cookbook);
        return cookbookResult;
    }
}
exports.DbAddCookbook = DbAddCookbook;
