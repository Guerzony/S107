import { Controller } from '../../../../presentation/protocols'
import { ControllerDecorator } from '../../../decorators/log-controller-decorator'
import { DeleteEquipmentController } from '../../../../presentation/controller/delete-equipment/delete-equipment-controller'
import { makeDeleteEquipmentValidation } from './delete-equipment-validation-factory'
import { makeDbDeleteEquipment } from '../../usecases/delete-equipment/db-delete-equipment-factory'

export const makeDeleteEquipmentController = (): Controller => {
  const deleteEquipmentController = new DeleteEquipmentController(makeDeleteEquipmentValidation(), makeDbDeleteEquipment())
  return new ControllerDecorator(deleteEquipmentController)
}
