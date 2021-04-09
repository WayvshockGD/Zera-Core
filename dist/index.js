"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.Module = exports.Command = void 0;
var Command_1 = require("./lib/structures/Command");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return __importDefault(Command_1).default; } });
var Module_1 = require("./lib/structures/Module");
Object.defineProperty(exports, "Module", { enumerable: true, get: function () { return __importDefault(Module_1).default; } });
var Database_1 = require("./lib/Database");
Object.defineProperty(exports, "Database", { enumerable: true, get: function () { return __importDefault(Database_1).default; } });
