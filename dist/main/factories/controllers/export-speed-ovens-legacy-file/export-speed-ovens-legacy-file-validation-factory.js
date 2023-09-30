"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeExportSpeedOvensLegacyFileValidationFactory = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const validators_1 = require("../../../../presentation/helpers/validators");
const makeExportSpeedOvensLegacyFileValidationFactory = () => {
    const validations = [];
    const fields = ['menuId', 'generation'];
    for (const field of fields) {
        if (field === 'menuId')
            validations.push(new validators_1.NumericFieldValidation(field));
        if (field === 'generation')
            validations.push(new validators_1.GenerationValidation());
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeExportSpeedOvensLegacyFileValidationFactory = makeExportSpeedOvensLegacyFileValidationFactory;
