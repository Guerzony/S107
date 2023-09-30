import { Controller } from '../../../../presentation/protocols'
import { makeUpdateEquipmentBodyValidation } from './update-equipment-body-validation-factory'
import { makeUpdateEquipmentParamsValidation } from './update-equipment-params-validation-factory'
import { makeDbUpdateEquipment } from '../../usecases/update-equipment/db-update-equipment-factory'
import { UpdateEquipmentController } from '../../../../presentation/controller/update-equipment/update-equipment-controller'
import { ControllerDecorator } from '../../../decorators/log-controller-decorator'

export const makeUpdateEquipmentController = (): Controller => {
  const updateEquipmentController = new UpdateEquipmentController(makeUpdateEquipmentParamsValidation(), makeUpdateEquipmentBodyValidation(), makeDbUpdateEquipment())
  return new ControllerDecorator(updateEquipmentController)
}
