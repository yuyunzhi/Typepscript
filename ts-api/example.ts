
const someValue: any = "patch";
const strLength: number = (<string>someValue).length;

const someValue2: unknown= ['number','data'];
const strLength2: number = (someValue2 as string).length;

console.log('strLength2', strLength2);

// never 永远到达不了终点的函数
// unknow 
// null
// undefined
// void

const foo = {} as Function;

let user:any = {
    info:0
}

let getInfo = user?.info?.a?.b
console.log('getInfo', getInfo);
