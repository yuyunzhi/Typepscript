"use strict";
var _a, _b;
const someValue = "patch";
const strLength = someValue.length;
const someValue2 = ['number', 'data'];
const strLength2 = someValue2.length;
console.log('strLength2', strLength2);
// never 永远到达不了终点的函数
// unknow 
// null
// undefined
// void
const foo = {};
let user = {
    info: 0
};
let getInfo = (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.a) === null || _b === void 0 ? void 0 : _b.b;
console.log('getInfo', getInfo);
