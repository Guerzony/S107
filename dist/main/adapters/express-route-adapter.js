"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adptRoute = void 0;
const fs_1 = __importDefault(require("fs"));
const adptRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params
        };
        const httpResponse = await controller.handle(httpRequest);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            if (httpResponse.download) {
                res.status(httpResponse.statusCode).download(httpResponse.download, async (err) => {
                    if (httpResponse.file) {
                        const { filePath, folderPath } = httpResponse.file;
                        try {
                            if (fs_1.default.existsSync(filePath))
                                await fs_1.default.promises.unlink(filePath);
                            if (fs_1.default.existsSync(folderPath))
                                await fs_1.default.promises.rmdir(folderPath);
                        }
                        catch (error) {
                            console.log('[adptRoute.httpResponse] => error: ', error);
                        }
                    }
                    if (err) {
                        console.log('[adptRoute.httpResponse] => error: ', err);
                        res.status(500).json({ error: 'Error downloading the file.' });
                    }
                });
            }
            else {
                res.status(httpResponse.statusCode).json(httpResponse.body);
            }
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            });
        }
    };
};
exports.adptRoute = adptRoute;
