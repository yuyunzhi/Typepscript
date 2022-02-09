// never 永远到达不了终点的函数
// 异常
function err(msg: string): never { // OK
    throw new Error(msg);
}

// 死循环
function loopForever(): never { // OK
    while (true) { };
}


// never是任何类型的子类型


// unknow vs any

// 任何类型都可以赋值给 unknown 和 any

let notSure: unknown = 4;
notSure = "maybe a string instead"; // OK
notSure = false; // OK


/**
 * any 也可以赋值给任何类型，但是unknow只能赋值给unknow或any
 **/

let notSure2: any = 4;
let uncertain2: unknown = notSure2; // OK


// unknow 可以赋值给 any
let notSure1: unknown = 4;
let uncertain1: any = notSure1; // OK

// unknow 可以赋值给 unknown
let notSure4: unknown = 4;
let uncertain4: unknown = notSure4; // OK

// unknow 不可以赋值给 number
let notSure3: unknown = 4;
let uncertain3: number = notSure3; // Error

// unknow 不可以赋值给 string
let notSure5: unknown = 4;
let uncertain5: string = notSure5; // Error
