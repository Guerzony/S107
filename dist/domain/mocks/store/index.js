"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDeleteStoreRequest = exports.mockUpdateStoreRequest = exports.mockLoadStoreByIdResponse = exports.mockLoadStoreByIdRequest = exports.mockLoadStoresByCompanyIdResponse = exports.mockLoadStoresByCompanyIdRequest = exports.mockAddStoreResponse = exports.mockAddStoreRequest = exports.mockFakeStore = exports.mockFakeStoreWithId = void 0;
const mockFakeStoreWithId = () => ({
    storeName: 'storeName',
    cnpj: 'storeCnpj',
    companyId: 1,
    street: 'streetName',
    state: 'stateName',
    neighborhood: 'neighborhoodName',
    zipCode: 12345678,
    streetNumber: 1,
    city: 'cityName',
    latitude: 1.12345,
    longitude: -1.12345
});
exports.mockFakeStoreWithId = mockFakeStoreWithId;
const mockFakeStore = (id = 1) => ({ id: 1, ...(0, exports.mockFakeStoreWithId)(), equipmentCount: 0 });
exports.mockFakeStore = mockFakeStore;
// CREATE
const mockAddStoreRequest = () => ({
    body: {
        store: (0, exports.mockFakeStoreWithId)()
    }
});
exports.mockAddStoreRequest = mockAddStoreRequest;
const mockAddStoreResponse = () => (0, exports.mockFakeStore)(1);
exports.mockAddStoreResponse = mockAddStoreResponse;
// READ
const mockLoadStoresByCompanyIdRequest = () => ({ params: { companyId: 1, userId: 1, userPrivilegeUser: 'admCli' } });
exports.mockLoadStoresByCompanyIdRequest = mockLoadStoresByCompanyIdRequest;
const mockLoadStoresByCompanyIdResponse = () => ([{
        ...(0, exports.mockFakeStore)(1)
    }, {
        ...(0, exports.mockFakeStore)(2)
    }]);
exports.mockLoadStoresByCompanyIdResponse = mockLoadStoresByCompanyIdResponse;
const mockLoadStoreByIdRequest = () => ({ params: { id: 1 } });
exports.mockLoadStoreByIdRequest = mockLoadStoreByIdRequest;
const mockLoadStoreByIdResponse = () => (0, exports.mockFakeStore)(1);
exports.mockLoadStoreByIdResponse = mockLoadStoreByIdResponse;
// UPDATE
const mockUpdateStoreRequest = (updateId) => ({
    body: {
        store: (0, exports.mockFakeStore)(updateId)
    },
    params: {
        id: updateId
    }
});
exports.mockUpdateStoreRequest = mockUpdateStoreRequest;
// DELETE
const mockDeleteStoreRequest = (id) => ({ params: { id } });
exports.mockDeleteStoreRequest = mockDeleteStoreRequest;
