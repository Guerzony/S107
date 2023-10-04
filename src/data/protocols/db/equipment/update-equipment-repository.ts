import { UpdateUserModel } from '../../../usecases/load-equip-by-menu/db-load-equip-by-menu-protocols'

export interface UpdateUserRepository {
  updateUser(id: number, user: UpdateUserRepository.Parameter): Promise<boolean>
}

// eslint-disable-next-line no-redeclare
export namespace UpdateUserRepository {
  export type Parameter = UpdateUserModel
}
