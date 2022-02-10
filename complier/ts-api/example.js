"use strict";
var _a, _b;
var someValue = "patch";
var strLength = someValue.length;
var someValue2 = ['number', 'data'];
var strLength2 = someValue2.length;
console.log('strLength2', strLength2);
var foo = {};
var user = {
    info: 0
};
var getInfo = (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.a) === null || _b === void 0 ? void 0 : _b.b;
console.log('getInfo', getInfo);
var Man = (function () {
    function Man() {
        this.handsome = 'handsome';
    }
    return Man;
}());
var Women = (function () {
    function Women() {
        this.beautiful = 'beautiful';
    }
    return Women;
}());
function Human(args) {
    if (args instanceof Man) {
    }
    else {
    }
}
var person = {
    age: 3,
    text: 'hello world'
};
function get1(o, name) {
    return o[name];
}
var age1 = get1(person, "age");
var text1 = get1(person, 'text');
var zed = { name: "影流之主", skill: "影子" };
function sleep(args) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(args);
        }, 1000);
    });
}
sleep(6).then(function (res) {
    console.log(res);
});
document.getElementById("#app");
