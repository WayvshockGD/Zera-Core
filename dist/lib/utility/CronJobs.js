"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cron_1 = __importDefault(require("cron"));
var CronJob = /** @class */ (function () {
    function CronJob(pattern, data) {
        return new cron_1.default.CronJob(pattern, function () { data; });
    }
    CronJob.prototype.start = function (cron) {
        cron.start();
    };
    return CronJob;
}());
exports.default = CronJob;
