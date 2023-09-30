export const cookbookSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      readOnly: true
    },
    equipTypeId: {
      type: 'number'
    },
    recipeName: {
      type: 'string'
    },
    recipeImage: {
      type: 'string'
    },
    creationDate: {
      type: 'string',
      format: 'date-time'
    },
    createdBy: {
      type: 'number'
    },
    lastUpdate: {
      type: 'string',
      format: 'date-time'
    },
    updatedBy: {
      type: 'number'
    },
    ingredientType: {
      type: 'number'
    },
    dishType: {
      type: 'number'
    },
    ingredients: {
      type: 'string'
    },
    instructions: {
      type: 'string'
    },
    weight: {
      type: 'number'
    },
    entryTemp: {
      type: 'number'
    },
    companyId: {
      type: 'number'
    },
    menuId: {
      type: 'number'
    },
    language: {
      type: 'number'
    },
    origin: {
      type: 'string'
    },
    preheatTemp: {
      type: 'number'
    },
    preheatMode: {
      type: 'string'
    },
    preheatSteam: {
      type: 'number'
    },
    preheatType: {
      type: 'string'
    }
  },
  required: [
    'equipTypeId',
    'recipeName',
    'recipeImage',
    'creationDate',
    'createdBy',
    'lastUpdate',
    'updatedBy',
    'ingredientType',
    'dishType',
    'ingredients',
    'instructions',
    'weight',
    'entryTemp',
    'companyId',
    'menuId',
    'language',
    'origin',
    'preheatTemp',
    'preheatMode',
    'preheatSteam',
    'preheatType'
  ]
}
