import { UserModel } from '../domain/models/user'

export const formatUserOven = (userResponse: UserModel) => {
  return {
    idUser: userResponse.id,
    name: userResponse.name,
    typeUser: userResponse.typeUser,
    idUser: userResponse.idUser,
    dataUpdate: userResponse.dataUpdate,
    statusData: userResponse.statusData,
    appUpdate: userResponse.appUpdate,
    statusApp: userResponse.statusApp,
    serialNumber: userResponse.serialNumber,
    menuId: userResponse.menuId,
    sentMenu: userResponse.sentMenu,
    iokPin: userResponse.iokPin,
    creationDate: userResponse.creationDate,
    sendConfig: true,
    softwareVersion: userResponse.softwareVersion,
    hashSw: userResponse.hashSw,
    powerVersion: userResponse.powerVersion
  }
}
