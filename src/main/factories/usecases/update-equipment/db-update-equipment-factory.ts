import { EquipMySqlRepository } from '../../../../infra/equipment/equip-mysql-repository'
import { DbUpdateEquipment } from '../../../../data/usecases/update-equipment/db-update-equipment'
import { UpdateEquipment } from '../../../../domain/usecases/update-equipment'

export const makeDbUpdateEquipment = (): UpdateEquipment => {
  const repository = new EquipMySqlRepository()
  return new DbUpdateEquipment(repository)
}
