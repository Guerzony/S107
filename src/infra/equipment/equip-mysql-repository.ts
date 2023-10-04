import { Pool } from 'mysql'
import { LoadUserByPinRepository } from '../../data/protocols/db/user/load-equip-by-pin-repository'
import { RegisterUserRepository } from '../../data/protocols/db/user/register-equip-repository'
import { LoadUserByMenuRepository } from '../../data/protocols/db/user/load-equip-by-menu-repository'
import { LoadUserByCompanyIdRepository } from '../../data/protocols/db/user/load-equip-by-company-id-repository'
import { LoadUserByIdRepository } from '../../data/protocols/db/user/load-equip-by-id-repository'
import { AddUserRepository } from '../../data/protocols/db/user/add-user-repository'
import { UserModel, UserOvenModel, UpdateUserModel } from '../../domain/models/user'
import { customGet, deleteById, getOne, insertOne, updateAll, updateById } from '../mysql-helper'
import { countUserSQL, loadUserByCompanyIdRemoteAccessSQL, loadUserByCompanyIdSQL, loadUserByIdSQL, loadUserByUserIdSQL } from '../query-helpers'
import { UpdateUserRepository } from '../../data/protocols/db/user/update-user-repository'
import { DeleteUserRepository } from '../../data/protocols/db/user/delete-user-repository'
import { CountUserRepository } from '../../data/protocols/db/user/count-user-repository'
import { LoadUserByUserIdRepository } from '../../data/protocols/db/user/load-equip-by-user-id-repository'
import { AddRecoverUserRepository } from '../../data/protocols/db/user/add-recover-user-repository'
import { LoadUserByCompanyIdRemoteAccessRepository } from '../../data/protocols/db/user/load-equip-by-companyIdRemoteAccess-repository'

export class UserMySqlRepository implements
  LoadUserByPinRepository,
  RegisterUserRepository,
  LoadUserByMenuRepository,
  LoadUserByCompanyIdRepository,
  LoadUserByIdRepository,
  AddUserRepository,
  UpdateUserRepository,
  DeleteUserRepository,
  CountUserRepository,
  LoadUserByUserIdRepository,
  AddRecoverUserRepository,
  LoadUserByCompanyIdRemoteAccessRepository {
  private readonly connectionPool: Pool

  async loadUserByCompanyIdRemoteAccess(companyIdRemoteAccess: number): Promise<LoadUserByCompanyIdRemoteAccessRepository.Result> {
    const sql = loadUserByCompanyIdRemoteAccessSQL(companyIdRemoteAccess)
    return await customGet<LoadUserByCompanyIdRepository.Result>(this.connectionPool, sql)
  }

  async addRecoverUser(user: UserOvenModel): Promise<UserModel> {
    const result = await insertOne(this.connectionPool, 'user', user)
    const userResponse = await getOne(this.connectionPool, 'user', 'id', result.insertId)
    return userResponse[0]
  }

  async loadUserByUserId(userId: number): Promise<LoadUserByUserIdRepository.Result> {
    const sql = loadUserByUserIdSQL(userId)
    return await customGet<LoadUserByUserIdRepository.Result>(this.connectionPool, sql)
  }

  async loadUserBySerialNumber(serialNumber: string): Promise<UserModel> {
    const result = await getOne(this.connectionPool, 'user', 'serialNumber', serialNumber)
    return result[0]
  }

  async addUser(user: AddUserRepository.Parameter): Promise<AddUserRepository.Result> {
    const result = await insertOne(this.connectionPool, 'user', user)
    const userResponse = await getOne(this.connectionPool, 'user', 'id', result.insertId)
    return userResponse[0]
  }

  async loadByUserMenu(menuId: number): Promise<UserModel[]> {
    const result = await getOne(this.connectionPool, 'user', 'sentMenu', menuId)
    return result
  }

  async loadByUserPin(IOKPin: string): Promise<UserModel> {
    const result = await getOne(this.connectionPool, 'user', 'iokPin', IOKPin)
    return result[0]
  }

  async registerUser(idUser: number, idCompany: number): Promise<void> {
    await updateById(this.connectionPool, 'user', 'companyId', idUser, idCompany)
  }

  async loadUserByCompanyId(companyId: number): Promise<LoadUserByCompanyIdRepository.Result> {
    const sql = loadUserByCompanyIdSQL(companyId)
    return await customGet<LoadUserByCompanyIdRepository.Result>(this.connectionPool, sql)
  }

  async loadUserById(id: number): Promise<LoadUserByIdRepository.Result> {
    const sql = loadUserByIdSQL(id)
    const result = await customGet<LoadUserByIdRepository.Result[]>(this.connectionPool, sql)
    if (result.length === 0) return null
    return result[0]
  }

  async updateUser(id: number, user: UpdateUserModel): Promise<boolean> {
    const setFields = Object.entries(user)
      .map(value => `${value[0]} = ${isNaN(value[1]) ? `"${value[1]}"` : value[1]}`)
      .join(', ')
    const result = await updateAll(this.connectionPool, 'user', setFields, id)
    if (result.affectedRows === 0) return false
    return true
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await deleteById(this.connectionPool, 'user', 'id', id)
    if (result.affectedRows === 0) return false
    return true
  }

  async countUser(where?: CountUserRepository.Parameter): Promise<CountUserRepository.Result> {
    const sql = countUserSQL(where)
    const result = await customGet(this.connectionPool, sql)
    return result[0]
  }
}
