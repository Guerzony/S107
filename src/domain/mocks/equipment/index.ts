/* eslint-disable no-undef */
import { AddEquipment } from './../../usecases/add-equipment'

import { LoadEquipById, LoadHasUpdateEquip } from '../../usecases/load-equip-by-id'
import { EquipModel, UpdateEquipModel } from '../../models/equipment'
import { UpdateEquipment } from '../../usecases/update-equipment'
import { DeleteEquipment } from '../../usecases/delete-equipment'

export const mockLoadEquipByIdRequest = (): LoadEquipById.Request => ({ params: { id: 1 } })

export const mockLoadHasUpdateEquipRequest = (): LoadHasUpdateEquip.Request => ({ params: { idEquip: 1, iokPin: 'DE@Prat1c@BR2021' } })

export const mockLoadEquipByIdResponse = (): LoadEquipById.Response => ({
  id: 1,
  idUser: 0,
  typeEquipment: 'typeEquipment',
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

export const mockLoadEquipBySerialNumberResponse = (): EquipModel => (
  {
    id: 1,
    idUser: 0,
    typeEquipment: 'typeEquipment',
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

export const mockAddEquipmentRequest = (): AddEquipment.Request => (
  {
    body: {
      idEquipment: 1,
      typeEquipment: 'typeEquipment',
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

export const mockUpdateEquipment = (): UpdateEquipModel => (
  {
    idUser: 0,
    typeEquipment: 'typeEquipment',
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

export const mockEquipModel = (): EquipModel => (
  {
    idUser: 0,
    typeEquipment: 'typeEquipment',
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

export const mockUpdateEquipmentRequest = (updateId: number): UpdateEquipment.Request => (
  {
    body: {
      equipment: { id: updateId, ...mockUpdateEquipment() }
    },
    params: {
      id: 1
    }
  }
)

export const mockAddEquipmentResponse = (): EquipModel => Object.assign(mockEquipModel(), { id: 1 })

export const mockDeleteEquipmentRequest = (id: number): DeleteEquipment.Request => ({ params: { id } })

export const mockInsertEquip = async (): Promise<{ idEquip: number }> => {
  return { idEquip: 1 }
}
