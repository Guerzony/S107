import { EquipMySqlRepository } from '../../../../infra/equipment/equip-mysql-repository'
import { DbAddEquipment } from '../../../../data/usecases/add-equipment/db-add-equipment'
import { AddEquipment } from '../../../../domain/usecases/add-equipment'

export const makeDbAddEquipment = (): AddEquipment => {
  const repository = new EquipMySqlRepository()
  return new DbAddEquipment(repository)
}
