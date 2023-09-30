import { CreateEquipOvenModel, EquipOvenModel, EquipModel } from './../models/equipment'

export interface AddEquipment {
  add(equipment: CreateEquipOvenModel): Promise<EquipModel>
}

// eslint-disable-next-line no-redeclare
export namespace AddEquipment {
  export type Response = EquipOvenModel
  export type Request = {
    body: CreateEquipOvenModel,
    params: {
      pin?: string
    }
  }
}
