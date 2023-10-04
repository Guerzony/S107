export interface RegisterUserRepository {
    registerUser(idUser: number, idCompany: number): Promise<void>
}
