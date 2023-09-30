import { LoadEquipByCompanyIdRemoteAccess } from '../../../../domain/usecases/load-equip-by-companyIdRemoteAccess'

export interface LoadEquipByCompanyIdRemoteAccessRepository {
  loadEquipByCompanyIdRemoteAccess: (companyIdRemoteAccess: number) => Promise<LoadEquipByCompanyIdRemoteAccessRepository.Result>
}

// eslint-disable-next-line no-redeclare
export namespace LoadEquipByCompanyIdRemoteAccessRepository {
  export type Result = LoadEquipByCompanyIdRemoteAccess.Response[]
}
