import { LoadUserByPinRepository } from '../../data/protocols/db/user/load-user-by-pin-repository'
import { RegisterUserRepository } from '../../data/protocols/db/user/register-user-repository'
import { LoadUserByCompanyIdRepository } from '../../data/protocols/db/user/load-user-by-company-id-repository'
import { LoadUserByIdRepository } from '../../data/protocols/db/user/load-user-by-id-repository'
import { AddUserRepository } from '../../data/protocols/db/user/add-user-repository'
import { UserModel, UserOvenModel, UpdateUserModel, CreateUserOvenModel } from '../../domain/models/user'
import { UpdateUserRepository } from '../../data/protocols/db/user/update-user-repository'
import { DeleteUserRepository } from '../../data/protocols/db/user/delete-user-repository'
import { CountUserRepository } from '../../data/protocols/db/user/count-user-repository'
import { LoadUserByUserIdRepository } from '../../data/protocols/db/user/load-user-by-user-id-repository'
import { AddRecoverUserRepository } from '../../data/protocols/db/user/add-recover-user-repository'

export class UserMySqlRepository implements
  LoadUserByPinRepository,
  RegisterUserRepository,
  LoadUserByCompanyIdRepository,
  LoadUserByIdRepository,
  AddUserRepository,
  UpdateUserRepository,
  DeleteUserRepository,
  LoadUserByUserIdRepository {
  loadByUserPin(IOKPin: String): Promise<UserModel> {
    throw new Error('Method not implemented.')
  }
  registerUser(idUser: number, idCompany: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
  loadUserByCompanyId: (companyId: number) => Promise<LoadUserByCompanyIdRepository.Result>
  loadUserById: (Id: number) => Promise<UserModel & { modelName: string; categoryName: string; storeName: string; menuName: string; address: string; city: string; zipCode: string }>
  addUser: (userType: CreateUserOvenModel) => Promise<UserModel>
  updateUser(id: number, user: UpdateUserModel): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  deleteUser: (id: number) => Promise<boolean>

  loadUserByUserId(userId: number): Promise<LoadUserByUserIdRepository.Result> {
    throw new Error('Method not implemented.')
  }




}
