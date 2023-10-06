import { UserModel } from '../models/user'

export interface LoadUserById {
  load(id: number): Promise<LoadUserById.Response>;
}

// eslint-disable-next-line no-redeclare
export namespace LoadUserById {
  export type Response = UserModel | null
  export type Request = {
    params: {
      id: number
    }
  }
}

export namespace LoadHasUpdateUser {
  export type Response = UserModel | null
  export type Request = {
    params: {
      idUser: number,
      iokPin: string
    }
  }
}
