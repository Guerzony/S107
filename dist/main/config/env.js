"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    db: {
        host: 'bancopraticaiok.cgqwh3kn1czy.sa-east-1.rds.amazonaws.com',
        user: 'adminPraticaIok',
        password: '35D1SYK6',
        database: 'bancopraticaiok_new'
    },
    dbTest: {
        host: 'bancopraticaiok.cgqwh3kn1czy.sa-east-1.rds.amazonaws.com',
        user: 'adminPraticaIok',
        password: '35D1SYK6',
        database: 'bancopraticaiok_new_test'
    },
    previousDb: {
        host: 'bancopraticaiok.cgqwh3kn1czy.sa-east-1.rds.amazonaws.com',
        user: 'adminPraticaIok',
        password: '35D1SYK6',
        database: 'bancopraticaiok_teste'
    },
    port: process.env.PORT || 5050,
    jwtSecret: 'Pr@tic@-2022'
};
