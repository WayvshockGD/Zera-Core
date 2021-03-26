"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.Embedder = exports.Command = void 0;
var Command_1 = require("./lib/structures/Command");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return __importDefault(Command_1).default; } });
var Embedder_1 = require("./lib/utility/Embedder");
Object.defineProperty(exports, "Embedder", { enumerable: true, get: function () { return __importDefault(Embedder_1).default; } });
var Database_1 = require("./lib/Database");
Object.defineProperty(exports, "Database", { enumerable: true, get: function () { return __importDefault(Database_1).default; } });
