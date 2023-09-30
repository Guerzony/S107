"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
const pt_json_1 = __importDefault(require("./pt.json"));
const en_json_1 = __importDefault(require("./en.json"));
const es_json_1 = __importDefault(require("./es.json"));
const fr_json_1 = __importDefault(require("./fr.json"));
const ru_json_1 = __importDefault(require("./ru.json"));
const pl_json_1 = __importDefault(require("./pl.json"));
const de_json_1 = __importDefault(require("./de.json"));
const zh_json_1 = __importDefault(require("./zh.json"));
const el_json_1 = __importDefault(require("./el.json"));
const translate = (key, lang) => {
    let langData = {};
    switch (lang) {
        case 'PT':
            langData = pt_json_1.default;
            break;
        case 'EN':
            langData = en_json_1.default;
            break;
        case 'ES':
            langData = es_json_1.default;
            break;
        case 'FR':
            langData = fr_json_1.default;
            break;
        case 'RU':
            langData = ru_json_1.default;
            break;
        case 'PL':
            langData = pl_json_1.default;
            break;
        case 'DE':
            langData = de_json_1.default;
            break;
        case 'ZH':
            langData = zh_json_1.default;
            break;
        case 'EL':
            langData = el_json_1.default;
            break;
        default:
            langData = en_json_1.default;
            break;
    }
    return langData[key];
};
exports.translate = translate;
