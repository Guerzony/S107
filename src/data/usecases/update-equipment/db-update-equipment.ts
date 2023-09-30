import { UpdateEquipment } from '../../../domain/usecases/update-equipment'
import { UpdateEquipmentRepository } from '../../protocols/db/equipment/update-equipment-repository'

export class DbUpdateEquipment implements UpdateEquipment {
  private readonly repository: UpdateEquipmentRepository
  constructor(repository: UpdateEquipmentRepository) {
    this.repository = repository
  }

  async update(id: number, equipment: any): Promise<boolean> {
    return await this.repository.updateEquipment(id, equipment)
  }
}
