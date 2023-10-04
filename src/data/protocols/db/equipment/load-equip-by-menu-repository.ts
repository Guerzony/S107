import { UserModel } from '../../../../domain/models/user'

export interface LoadUserByMenuRepository {
    loadByUserMenu(menuId: number): Promise<UserModel[]>
}
