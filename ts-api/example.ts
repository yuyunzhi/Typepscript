

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

class Man {
    public handsome = 'handsome'
}

class Women {
    public beautiful = 'beautiful'
}

function Human(args: Man | Women) {
  

    if (args instanceof Man) {

    } else {

    }
}

// 123123123123

interface Ip {
    age:number
    text:string
}
const person: Ip = {
    age: 3,
    text: 'hello world'
}

function get1<T,K extends keyof T>(o: T, name: K): T[K]{
    return o[name];
}

const age1 = get1(person, "age");
const text1 = get1(person, 'text');



// keyof

type x = keyof Ip // "age" | "text"

interface Hero {
    name: string;
    skill: string;
}

const zed: Hero = { name: "影流之主", skill: "影子" };
type LOL = typeof zed; // type LOL = Hero
