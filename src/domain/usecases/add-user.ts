import { CreateUserOvenModel, UserOvenModel, UserModel } from '../models/user'

export interface AddUser {
  add(user: CreateUserOvenModel): Promise<UserModel>
}

// eslint-disable-next-line no-redeclare
export namespace AddUser {
  export type Response = UserOvenModel
  export type Request = {
    body: CreateUserOvenModel,
    params: {
      pin?: string
    }
  }
}
