import { UserOvenModel, UserModel } from '../models/user'

export interface LoadUserById {
  load(id: number): Promise<LoadUserById.Response>;
}

// eslint-disable-next-line no-redeclare
export namespace LoadUserById {
  export type Response = UserModel & {
    modelName: string
    categoryName: string
    storeName: string
    menuName: string
    address: string
    city: string
    zipCode: string
  } | null
  export type Request = {
    params: {
      id: number
    }
  }
}

export namespace LoadHasUpdateUser {
  export type Response = UserOvenModel | null
  export type Request = {
    params: {
      idUser: number,
      iokPin: string
    }
  }
}
