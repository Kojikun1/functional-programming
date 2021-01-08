"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipe = function () {
    var fnc = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fnc[_i] = arguments[_i];
    }
    return function (param) {
        return fnc.reduce(function (amt, fnc) {
            return fnc(amt);
        }, param);
    };
};
var sum = function (a) { return a + a; };
var mult = function (a) { return a * a; };
var calc = pipe(sum, mult);
console.log(calc(5));
exports.default = { pipe: pipe };
