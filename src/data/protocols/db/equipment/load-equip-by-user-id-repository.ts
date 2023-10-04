import { LoadUserByCompanyId } from '../../../../domain/usecases/load-equip-by-company-id'

export interface LoadUserByUserIdRepository {
  loadUserByUserId(userId: number): Promise<LoadUserByUserIdRepository.Result>
}

// eslint-disable-next-line no-redeclare
export namespace LoadUserByUserIdRepository {
  export type Result = LoadUserByCompanyId.Response[]
}
