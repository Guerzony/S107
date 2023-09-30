"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCountEquipmentValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const valid_table_fields_validations_1 = require("../../../../presentation/helpers/validators/valid-table-fields-validations");
const makeCountEquipmentValidation = () => {
    const validations = [];
    const columns = ['name', 'categoryId', 'equipTypeId', 'storeId', 'swVersion', 'sentMenuId', 'companyId'];
    validations.push(new valid_table_fields_validations_1.ValidTableFieldValidation(columns));
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeCountEquipmentValidation = makeCountEquipmentValidation;
