import { LoadUserById } from '../../../domain/usecases/load-equip-by-id'
import { LoadUserByIdRepository } from '../../protocols/db/user/load-equip-by-id-repository'

export class DbLoadUserById implements LoadUserById {
  private readonly repository: LoadUserByIdRepository
  constructor(repository: LoadUserByIdRepository) {
    this.repository = repository
  }

  async load(id: number): Promise<LoadUserByIdRepository.Result> {
    return this.repository.loadUserById(id)
  }
}
