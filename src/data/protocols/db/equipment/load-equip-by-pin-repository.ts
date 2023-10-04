import { UserModel } from '../../../../domain/models/user'

export interface LoadUserByPinRepository {
    loadByUserPin(IOKPin: String): Promise<UserModel | null>
}
