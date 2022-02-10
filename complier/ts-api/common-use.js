"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    info: {
        getAge: function () {
            return 1;
        }
    }
};
var age = (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.getAge) === null || _b === void 0 ? void 0 : _b.call(_a);
var users = {
    level: 0
};
var level1 = (_c = users.level) !== null && _c !== void 0 ? _c : '无';
var level2 = (_d = users.other_level) !== null && _d !== void 0 ? _d : '无';
var zed = { name: "影流之主", skill: "影子" };
function handler(event) {
    var element = event;
}
var reactData = {
    style: { color: 'red' },
    children: null,
    render: function (item) { },
    map: {
        's': ['1', '2'],
        'name': ['1', '2,3']
    }
};
