/* eslint-disable no-undef */
import { AddUser } from './../../usecases/add-user'

import { LoadUserById, LoadHasUpdateUser } from '../../usecases/load-equip-by-id'
import { UserModel, UpdateUserModel } from '../../models/user'
import { UpdateUser } from '../../usecases/update-user'
import { DeleteUser } from '../../usecases/delete-user'

export const mockLoadUserByIdRequest = (): LoadUserById.Request => ({ params: { id: 1 } })

export const mockLoadHasUpdateUserRequest = (): LoadHasUpdateUser.Request => ({ params: { idUser: 1, iokPin: 'DE@Prat1c@BR2021' } })

export const mockLoadUserByIdResponse = (): LoadUserById.Response => ({
  id: 1,
  idUser: 0,
  typeUser: 'typeUser',
  storeId: 0,
  serialNumber: 'serialNumber',
  creationDate: 'creationDate',
  softwareVersion: 'softwareVersion',
  sentMenu: 0,
  companyId: 0,
  iokPin: 'iokPin',
  name: 'name',
  categoryId: 0,
  dataUpdate: true,
  appUpdate: true,
  statusData: 'statusData',
  statusApp: 'statusData',
  hashSw: 'hashSw',
  menuId: 0,
  lastUpdate: 0,
  modelName: 'valid_model',
  categoryName: 'valid_category',
  storeName: 'valid_store',
  menuName: 'valid_menu',
  address: 'valid_address',
  city: 'valid_city',
  zipCode: 'valid_code'
})

export const mockLoadUserBySerialNumberResponse = (): UserModel => (
  {
    id: 1,
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusData',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0
  }
)

export const mockAddUserRequest = (): AddUser.Request => (
  {
    body: {
      idUser: 1,
      typeUser: 'typeUser',
      dataUpdate: true,
      appUpdate: true,
      creationDate: 'creationDate',
      serialNumber: 'serialNumber',
      softwareVersion: 'softwareVersion'
    },
    params: {
      pin: 'DE@Prat1c@BR2021'
    }
  }
)

export const mockUpdateUser = (): UpdateUserModel => (
  {
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusData',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0
  }
)

export const mockUserModel = (): UserModel => (
  {
    idUser: 0,
    typeUser: 'typeUser',
    storeId: 0,
    serialNumber: 'serialNumber',
    creationDate: 'creationDate',
    softwareVersion: 'softwareVersion',
    sentMenu: 0,
    companyId: 0,
    iokPin: 'iokPin',
    name: 'name',
    categoryId: 0,
    dataUpdate: true,
    appUpdate: true,
    statusData: 'statusData',
    statusApp: 'statusApp',
    hashSw: 'hashSw',
    menuId: 0,
    lastUpdate: 0
  }
)

export const mockUpdateUserRequest = (updateId: number): UpdateUser.Request => (
  {
    body: {
      user: { id: updateId, ...mockUpdateUser() }
    },
    params: {
      id: 1
    }
  }
)

export const mockAddUserResponse = (): UserModel => Object.assign(mockUserModel(), { id: 1 })

export const mockDeleteUserRequest = (id: number): DeleteUser.Request => ({ params: { id } })

export const mockInsertUser = async (): Promise<{ idUser: number }> => {
  return { idUser: 1 }
}
