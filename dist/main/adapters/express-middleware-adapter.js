"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adptMiddleware = void 0;
const adptMiddleware = (middleware) => {
    return async (req, res, next) => {
        const httpRequest = {
            headers: req.headers
        };
        const httpResponse = await middleware.handle(httpRequest);
        if (httpResponse.statusCode === 200) {
            Object.assign(req.body, httpResponse.body);
            next();
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            });
        }
    };
};
exports.adptMiddleware = adptMiddleware;
