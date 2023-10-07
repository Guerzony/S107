"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockInsertUser = exports.mockDeleteUserRequest = exports.mockAddUserResponse = exports.mockUpdateUserRequest = exports.mockUserModel = exports.mockUpdateUser = exports.mockAddUserRequest = exports.mockLoadUserBySerialNumberResponse = exports.mockLoadUserByIdResponse = exports.mockLoadHasUpdateUserRequest = exports.mockLoadUserByIdRequest = void 0;
const mockLoadUserByIdRequest = () => ({ params: { id: 1 } });
exports.mockLoadUserByIdRequest = mockLoadUserByIdRequest;
const mockLoadHasUpdateUserRequest = () => ({ params: { idUser: 1, iokPin: 'DE@Prat1c@BR2021' } });
exports.mockLoadHasUpdateUserRequest = mockLoadHasUpdateUserRequest;
const mockLoadUserByIdResponse = () => ({
    id: 1,
    name: 'joao',
    matricula: 123,
    materia: 'S107',
    nota: 80
});
exports.mockLoadUserByIdResponse = mockLoadUserByIdResponse;
const mockLoadUserBySerialNumberResponse = () => ({
    id: 1,
    name: 'joao',
    matricula: 123,
    materia: 'S107',
    nota: 80
});
exports.mockLoadUserBySerialNumberResponse = mockLoadUserBySerialNumberResponse;
const mockAddUserRequest = () => ({
    body: {
        name: 'joao',
        matricula: 123,
        materia: 'S107',
        nota: 80
    }
});
exports.mockAddUserRequest = mockAddUserRequest;
const mockUpdateUser = () => ({
    name: 'joao',
    matricula: 123,
    materia: 'S107',
    nota: 80
});
exports.mockUpdateUser = mockUpdateUser;
const mockUserModel = () => ({
    name: 'joao',
    matricula: 123,
    materia: 'S107',
    nota: 80
});
exports.mockUserModel = mockUserModel;
const mockUpdateUserRequest = (updateId) => ({
    body: {
        user: { id: updateId, ...(0, exports.mockUpdateUser)() }
    },
    params: {
        id: 1
    }
});
exports.mockUpdateUserRequest = mockUpdateUserRequest;
const mockAddUserResponse = () => Object.assign((0, exports.mockUserModel)(), { id: 1 });
exports.mockAddUserResponse = mockAddUserResponse;
const mockDeleteUserRequest = (id) => ({ params: { id } });
exports.mockDeleteUserRequest = mockDeleteUserRequest;
const mockInsertUser = async () => {
    return { idUser: 1 };
};
exports.mockInsertUser = mockInsertUser;
