"use strict";
var _a, _b;
const someValue = "patch";
const strLength = someValue.length;
const someValue2 = ['number', 'data'];
const strLength2 = someValue2.length;
console.log('strLength2', strLength2);
const foo = {};
let user = {
    info: 0
};
let getInfo = (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.a) === null || _b === void 0 ? void 0 : _b.b;
console.log('getInfo', getInfo);
class Man {
    constructor() {
        this.handsome = 'handsome';
    }
}
class Women {
    constructor() {
        this.beautiful = 'beautiful';
    }
}
function Human(args) {
    if (args instanceof Man) {
    }
    else {
    }
}
const person = {
    age: 3,
    text: 'hello world'
};
function get1(o, name) {
    return o[name];
}
const age1 = get1(person, "age");
const text1 = get1(person, 'text');
const zed = { name: "影流之主", skill: "影子" };
