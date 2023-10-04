"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeParamsSchema = void 0;
exports.storeParamsSchema = {
    type: 'object',
    properties: {
        store: {
            type: 'object',
            properties: {
                id: {
                    type: 'number'
                },
                storeName: {
                    type: 'string'
                },
                cnpj: {
                    type: 'string'
                },
                companyId: {
                    type: 'number'
                },
                street: {
                    type: 'string'
                },
                state: {
                    type: 'string'
                },
                neighborhood: {
                    type: 'string'
                },
                zipCode: {
                    type: 'number'
                },
                streetNumber: {
                    type: 'number'
                },
                city: {
                    type: 'string'
                },
                latitude: {
                    type: 'number'
                },
                longitude: {
                    type: 'number'
                },
                userCount: {
                    type: 'number'
                }
            }
        }
    },
    required: ['id', 'storeName', 'cnpj', 'companyId', 'street', 'state', 'neighborhood', 'zipCode', 'streetNumber', 'city', 'latitude', 'longitude']
};
