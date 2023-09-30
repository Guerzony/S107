import { EquipMySqlRepository } from '../../../../infra/equipment/equip-mysql-repository'
import { DbLoadEquipById } from '../../../../data/usecases/load-equip-by-id/db-load-equip-by-id'

export const makeDbLoadEquipById = (): DbLoadEquipById => {
  const loadEquipByRepository = new EquipMySqlRepository()
  return new DbLoadEquipById(loadEquipByRepository)
}
