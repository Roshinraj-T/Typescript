"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineModel) {
        this.horsePower = horsePower;
        this.engineModel = engineModel;
        console.log("engine exported successfully");
    }
    return Engine;
}());
exports.Engine = Engine;
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    return Auto;
}());
exports.Auto = Auto;
