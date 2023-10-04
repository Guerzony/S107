import { CountUser } from '../../../../domain/usecases/count-user'

export interface CountUserRepository {
  countUser: (where?: CountUserRepository.Parameter) => Promise<CountUserRepository.Result>
}
// eslint-disable-next-line no-redeclare
export namespace CountUserRepository {
  export type Parameter = CountUser.Parameter
  export type Result = CountUser.Response
}
