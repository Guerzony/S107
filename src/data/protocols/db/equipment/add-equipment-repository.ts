import { UserModel, CreateUserOvenModel } from '../../../usecases/load-equip-by-menu/db-load-equip-by-menu-protocols'

export interface AddUserRepository {
  addUser: (userType: AddUserRepository.Parameter) => Promise<AddUserRepository.Result>
}

// eslint-disable-next-line no-redeclare
export namespace AddUserRepository {
  export type Result = UserModel
  export type Parameter = CreateUserOvenModel
}
