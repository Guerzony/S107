import { DbDeleteEquipment } from '../../../../data/usecases/delete-equipment/db-delete-equipment'
import { DeleteEquipment } from '../../../../domain/usecases/delete-equipment'
import { EquipMySqlRepository } from '../../../../infra/equipment/equip-mysql-repository'

export const makeDbDeleteEquipment = (): DeleteEquipment => {
  const repository = new EquipMySqlRepository()
  return new DbDeleteEquipment(repository)
}
