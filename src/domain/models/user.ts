export interface UserModel {
  id?: number,
  idUser: number,
  typeUser: string,
  storeId: number,
  serialNumber: string,
  creationDate: string,
  softwareVersion: string
  sentMenu: number,
  companyId: number,
  iokPin: string,
  name: string,
  categoryId: number,
  dataUpdate: boolean,
  appUpdate: boolean,
  statusData: string,
  statusApp: string,
  hashSw: string,
  menuId: number,
  lastUpdate: number,
  companyIdRemoteAccess?: number,
  powerVersion?: string
  forcedUpdate?: number
}

export interface UserOvenModel {
  idUser?: number,
  name: string,
  typeUser: string,
  idUser: number,
  dataUpdate: boolean,
  statusData: string,
  appUpdate: boolean,
  statusApp: string,
  serialNumber: string,
  menuId: number,
  sentMenu: number,
  iokPin: string,
  creationDate: string,
  softwareVersion: string,
  hashSw: string,
  lastUpdate?: string,
  storeId?: number,
  companyId?: number,
  categoryId?: number,
  companyIdRemoteAccess?: number,
  forcedUpdate?: number
  powerVersion?: string
}

export interface CreateUserOvenModel {
  idUser?: number,
  typeUser: string,
  dataUpdate: boolean,
  appUpdate: boolean,
  serialNumber: string,
  creationDate: string,
  softwareVersion: string,
  powerVersion?: string
}

export interface UpdateUserModel {
  id?: number,
  idUser: number,
  typeUser?: string,
  storeId?: number,
  serialNumber?: string,
  creationDate?: string,
  softwareVersion?: string
  sentMenu?: number,
  companyId?: number,
  iokPin: string,
  name?: string,
  categoryId?: number,
  dataUpdate?: boolean,
  appUpdate?: boolean,
  statusData?: string,
  statusApp?: string,
  hashSw?: string,
  menuId?: number,
  lastUpdate: number,
  companyIdRemoteAccess?: number,
  powerVersion?: string
}
