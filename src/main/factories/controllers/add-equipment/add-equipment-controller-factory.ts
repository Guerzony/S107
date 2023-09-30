import { Controller } from '../../../../presentation/protocols'
import { makeAddEquipmentValidation } from './add-equipment-validation-factory'
import { makeDbAddEquipment } from '../../usecases/add-equipment/db-add-equipment-factory'
import { AddEquipmentController } from '../../../../presentation/controller/add-equipment/add-equipment-controller'
import { ControllerDecorator } from '../../../decorators/log-controller-decorator'

export const makeAddEquipmentController = (): Controller => {
  const addEquipmentController = new AddEquipmentController(makeAddEquipmentValidation(), makeDbAddEquipment())

  return new ControllerDecorator(addEquipmentController)
}
