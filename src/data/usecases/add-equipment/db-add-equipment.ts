import { CreateEquipOvenModel, EquipModel } from '../../../domain/models/equipment'
import { AddEquipment } from '../../../domain/usecases/add-equipment'
import { AddEquipmentRepository } from '../../protocols/db/equipment/add-equipment-repository'

export class DbAddEquipment implements AddEquipment {
  private readonly repository: AddEquipmentRepository
  constructor(repository: AddEquipmentRepository) {
    this.repository = repository
  }

  async add(equipment: CreateEquipOvenModel): Promise<EquipModel> {
    const equipmentResponse = await this.repository.addEquipment(equipment)
    return equipmentResponse
  }
}
