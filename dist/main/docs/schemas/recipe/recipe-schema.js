"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeSchema = void 0;
exports.recipeSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer'
        },
        equipTypeId: {
            type: 'integer'
        },
        groupId: {
            type: 'integer'
        },
        menuId: {
            type: 'integer'
        },
        recipeName: {
            type: 'string'
        },
        recipePosition: {
            type: 'number'
        },
        recipeImage: {
            type: 'string'
        },
        creationDate: {
            type: 'integer',
            format: 'date-time'
        },
        createdBy: {
            type: 'integer'
        },
        lastUpdate: {
            type: 'integer',
            format: 'date-time'
        },
        updatedBy: {
            type: 'integer'
        },
        isFavorite: {
            type: 'boolean'
        },
        heatMore: {
            type: 'number'
        },
        brownMore: {
            type: 'number'
        },
        heatBrownMore: {
            type: 'number'
        },
        ingredientType: {
            type: 'number'
        },
        dishType: {
            type: 'number'
        },
        ingredients: {
            type: 'string'
        },
        instructions: {
            type: 'string'
        },
        weight: {
            type: 'number'
        },
        entryTemp: {
            type: 'number'
        },
        preheatTemp: {
            type: 'number'
        },
        origin: {
            type: 'string'
        },
        preheatMode: {
            type: 'string'
        },
        preheatSteam: {
            type: 'number'
        },
        preheatType: {
            type: 'string'
        }
    },
    required: ['id', 'equipTypeId', 'groupId', 'menuId', 'recipeName', 'recipePosition', 'recipeImage', 'creationDate', 'createdBy', 'lastUpdate', 'updatedBy', 'isFavorite', 'heatMore', 'brownMore', 'heatBrownMore', 'ingredientType', 'dishType', 'ingredients', 'instructions', 'weight', 'entryTemp', 'preheatTemp', 'origin', 'preheatMode', 'preheatSteam', 'preheatType']
};
