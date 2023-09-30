"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateSoftware = void 0;
const files_repository_1 = require("../../../../infra/db/files/files-repository");
const db_update_software_1 = require("../../../../data/usecases/update-software/db-update-software");
const makeDbUpdateSoftware = () => {
    const loadEquipByRepository = new files_repository_1.FilesRepositoryEquipment();
    return new db_update_software_1.DbUpdateSoftware(loadEquipByRepository);
};
exports.makeDbUpdateSoftware = makeDbUpdateSoftware;
