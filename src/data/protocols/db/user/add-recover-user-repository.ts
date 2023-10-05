import { UserModel, UserOvenModel } from '../../../usecases/load-equip-by-menu/db-load-equip-by-menu-protocols'

export interface AddRecoverUserRepository {
  addRecoverUser: (user: UserOvenModel) => Promise<UserModel>
}
