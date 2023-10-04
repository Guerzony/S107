import { UserModel } from '../../../usecases/load-equip-by-menu/db-load-equip-by-menu-protocols'

export interface LoadUserBySerialNumberRepository {
  loadUserBySerialNumber: (serialNumber: string) => Promise<UserModel | null>
}
