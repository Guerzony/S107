
import { LoadUserByIdRepository } from '../../data/protocols/db/user/load-user-by-id-repository'
import { AddUserRepository } from '../../data/protocols/db/user/add-user-repository'
import { UserModel, UpdateUserModel, CreateUserOvenModel } from '../../domain/models/user'
import { UpdateUserRepository } from '../../data/protocols/db/user/update-user-repository'
import { DeleteUserRepository } from '../../data/protocols/db/user/delete-user-repository'

export class UserMySqlRepository implements
  LoadUserByIdRepository,
  AddUserRepository,
  UpdateUserRepository,
  DeleteUserRepository {
  loadByUserPin(IOKPin: String): Promise<UserModel> {
    throw new Error('Method not implemented.')
  }
  registerUser(idUser: number, idCompany: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  loadUserById: (Id: number) => Promise<UserModel & { modelName: string; categoryName: string; storeName: string; menuName: string; address: string; city: string; zipCode: string }>
  addUser: (userType: CreateUserOvenModel) => Promise<UserModel>
  updateUser(id: number, user: UpdateUserModel): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  deleteUser: (id: number) => Promise<boolean>






}
