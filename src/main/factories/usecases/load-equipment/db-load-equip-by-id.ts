import { UserMySqlRepository } from '../../../../infra/user/equip-mysql-repository'
import { DbLoadUserById } from '../../../../data/usecases/load-equip-by-id/db-load-equip-by-id'

export const makeDbLoadUserById = (): DbLoadUserById => {
  const loadUserByRepository = new UserMySqlRepository()
  return new DbLoadUserById(loadUserByRepository)
}
