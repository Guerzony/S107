import { LoadUserByIdController } from '../../../../presentation/controller/load-equip-by-id/load-equip-by-id-controller'
import { Controller } from '../../../../presentation/protocols'
import { ControllerDecorator } from '../../../decorators/log-controller-decorator'
import { makeDbLoadUserById } from '../../usecases/load-user/db-load-equip-by-id'
import { makeLoadUserByIdValidation } from './load-equip-by-id-validation-factory'

export const makeLoadUserByIdController = (): Controller => {
  const loadUserByIdController = new LoadUserByIdController(makeDbLoadUserById(), makeLoadUserByIdValidation())
  return new ControllerDecorator(loadUserByIdController)
}
