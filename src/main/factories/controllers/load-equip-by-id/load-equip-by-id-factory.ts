import { LoadEquipByIdController } from '../../../../presentation/controller/load-equip-by-id/load-equip-by-id-controller'
import { Controller } from '../../../../presentation/protocols'
import { ControllerDecorator } from '../../../decorators/log-controller-decorator'
import { makeDbLoadEquipById } from '../../usecases/load-equipment/db-load-equip-by-id'
import { makeLoadEquipByIdValidation } from './load-equip-by-id-validation-factory'

export const makeLoadEquipByIdController = (): Controller => {
  const loadEquipByIdController = new LoadEquipByIdController(makeDbLoadEquipById(), makeLoadEquipByIdValidation())
  return new ControllerDecorator(loadEquipByIdController)
}
