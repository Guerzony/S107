"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateCookbook = void 0;
class DbUpdateCookbook {
    constructor(updateCookbookRepository) {
        this.updateCookbookRepository = updateCookbookRepository;
    }
    async update(id, cookbook) {
        return await this.updateCookbookRepository.updateCookbook(id, cookbook);
    }
}
exports.DbUpdateCookbook = DbUpdateCookbook;
