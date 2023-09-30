"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStoreParamsSchema = void 0;
exports.addStoreParamsSchema = {
    type: 'object',
    properties: {
        store: {
            type: 'object',
            properties: {
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
                }
            }
        }
    },
    required: ['storeName', 'cnpj', 'companyId', 'street', 'state', 'neighborhood', 'zipCode', 'streetNumber', 'city', 'latitude', 'longitude']
};
