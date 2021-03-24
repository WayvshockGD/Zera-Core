"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Embedder = /** @class */ (function () {
    function Embedder() {
    }
    Embedder.prototype.modEmbed = function (message, text) {
        return message.channel.createMessage({
            embed: {
                title: text.title,
                description: text.desc,
                color: 0xff7542
            }
        });
    };
    Embedder.prototype.LogEmbed = function (message, text) {
        return message.channel.createMessage({
            embed: {
                title: text.title,
                description: text.desc,
                color: 0x42ff65
            }
        });
    };
    return Embedder;
}());
exports.default = new Embedder();
