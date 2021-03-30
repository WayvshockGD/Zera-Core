"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype._init = function (link, options) {
        return mongoose_1.default.connect(link, {
            useNewUrlParser: options.useNewUrlParser,
            useUnifiedTopology: options.useUnifiedTopology,
            autoIndex: options.autoIndex,
        });
    };
    return Database;
}());
exports.default = new Database();
