import { LoadUserByCompanyIdRemoteAccess } from '../../../../domain/usecases/load-equip-by-companyIdRemoteAccess'

export interface LoadUserByCompanyIdRemoteAccessRepository {
  loadUserByCompanyIdRemoteAccess: (companyIdRemoteAccess: number) => Promise<LoadUserByCompanyIdRemoteAccessRepository.Result>
}

// eslint-disable-next-line no-redeclare
export namespace LoadUserByCompanyIdRemoteAccessRepository {
  export type Result = LoadUserByCompanyIdRemoteAccess.Response[]
}
