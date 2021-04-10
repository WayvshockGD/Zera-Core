"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Markdown = /** @class */ (function () {
    function Markdown() {
    }
    Markdown.prototype.spoiler = function (args) {
        return "||" + args + "||";
    };
    Markdown.prototype.codeBlock = function (args, language) {
        return "```" + language + "\n" + args + "\n```";
    };
    Markdown.prototype.underline = function (args) {
        return "__" + args + "__";
    };
    Markdown.prototype.bold = function (args) {
        return "**" + args + "**";
    };
    Markdown.prototype.strikeThrough = function (args) {
        return "~~" + args + "~~";
    };
    return Markdown;
}());
exports.default = Markdown;
