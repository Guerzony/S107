"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEquipmentController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const equipment_creation_error_1 = require("../../errors/equipment-creation-error");
const load_pin_error_1 = require("../../errors/load-pin-error");
const formatEquipOven_1 = require("../../../utils/formatEquipOven");
class AddEquipmentController {
    constructor(validation, addEquipment) {
        this.validation = validation;
        this.addEquipment = addEquipment;
    }
    async handle(httpRequest) {
        try {
            const { pin } = httpRequest.params;
            if (pin !== 'DE@Prat1c@BR2021')
                return (0, http_helper_1.forbidden)(new load_pin_error_1.LoadEquipByPinError());
            if (!httpRequest.body)
                return (0, http_helper_1.badRequest)(new Error());
            const requestEquipment = httpRequest.body;
            const validationError = this.validation.validate(requestEquipment);
            if (validationError)
                return (0, http_helper_1.badRequest)(validationError);
            const equipment = await this.addEquipment.add(requestEquipment);
            return (0, http_helper_1.created)((0, formatEquipOven_1.formatEquipOven)(equipment));
        }
        catch (error) {
            return (0, http_helper_1.serverError)(new equipment_creation_error_1.EquipmentCreationError());
        }
    }
}
exports.AddEquipmentController = AddEquipmentController;
