"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAddRelationTutorialsRequest = exports.mockTutorialRelationModel = exports.mockAddRelationTutorial = exports.mockLoadTutorialsRequest = exports.mockInsertTutorial = exports.mockReturnTutorials = exports.mockTutorialModel = exports.mockReturnCompany = exports.mockInsertCompany = exports.mockCompanyModel = exports.makeFakeRequestUserConfig = exports.mockAddUserConfigs = exports.mockUpdateUserConfigs = exports.mockReturnUserConfigs = exports.mockInsertUserConfigs = exports.mockUserConfigsModel = exports.makeFakeRequestGetUser = exports.makeFakeRequest = exports.makeFakeRequestInvalidLogin = exports.makeFakeRequestLoginTest = exports.makeFakeRequestLogin = exports.makeFakeRequestUserRecover = exports.makeFakeRequestUserAdm = exports.mockAccessToken = exports.makeFakeRequestLog = exports.mockDeleteRecuseUserRequest = exports.mockDeleteUserRequest = exports.mockLoadUserRequest = exports.mockUpdateUserRequest = exports.mockActivateTokenRequest = exports.mockAddUserRequest = exports.makeFakeRequestGetUserByCorporateName = exports.mockReturnUserStore = exports.mockReturnUser = exports.mockUpdateUser = exports.mockAddUser = exports.mockInsertUser = exports.mockUserModel = void 0;
/* eslint-disable no-undef */
const mysql_helper_1 = require("../../../infra/db/mysql/mysql-helper");
const env_1 = __importDefault(require("../../../main/config/env"));
const mysql_1 = __importDefault(require("mysql"));
const jsonwebtoken_1 = require("jsonwebtoken");
afterAll(() => {
    testConnection.end();
});
const testConnection = mysql_1.default.createPool(env_1.default.dbTest);
// User mock
const mockUserModel = (companyId) => ({
    userName: 'user_name',
    email: 'user_email@mail.com',
    emailVerified: true,
    companyId: companyId,
    phone: 'user_phone',
    password: 'hashed_password',
    userTypeId: 1,
    creationDate: '1111-11-11',
    accessToken: 'user_accessToken',
    activateToken: 'pinIOK'
});
exports.mockUserModel = mockUserModel;
const mockInsertUser = async () => {
    const company = await (0, exports.mockInsertCompany)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'User');
    const userResult = await (0, mysql_helper_1.insertOne)(testConnection, 'User', (0, exports.mockUserModel)(company.idCompany));
    return { idUser: userResult.insertId, idCompany: company.idCompany };
};
exports.mockInsertUser = mockInsertUser;
const mockAddUser = async () => {
    const company = await (0, exports.mockInsertCompany)();
    const userResult = (0, exports.mockUserModel)(company.idCompany);
    return userResult;
};
exports.mockAddUser = mockAddUser;
const mockUpdateUser = async () => {
    const user = await (0, exports.mockInsertUser)();
    const userResult = Object.assign((0, exports.mockUserModel)(user.idCompany), { id: user.idUser });
    return userResult;
};
exports.mockUpdateUser = mockUpdateUser;
const mockReturnUser = () => (Object.assign((0, exports.mockUserModel)(1), { id: 1 }));
exports.mockReturnUser = mockReturnUser;
const mockReturnUserStore = () => (Object.assign((0, exports.mockUserModel)(1), { id: 1 }, { stores: [{ label: 'storeName', value: 1 }] }));
exports.mockReturnUserStore = mockReturnUserStore;
const makeFakeRequestGetUserByCorporateName = async () => ({
    params: {
        corporateName: 'valid_name'
    }
});
exports.makeFakeRequestGetUserByCorporateName = makeFakeRequestGetUserByCorporateName;
const mockAddUserRequest = async () => {
    const user = await (0, exports.mockAddUser)();
    const httpRequest = {
        body: {
            user: user
        }
    };
    return httpRequest;
};
exports.mockAddUserRequest = mockAddUserRequest;
const mockActivateTokenRequest = () => ({
    body: {
        activateToken: 'pinIOK'
    }
});
exports.mockActivateTokenRequest = mockActivateTokenRequest;
const mockUpdateUserRequest = async () => {
    const user = await (0, exports.mockUpdateUser)();
    const httpRequest = {
        body: {
            user: user
        },
        params: {
            id: user.id
        }
    };
    return httpRequest;
};
exports.mockUpdateUserRequest = mockUpdateUserRequest;
const mockLoadUserRequest = async () => {
    const user = await (0, exports.mockInsertUser)();
    const httpRequest = {
        params: {
            id: user.idUser
        }
    };
    return httpRequest;
};
exports.mockLoadUserRequest = mockLoadUserRequest;
const mockDeleteUserRequest = async () => {
    const user = await (0, exports.mockInsertUser)();
    const httpRequest = {
        params: {
            id: user.idUser
        }
    };
    return httpRequest;
};
exports.mockDeleteUserRequest = mockDeleteUserRequest;
const mockDeleteRecuseUserRequest = async () => {
    const user = await (0, exports.mockInsertUser)();
    const httpRequest = {
        params: {
            id: user.idUser,
            name: 'user_name',
            companyName: 'valid_name',
            email: 'user_email@mail.com'
        }
    };
    return httpRequest;
};
exports.mockDeleteRecuseUserRequest = mockDeleteRecuseUserRequest;
const makeFakeRequestLog = () => ({
    body: {
        name: 'user_name',
        email: 'user_email@mail.com',
        password: 'hashed_password',
        passwordConfirmation: 'hashed_password'
    }
});
exports.makeFakeRequestLog = makeFakeRequestLog;
const mockAccessToken = async (idUser) => {
    let id;
    if (!idUser) {
        await (0, mysql_helper_1.deleteAll)(testConnection, 'User');
        const result = await (0, mysql_helper_1.insertOne)(testConnection, 'User', {
            id: 1,
            userName: 'valid_name',
            email: 'valid@mail.com',
            emailVerified: true,
            companyId: 1,
            phone: 'valid_phone',
            password: 'valid_password',
            creationDate: '2022-04-13',
            userTypeId: 1
        });
        id = result.insertId;
    }
    else {
        id = idUser;
    }
    const accessToken = (0, jsonwebtoken_1.sign)({ id }, env_1.default.jwtSecret);
    await (0, mysql_helper_1.updateById)(testConnection, 'User', 'accessToken', id, accessToken);
    return accessToken;
};
exports.mockAccessToken = mockAccessToken;
const makeFakeRequestUserAdm = async () => ({
    body: {
        user: {
            userName: 'valid_name',
            email: 'valid_email@mail.com',
            phone: 'valid_phone',
            creationDate: '2022-04-13',
            password: 'valid_password',
            passwordConfirmation: 'valid_password',
            language: 'PT'
        },
        company: {
            corporateName: 'valid_name',
            companyType: 'Prática'
        }
    }
});
exports.makeFakeRequestUserAdm = makeFakeRequestUserAdm;
const makeFakeRequestUserRecover = async () => ({
    body: {
        user: {
            userName: 'valid_name',
            email: 'valid_email@mail.com',
            phone: 'valid_phone',
            creationDate: '2022-04-13',
            password: 'valid_password',
            passwordConfirmation: 'valid_password',
            language: 'PT'
        },
        company: {
            corporateName: 'valid_name',
            companyType: 1
        }
    }
});
exports.makeFakeRequestUserRecover = makeFakeRequestUserRecover;
const makeFakeRequestLogin = async () => ({
    body: {
        email: 'valid_email@mail.com',
        password: 'valid_password'
    }
});
exports.makeFakeRequestLogin = makeFakeRequestLogin;
const makeFakeRequestLoginTest = async () => ({
    body: {
        email: 'user_email@mail.com',
        password: 'hashed_password'
    }
});
exports.makeFakeRequestLoginTest = makeFakeRequestLoginTest;
const makeFakeRequestInvalidLogin = async () => ({
    body: {
        email: 'invalid@email.com',
        password: 'invalid_password'
    }
});
exports.makeFakeRequestInvalidLogin = makeFakeRequestInvalidLogin;
const makeFakeRequest = async () => ({
    body: {
        user: {
            userName: 'valid_name',
            email: 'valid_email@mail.com',
            companyId: 1,
            phone: 'valid_phone',
            userTypeId: 2
        },
        userConfig: {
            language: 'PT',
            tempUnit: '°C',
            weightUnit: 'Gramas',
            theme: 'Light'
        }
    }
});
exports.makeFakeRequest = makeFakeRequest;
const makeFakeRequestGetUser = async () => ({
    body: {
        idUser: 1
    }
});
exports.makeFakeRequestGetUser = makeFakeRequestGetUser;
// User Config mock
const mockUserConfigsModel = (userId) => ({
    userId: userId,
    language: 'PT',
    tempUnit: '°C',
    weightUnit: 'Gramas',
    theme: 'Light'
});
exports.mockUserConfigsModel = mockUserConfigsModel;
const mockInsertUserConfigs = async () => {
    const user = await (0, exports.mockInsertUser)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'userConfigs');
    const consfigResult = await (0, mysql_helper_1.insertOne)(testConnection, 'userConfigs', (0, exports.mockUserConfigsModel)(user.idUser));
    return { idUser: user.idUser, idCompany: user.idCompany, idUserConfigs: consfigResult.insertId };
};
exports.mockInsertUserConfigs = mockInsertUserConfigs;
const mockReturnUserConfigs = () => (Object.assign((0, exports.mockUserConfigsModel)(1), { id: 1 }));
exports.mockReturnUserConfigs = mockReturnUserConfigs;
const mockUpdateUserConfigs = async () => {
    const userConfigs = await (0, exports.mockInsertUserConfigs)();
    const userResult = Object.assign((0, exports.mockUserConfigsModel)(userConfigs.idUser), { id: userConfigs.idUserConfigs });
    return userResult;
};
exports.mockUpdateUserConfigs = mockUpdateUserConfigs;
const mockAddUserConfigs = async () => {
    const user = await (0, exports.mockInsertUser)();
    const configResult = (0, exports.mockUserConfigsModel)(user.idUser);
    return configResult;
};
exports.mockAddUserConfigs = mockAddUserConfigs;
const makeFakeRequestUserConfig = async () => ({
    body: {
        userConfigs: (0, exports.mockReturnUserConfigs)()
    }
});
exports.makeFakeRequestUserConfig = makeFakeRequestUserConfig;
// Company mock
const mockCompanyModel = () => ({
    corporateName: 'valid_name',
    companyType: 'Prática'
});
exports.mockCompanyModel = mockCompanyModel;
const mockInsertCompany = async () => {
    await (0, mysql_helper_1.deleteAll)(testConnection, 'company');
    const companyResult = await (0, mysql_helper_1.insertOne)(testConnection, 'company', (0, exports.mockCompanyModel)());
    return { idCompany: companyResult.insertId };
};
exports.mockInsertCompany = mockInsertCompany;
const mockReturnCompany = () => (Object.assign((0, exports.mockCompanyModel)(), { id: 1 }));
exports.mockReturnCompany = mockReturnCompany;
// Tutorials mock
const mockTutorialModel = () => ({
    tutorialName: 'tutorialName'
});
exports.mockTutorialModel = mockTutorialModel;
const mockReturnTutorials = () => (Object.assign((0, exports.mockTutorialModel)(), { id: 1 }));
exports.mockReturnTutorials = mockReturnTutorials;
const mockInsertTutorial = async () => {
    const user = await (0, exports.mockInsertUser)();
    await (0, mysql_helper_1.deleteAll)(testConnection, 'tutorials');
    const tutorialResult = await (0, mysql_helper_1.insertOne)(testConnection, 'tutorials', (0, exports.mockTutorialModel)());
    return { idUser: user.idUser, idTutorials: tutorialResult.insertId };
};
exports.mockInsertTutorial = mockInsertTutorial;
const mockLoadTutorialsRequest = async () => {
    const tutorial = await (0, exports.mockInsertTutorial)();
    const httpRequest = {
        params: {
            idUser: tutorial.idUser
        }
    };
    return httpRequest;
};
exports.mockLoadTutorialsRequest = mockLoadTutorialsRequest;
const mockAddRelationTutorial = async () => {
    const tutorialResult = await (0, exports.mockInsertTutorial)();
    return { userId: tutorialResult.idUser, tutorialId: tutorialResult.idTutorials };
};
exports.mockAddRelationTutorial = mockAddRelationTutorial;
const mockTutorialRelationModel = () => ({
    userId: 1,
    tutorialId: 1
});
exports.mockTutorialRelationModel = mockTutorialRelationModel;
const mockAddRelationTutorialsRequest = async () => {
    const tutorial = await (0, exports.mockInsertTutorial)();
    const httpRequest = {
        body: {
            userTutorial: {
                userId: tutorial.idUser,
                tutorialId: tutorial.idTutorials
            }
        }
    };
    return httpRequest;
};
exports.mockAddRelationTutorialsRequest = mockAddRelationTutorialsRequest;
