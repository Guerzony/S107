import { EquipModel, EquipOvenModel } from '../../../usecases/load-equip-by-menu/db-load-equip-by-menu-protocols'

export interface AddRecoverEquipmentRepository {
  addRecoverEquipment: (equipment: EquipOvenModel) => Promise<EquipModel>
}
