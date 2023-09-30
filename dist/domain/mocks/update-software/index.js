"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockResponse = exports.mockRequest = void 0;
const mockRequest = () => ({ params: { ovenModel: 'FIT, FIT ST', iokPin: 'valid_PIN' } });
exports.mockRequest = mockRequest;
const mockResponse = () => 'fitFile PIN OK';
exports.mockResponse = mockResponse;
