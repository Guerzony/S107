import { LoadUserByCompanyId } from '../../../../domain/usecases/load-equip-by-company-id'

export interface LoadUserByCompanyIdRepository {
  loadUserByCompanyId: (companyId: number) => Promise<LoadUserByCompanyIdRepository.Result>
}

// eslint-disable-next-line no-redeclare
export namespace LoadUserByCompanyIdRepository {
  export type Result = LoadUserByCompanyId.Response[]
}
