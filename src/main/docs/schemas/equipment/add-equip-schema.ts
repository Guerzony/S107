export const addUserRequestSchema = {
  type: 'object',
  properties: {
    idUser: {
      type: 'integer'
    },
    typeUser: {
      type: 'string'
    },
    dataUpdate: {
      type: 'boolean'
    },
    appUpdate: {
      type: 'boolean'
    },
    serialNumber: {
      type: 'string'
    },
    creationDate: {
      type: 'string',
      format: 'date-time'
    },
    softwareVersion: {
      type: 'string'
    },
    powerVersion: {
      type: 'string'
    }
  },
  required: ['idUser', 'typeUser', 'dataUpdate', 'appUpdate', 'serialNumber', 'creationDate', 'softwareVersion', 'powerVersion']
}

export const addUserResponseSchema = {
  type: 'object',
  properties: {
    idUser: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    menuId: {
      type: 'integer'
    },
    iokPin: {
      type: 'string'
    },
    typeUser: {
      type: 'string'
    },
    dataUpdate: {
      type: 'boolean'
    },
    appUpdate: {
      type: 'boolean'
    },
    serialNumber: {
      type: 'string'
    },
    creationDate: {
      type: 'string',
      format: 'date-time'
    },
    softwareVersion: {
      type: 'string'
    },
    idUser: {
      type: 'integer',
      required: false
    },
    storeId: {
      type: 'integer'
    },
    companyId: {
      type: 'integer'
    },
    sentMenu: {
      type: 'integer'
    },
    lastUpdate: {
      type: 'string',
      format: 'date-time'
    },
    categoryId: {
      type: 'integer'
    },
    statusData: {
      type: 'string'
    },
    statusApp: {
      type: 'string'
    },
    hashSw: {
      type: 'integer'
    },
    powerVersion: {
      type: 'string'
    }
  },
  required: [
    'idUser',
    'idUser',
    'typeUser',
    'storeId',
    'serialNumber',
    'creationDate',
    'softwareVersion',
    'sentMenu',
    'companyId',
    'iokPin',
    'name',
    'categoryId',
    'dataUpdate',
    'appUpdate',
    'f',
    'statusApp',
    'hashSw',
    'menuId',
    'powerVersion']
}
