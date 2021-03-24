"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pinner = /** @class */ (function () {
    function Pinner() {
    }
    Pinner.prototype._pinMessage = function (message) {
        try {
            message.pin();
        }
        catch (error) {
            console.log(error);
        }
    };
    Pinner.prototype._unPinMessage = function (message) {
        try {
            message.unpin();
        }
        catch (error) {
            console.log(error);
        }
    };
    return Pinner;
}());
exports.default = new Pinner();
