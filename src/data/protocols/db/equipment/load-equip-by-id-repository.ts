import { LoadUserById } from '../../../../domain/usecases/load-equip-by-id'

export interface LoadUserByIdRepository {
  loadUserById: (Id: number) => Promise<LoadUserByIdRepository.Result>
}

// eslint-disable-next-line no-redeclare
export namespace LoadUserByIdRepository {
  export type Result = LoadUserById.Response
}
